# Task Manager

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

    This will deploy the smart contracts to your local Ganache blockchain. Note down the contract address that is printed after deployment. You'll need this for the frontend.

### Frontend Setup

1. **Navigate to the client directory:**

    ```bash
    cd ../client
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Add the Contract Address to the Frontend:**

    After deploying the contract, you need to add the contract address in the frontend code:

    - **In `App.tsx`:**

        Open the `src/App.tsx` file and locate the `CONTRACT_ADDRESS` constant. Replace `"YOUR_CONTRACT_ADDRESS_HERE"` with the actual contract address you noted earlier.

        ```typescript
        const CONTRACT_ADDRESS = "YOUR_CONTRACT_ADDRESS_HERE";
        ```

    - **In `CreateTask.tsx`:**

        Similarly, open the `src/components/CreateTask.tsx` file and locate the `CONTRACT_ADDRESS` constant. Replace `"YOUR_CONTRACT_ADDRESS_HERE"` with the actual contract address.

        ```typescript
        const CONTRACT_ADDRESS = "YOUR_CONTRACT_ADDRESS_HERE";
        ```

4. **Start the development server:**

    ```bash
    npm run dev
    ```

    This will start the React development server on `http://localhost:3000`.

5. **Build the frontend (optional):**

    If you want to create a production build, run:

    ```bash
    npm run build
    ```

    This will generate optimized static files in the `build` directory.

### Conclusion

After following these steps, your smart contracts should be deployed locally, and you should be able to interact with them through the frontend client. If you encounter any issues, make sure that Ganache is running and that your contract address is correctly set in the frontend code.
