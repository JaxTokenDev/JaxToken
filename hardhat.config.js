require('@nomicfoundation/hardhat-toolbox');
require('@nomiclabs/hardhat-etherscan');
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    base: {
      url: `${process.env.BASE_RPC_MAINNET}`,
      accounts: [process.env.PRIVATE_KEY],
    },
    baseSepolia: {
      url: `${process.env.BASE_RPC_TESTNET}`,
      chainId: 84532,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    baseSepolia: process.env.BASESCAN_API_KEY,
    base: process.env.BASESCAN_API_KEY,
  },
  customChains: [
    {
      network: 'baseSepolia',
      chainId: 84532,
      urls: {
        apiURL: 'https://api-sepolia.basescan.org/api',
        browserURL: 'https://sepolia.basescan.org/',
      },
    },
    {
      network: 'base',
      chainId: 8453,
      urls: {
        apiURL: 'https://api.basescan.org/api',
        browserURL: 'https://basescan.org/',
      },
    },
  ],
};
