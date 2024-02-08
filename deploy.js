// Import required modules
const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
const { abi, evm } = require('./compile');

// Initialize a new HDWalletProvider with your mnemonic and Infura URL
const provider = new HDWalletProvider(
  'YOUR-MNEMONIC-KEY-GOES-HERE',
  'YOUR_INFURA_URL-GOES-HERE'
);

// Create a new Web3 instance using the HDWalletProvider
const web3 = new Web3(provider);

// Define the deploy function
const deploy = async () => {
  // Get a list of available accounts from the HDWalletProvider
  const accounts = await web3.eth.getAccounts();

  // Log the account from which deployment will be attempted
  console.log('Attempting to deploy from account', accounts[0]);

  // Deploy the contract using the specified ABI and bytecode, with the initial message 'Hi there!'
  const result = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[0] });

  // Log the address where the contract is deployed
  console.log('Contract deployed to', result.options.address);

  // Stop the provider to free up resources
  provider.engine.stop();
};

// Call the deploy function to initiate deployment
deploy();
