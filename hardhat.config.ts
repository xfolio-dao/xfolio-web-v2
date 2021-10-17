import { HardhatUserConfig } from 'hardhat/config';
import '@nomiclabs/hardhat-waffle';

const config: HardhatUserConfig = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/MKb7EQdtudmy_Vl8R8jausS4rPjDauWF',
      accounts: [],
    },
  },
  solidity: '0.8.4',
};

export default config;
