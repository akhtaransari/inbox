# Inbox Contract

This repository contains the source code for the `Inbox` smart contract written in Solidity. The `Inbox` contract allows you to store and update a message on the Ethereum blockchain.

## Getting Started

To deploy and interact with the `Inbox` contract, you'll need the following:

1. **Node.js**: Ensure you have Node.js installed on your machine.

2. **Ganache**: Ganache is a personal blockchain for Ethereum development. You can download and install it from [here](https://www.trufflesuite.com/ganache).

3. **Truffle**: Truffle is a development environment, testing framework, and asset pipeline for Ethereum. Install it globally via npm by running:
    ```
    npm install -g truffle
    ```

## Usage

1. Clone this repository to your local machine:
    ```
    git clone https://github.com/your-username/inbox-contract.git
    ```

2. Navigate to the project directory:
    ```
    cd inbox-contract
    ```

3. Install dependencies:
    ```
    npm install
    ```

4. Compile the contract:
    ```
    truffle compile
    ```

5. Deploy the contract to your local Ganache blockchain:
    ```
    truffle migrate --reset
    ```

6. Run the tests:
    ```
    truffle test
    ```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.