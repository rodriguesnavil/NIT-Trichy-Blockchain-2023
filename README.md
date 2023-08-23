# NIT Trichy ERC-20 Deployment Guide

This branch focuses on deploying our developed ERC-20 token to the Sepolia testnet.

## Prerequisites

- Ensure you have the project's dependencies installed:
    ```sh
    npm install
    ```

- Make sure you have set up the `SEPOLIA_RPC_URL` and your `PRIVATE_KEY` in the environment or a `.env` file for deployment.

## Deploying to Sepolia Testnet

1. **Deploy to Sepolia**:
    Use the following command to deploy your smart contract to the Sepolia testnet:
    ```sh
    npx hardhat run scripts/deploy.js --network sepolia
    ```

    Upon successful deployment, you should see an output indicating the contract's address. Keep this address safe; you'll need it to interact with the contract.

2. **Interacting with the Deployed Contract on Sepolia**:
    - Open your MetaMask or another compatible Ethereum wallet.
    - Make sure you are on the Sepolia testnet.
    - Add your deployed ERC-20 token using the contract address from the deployment output.

## Frontend Integration

1. **Setting Up**:
    Navigate to the frontend directory and install dependencies:
    ```sh
    cd frontend
    npm install
    ```

2. **Update the Contract Address**:
    Ensure that you've updated the frontend's configuration with the Sepolia-deployed contract address. At present this handled using the scripts/deploy.js file.

3. **Start the Frontend**:
    ```sh
    npm start
    ```

    This command will start the React frontend, and it should automatically open in your default browser. If not, navigate to [http://localhost:3000/](http://localhost:3000/).

4. **Interacting with the Dapp**:
    - Make sure your MetaMask is connected to the Sepolia testnet.
    - Interact with the Dapp to transfer, receive, or view the balance of ERC-20 token.
