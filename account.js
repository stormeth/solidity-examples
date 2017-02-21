var Web3 = require('web3');

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var number = web3.eth.blockNumber;
//console.log(number);

var address0 = web3.eth.accounts[0];
console.log(address0)

var address1 = web3.eth.accounts[1];
console.log(address1)

var abi = [{ constant: false, inputs: { name: 'a', type: 'uint256' } }]
var MyContract = web3.eth.contract(abi);
