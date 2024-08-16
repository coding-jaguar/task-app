const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const TaskManagerFactory = await ethers.getContractFactory("TaskManager");
  const taskManager = await TaskManagerFactory.deploy();

  console.log("TaskManager deployed to:", taskManager.target); // 'target' is used in v6 instead of 'address'
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
