require("@nomiclabs/hardhat-waffle");

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/MKb7EQdtudmy_Vl8R8jausS4rPjDauWF",
      accounts: []
    }
  },
  solidity: "0.8.4",
};
