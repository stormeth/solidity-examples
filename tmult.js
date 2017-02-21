fs = require('fs');
var Web3 = require('web3');

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var number = web3.eth.blockNumber;
//console.log(number)

/*
fs.readFile('tmult.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var obj = JSON.parse(data);
  abi = obj.contracts['tmult\.sol:TMult'].abi;
  bin = obj.contracts['tmult\.sol:TMult'].bin;
  //console.log(abi)
  //console.log(bin)

  var primaryAddress = web3.eth.accounts[0]
  //var abi = [{ constant: false, inputs: { name: 'a', type: 'uint256' } }]
  var MyContract = web3.eth.contract(abi)
  var contract = MyContract.new(7, {from: primaryAddress, data: bin})


});
*/

var json = JSON.parse(fs.readFileSync('tmult.json', 'utf8'));

abi1 = json.contracts['tmult\.sol:TMult'].abi;
bin = json.contracts['tmult\.sol:TMult'].bin;
console.log(abi1)
console.log(bin)

var primaryAddress = web3.eth.accounts[0]
var abi = [{ constant: false, inputs: { name: 'a', type: 'uint256' } }]
var MyContract = web3.eth.contract(abi)

var hexValue = "aaaaaa";
hexValue = "0x" + hexValue;
hexValue = parseInt(hexValue , 16);

var contract = MyContract.new('john', hexValue, {from: primaryAddress, data: bin})
