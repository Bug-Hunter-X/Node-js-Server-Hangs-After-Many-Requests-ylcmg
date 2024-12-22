const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    try {
      //Simulate potential errors
      //if(Math.random()<0.1) throw new Error('Simulated Error');
      res.send('Hello!');
    } catch (error) {
      console.error('Error processing request:', error);
      res.status(500).send('Internal Server Error');
    }
  }, 5000); 
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
}).on('error', err => {
  console.error('Failed to start server:', err);
});