# My Project

This project consists of a backend powered by Hardhat for Ethereum smart contracts and a frontend React client. Follow the instructions below to get started.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js and npm
- Hardhat
- Ganache (for local Ethereum blockchain)

### Backend Setup

1. **Navigate to the backend directory:**

    ```bash
    cd backend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Compile the smart contracts:**

    ```bash
    npx hardhat compile
    ```

4. **Deploy the smart contracts to Ganache:**

    Make sure Ganache is running on your local machine.

    ```bash
    npx hardhat run scripts/deploy.js --network ganache
    ```

    This will deploy the smart contracts to your local Ganache blockchain. Make sure to note down the contract address.

### Frontend Setup

1. **Navigate to the client directory:**

    ```bash
    cd ../client
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm run dev
    ```

    This will start the React development server on `http://localhost:3000`.

4. **Build the frontend (optional):**

    If you want to create a production build, run:

    ```bash
    npm run build
    ```

    This will generate optimized static files in the `build` directory.

### Conclusion

After following these steps, your smart contracts should be deployed locally, and you should be able to interact with them through the frontend client. If you encounter any issues, make sure that Ganache is running and that your contract address is correctly set in the frontend code.
