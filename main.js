const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('c6bbd0103d7ecbed596e61d20c137eaa75767e4a6ff74fdffa34febf2f004a12');
const myWalletAddress = myKey.getPublic('hex');

let coburnCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
coburnCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
coburnCoin.minePendingTransactions(myWalletAddress);

console.log('\n Balance of joe is', coburnCoin.getBalanceOfAddress(myWalletAddress));

console.log('is chain valid?', coburnCoin.isChainValid());

// Public key:  049315cb72c60523daf8d51cbd01b7bda384a51f6f3a1fadb378b30362e5b7a666ef2013a912dd80da025c0d7cee4007d9ea6ad75a7efeb42a2219d041a878109c