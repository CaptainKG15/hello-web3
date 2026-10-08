const { ethers } = require("ethers");

// Replace with the testnet RPC URL you are using
const RPC_URL = "https://your-testnet-rpc-url";
const ADDRESS = "0xYourWalletAddress";

async function main() {
  const provider = new ethers.JsonRpcProvider(RPC_URL);
  const balance = await provider.getBalance(ADDRESS);
  console.log(`Balance: ${ethers.formatEther(balance)} ETH`);
}

main();
