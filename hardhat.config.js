require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    hardhat: {
      forking: {
        url: process.env.ETH_NODE_URL,
      },
      blockGasLimit: 12000000,
      blockNumber: 12023336,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.7.0"
      },
      {
        version: "0.5.16"
      }
    ]
  }
};

