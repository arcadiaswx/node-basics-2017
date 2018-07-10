// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out .
// Require 
const https = require('https');
const username = "Booker";

// Function to print message to console.
function printMessage(username, badgeCount, points) {
    const message = `${username} has ${badgeCount} total badge(s) and ${points} in JavaScript`; 
    console.log(message);
}

//printMessage("booker", 100, 1000000);
const request = https.get(`https://teamtreehouse.com/${username}.json`);
// Connect to the API https://teamtreehouse.com/username.json
// Read the data
// Parse the data
// Print the data