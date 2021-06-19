require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace hero fortune skull trap birth shift protect good knee swift suffer'; 
let testAccounts = [
"0x0eac96cba224dcad5f011bbf391c822f0a1dc975cc08ac76a4ac3fc04f0cb760",
"0x9eb7f4f07ac00ddcc9862bafd7bbac84526f693a0fb30c640e6a1ccc9077eda6",
"0x61887581b9177ac266a837ef7a609fba22061b8306aad9f3e4d5b371728645e1",
"0x3ff7443ab3471a62e43269de84c94d8babb86234a7d5177ea887fd0427a8451e",
"0xc8b20bc2658e7956b62137672a97b9ef87b6013344435efb446aabc57947d755",
"0x55ffa12a3aca366e0a5758851522a4f081eaf3475aeeeee6ae70a3d1d59abe11",
"0x89cf9950204b7d3d8ea7f9d151149ba2491db24a25a1a6926865c55144d6ba34",
"0xcf6b911725a244f9c2b2c8c6e7a064318b813de6a8e11e9fffc63ae383c51899",
"0xd377d75a142ba5a249f61fd31c202d97c06224c1edbc00463e59f365c50b6436",
"0x0fa5afc13e8bb108ceac811d3f37202f13364d78e1df7c95517ce39ba30542c9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

