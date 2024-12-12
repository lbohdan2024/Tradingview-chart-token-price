const { Web3 } = require('web3');
const { utils, providers,JsonRpcProvider } = require("ethers")

// Initialize Web3 with an HTTP provider
const web3 = new Web3('https://eth-mainnet.g.alchemy.com/v2/yqeEOL1QkLLg3P1qg-4tDRzPzsex5EbG');

const provider = new JsonRpcProvider('https://eth-mainnet.g.alchemy.com/v2/yqeEOL1QkLLg3P1qg-4tDRzPzsex5EbG');

// Example function to check if Web3 is working
async function checkWeb3() {
    try {
        const latestBlock = await web3.eth.getBlockNumber();
        console.log("Latest Ethereum Block Number:", latestBlock);
    } catch (error) {
        console.error("Error:", error);
    }
}

// checkWeb3();

