// SPDX-License-Identifier: MIT

// Solidity version pragma
pragma solidity ^0.8.9;

// Contract definition
contract Inbox {
    // State variable to store the message
    string public message;

    // Constructor function to initialize the message
    constructor(string memory initialMessage) {
        message = initialMessage;
    }

    // Function to set a new message
    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}
