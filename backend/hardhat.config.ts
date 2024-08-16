import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545",
      // accounts: ["<PRIVATE_KEY_1>"], // Use the private keys from Ganache's generated accounts
    },
  },
};

export default config;
