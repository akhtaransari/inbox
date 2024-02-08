// Import required modules
const path = require('path');
const fs = require('fs');
const solc = require('solc');

// Resolve the path to the Solidity contract file
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');

// Read the Solidity contract source code from the file
const source = fs.readFileSync(inboxPath, 'utf8');

// Define the input for the Solidity compiler
const input = {
  language: 'Solidity',
  sources: {
    'Inbox.sol': {
      content: source, // Provide the Solidity source code
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'], // Select all output items
      },
    },
  },
};

// Compile the Solidity source code and convert the output to JSON
const output = JSON.parse(solc.compile(JSON.stringify(input)));

// Export the compiled contract object
module.exports = output.contracts['Inbox.sol'].Inbox;
