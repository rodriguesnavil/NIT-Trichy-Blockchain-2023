# NIT Trichy Blockchain Workshop 2023: Hardhat ERC-20 Tutorial

This repository is a comprehensive guide to understanding blockchain with a specific focus on the ERC-20 token standard using Hardhat. The content is divided into sections that explain the theoretical aspects, followed by hands-on labs for practical understanding.

Whether you're a beginner in blockchain, a researcher diving deep, or a professor guiding others, this workshop provides a balance of foundational knowledge and practical skills.

## Quick Start

Kickstart your hands-on experience:

```sh
git clone https://github.com/rodriguesnavil/NIT-Trichy-Blockchain-2023.git
cd NIT-Trichy-Blockchain-2023
npm install
```

Start Hardhat's testing network:

```sh
npx hardhat node
```

On a separate terminal, navigate to the repository's root and deploy the contract:

```sh
npx hardhat run scripts/deploy.js --network localhost
```

Run the frontend:

```sh
cd frontend
npm install
npm start
```

Now, launch [http://localhost:3000/](http://localhost:3000/) to interact with the Dapp. Ensure [Coinbase Wallet](https://www.coinbase.com/wallet) or [Metamask](https://metamask.io) is installed and set to `localhost 8545`.

## Workshop Outline

1. **Understanding the ERC-20 Token Standard**: Delve deep into the functionalities and events associated with ERC-20.
2. **Hands-on Lab**: Use Hardhat to create, test, and deploy an ERC-20 token.
3. **Deep Dive**: Interact with your token, understand the intricacies of transfers, approvals, and allowances.

## Resources

- [Writing and Compiling Contracts](https://hardhat.org/tutorial/writing-and-compiling-contracts/)
- [Testing Contracts](https://hardhat.org/tutorial/testing-contracts/)
- [Hardhat's Full Documentation](https://hardhat.org/docs/)

For newcomers to Hardhat, consider this introductory [guide](https://hardhat.org/getting-started/#overview).

## What's Inside?

This repository is powered by [`@nomicfoundation/hardhat-toolbox`](https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-toolbox) offering:

- Contract interactions using [ethers.js](https://docs.ethers.io/v5/).
- Contract tests with [Mocha](https://mochajs.org/) and [Chai](https://chaijs.com/).
- Source code verification with [hardhat-etherscan](https://hardhat.org/hardhat-runner/plugins/nomiclabs-hardhat-etherscan).
- Gas metrics with [hardhat-gas-reporter](https://github.com/cgewecke/hardhat-gas-reporter).
- Test coverage metrics with [solidity-coverage](https://github.com/sc-forks/solidity-coverage).

A sample frontend/Dapp using [Create React App](https://github.com/facebook/create-react-app) is also provided.

## Troubleshooting

- Facing `Invalid nonce` errors? Reset your Metamask account: `Settings > Advanced > Clear activity tab data`.

## Editor Configuration

Enhance your Solidity development experience in VSCode with [Hardhat for Visual Studio Code](https://hardhat.org/hardhat-vscode).

## Stay Connected

For assistance with Hardhat, consult [this guide](https://hardhat.org/hardhat-runner/docs/guides/getting-help).

Stay updated on Hardhat news: [Follow on Twitter](https://twitter.com/HardhatHQ) and star [the official GitHub repository](https://github.com/NomicFoundation/hardhat).

**Happy coding and exploring!**

---