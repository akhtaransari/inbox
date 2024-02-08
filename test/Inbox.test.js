const assert = require('assert');
const ganache = require('ganache');
const { Web3 } = require('web3');

// Initialize Ganache as a provider for the Web3 instance
const web3 = new Web3(ganache.provider());

// Import the compiled contract's ABI and bytecode
const { abi, evm } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
  // Get a list of all accounts from the Ganache provider
  accounts = await web3.eth.getAccounts();

  // Deploy the contract with initial message 'Hi there!' from the first account
  inbox = await new web3.eth.Contract(abi)
    .deploy({
      data: evm.bytecode.object, // Set the bytecode of the contract
      arguments: ['Hi there!'],  // Pass the constructor arguments
    })
    .send({ from: accounts[0], gas: '1000000' }); // Send the transaction to deploy the contract
});

describe('Inbox', () => {
  // Test case: checks if the contract was successfully deployed
  it('deploys a contract', () => {
    assert.ok(inbox.options.address); // Assert that the contract has an address
  });

  // Test case: checks if the deployed contract has the default message 'Hi there!'
  it('has a default message', async () => {
    const message = await inbox.methods.message().call(); // Call the contract's message() function
    assert.equal(message, 'Hi there!'); // Assert that the message matches the default value
  });

  // Test case: checks if the message can be changed successfully
  it('can change the message', async () => {
    await inbox.methods.setMessage('bye').send({ from: accounts[0] }); // Send a transaction to change the message
    const message = await inbox.methods.message().call(); // Call the contract's message() function again
    assert.equal(message, 'bye'); // Assert that the message has been successfully changed
  });
});
