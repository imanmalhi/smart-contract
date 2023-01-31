const { ethers } = require("hardhat");

async function main() {
    const SmartContract = await ethers.getContractFactory("SmartContract");

    const instance = await SmartContract.deploy("Beginning to this contract.");
    console.log("Contract was deployed to address: ", instance.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });