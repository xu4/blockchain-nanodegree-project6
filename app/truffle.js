const HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic = "";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
  	development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
    provider: function () {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/40824bf33ccb41e5b819e067e4650e85");
      },
     network_id: 3,
     gasPrice: 10000000000,
    }
  }
};