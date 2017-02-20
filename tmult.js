var Web3 = require('web3');

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var number = web3.eth.blockNumber;
console.log(number)
