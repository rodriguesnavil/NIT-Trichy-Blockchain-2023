const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NITTcoin", function () {
    let MyToken, myToken, owner, addr1, addr2;

    beforeEach(async function () {
        MyToken = await ethers.getContractFactory("NITTcoin");
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
        myToken = await MyToken.deploy();
        await myToken.deployed();
    });

    // Test case 1
    it("Should have the right name and symbol", async function () {
        expect(await myToken.name()).to.equal("NIT Trichy coin");
        expect(await myToken.symbol()).to.equal("NITTcoin");
    });

    // Test case 2
    it("Should assign the total supply of tokens to the owner", async function () {
        const ownerBalance = await myToken.balanceOf(owner.address);
        expect(await myToken.totalSupply()).to.equal(ownerBalance);
    });

    // Test case 3
    it("Should transfer tokens between accounts", async function () {
        // Transfer 50 tokens from owner to addr1
        await myToken.transfer(addr1.address, 50);
        const addr1Balance = await myToken.balanceOf(addr1.address);
        expect(addr1Balance).to.equal(50);

        // Transfer 50 tokens from addr1 to addr2
        await myToken.connect(addr1).transfer(addr2.address, 50);
        const addr2Balance = await myToken.balanceOf(addr2.address);
        expect(addr2Balance).to.equal(50);
    });

   // Test case 4
   it("Should approve and then transfer with transferFrom", async function () {
        // Owner approves addr1 to spend 100 tokens
        await myToken.approve(addr1.address, 100);

        // Check approved allowance
        expect(await myToken.allowance(owner.address, addr1.address)).to.equal(100);

        // Addr1 transfers 50 tokens from owner to addr2
        await myToken.connect(addr1).transferFrom(owner.address, addr2.address, 50);

        // Check balances
        expect(await myToken.balanceOf(owner.address)).to.equal(999950);  // 1 million - 50
        expect(await myToken.balanceOf(addr2.address)).to.equal(50);
});

});
