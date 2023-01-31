const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const { ethers, network } = require("hardhat");
const contract = require("../artifacts/contracts/smartcontract.sol/SmartContract.json");

// Provider - Alchemy
const Alchemy_Provider = new ethers.providers.AlchemyProvider("goerli", API_KEY);

// Signer - Owner of private key
const signer = new ethers.Wallet(PRIVATE_KEY, Alchemy_Provider);

// Contract instance
const thissmartcontract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    const message = await thissmartcontract.message();
    console.log ("The message is: " + message);

    console.log ("Updating the message...");
    const updateMessage = await thissmartcontract.update("This is Iman");
    await updateMessage.wait();

    const newMessage = await thissmartcontract.message();
    console.log("This new message is: " + newMessage);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });