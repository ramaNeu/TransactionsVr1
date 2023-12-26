require('@nomiclabs/hardhat-waffle');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/6PoEXoIkd_mPBSQyjGk74EtcFgOguxcu',
      accounts: ['4aa3a7b549ef0478db444b0909f475551e18511ad1c7b98f3d55d05e42733fd3'],
    },
  },
};
