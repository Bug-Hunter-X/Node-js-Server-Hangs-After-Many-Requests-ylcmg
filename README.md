# Node.js Server Hanging Issue

This repository demonstrates a common issue in Node.js applications where the server becomes unresponsive after handling a significant number of requests.  The problem stems from the lack of proper error handling and resource management, leading to unhandled exceptions or resource exhaustion. The solution involves incorporating robust error handling and implementing strategies to prevent resource exhaustion.

## Bug Description

The provided `server.js` demonstrates a simple Express.js server.  Under heavy load (many concurrent requests), this server will eventually hang or become unresponsive. This is because the asynchronous operation within `setTimeout` doesn't handle potential errors, and a large number of requests may exhaust resources like memory or file handles if not managed properly. 

## Solution

The `serverSolution.js` file provides a solution that includes more robust error handling and resource management techniques, making the server more resilient under high load.