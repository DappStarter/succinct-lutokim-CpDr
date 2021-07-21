require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict prison sugar spot tower ring remember modify inner kitten surge surround'; 
let testAccounts = [
"0x18642dc7ac4827180d08ab7b631251139b07fd52bd4c4d424a1962304d660ed1",
"0xf911d703cfbcee1e7f0d13400aeb7d339088381a0a09a0360c689b3d6ba04b81",
"0x6d1ac5ee0b9d476fff929e2a9c0be594eb4ac90d6b5102098654f0ad518761ed",
"0x256aebb3abc92470289677c2e5a22448499e83be3dc60f577f379149f5239c03",
"0xdbb0c76251e4ee295e1d9a0e0452d994bd7d493b5bc59fd048848c8344186486",
"0x6275c279e1077966627184088f82dc592eff4a88d4cc3711915c2be58bf538d3",
"0x9e0486f01823f5e39892bf4108398a37396ebbee48f71429c8597acad8f4e82b",
"0xe40abe10f4e7a9aea30b9287df8b09044a501f319a388fef494081dc244b1f29",
"0xa82ec11c4e63022c459b6bfae6990d41e2154e6650c75de11f147d1d6894c947",
"0xc1487766b8c479870d27faa895d6cc251d411980557848406d6df5f1c0b75b43"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

