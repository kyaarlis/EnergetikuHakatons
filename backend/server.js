const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Define the API endpoint to receive the toogleState value
app.post('/data', (req, res) => {
  const toogleState = req.body.toogleState;

  // Now you have the toogleState value from the frontend
  console.log('Received toogleState from frontend:', toogleState);

  // Perform any other actions you need with the toogleState value

  // Send a response if needed
  res.json({ message: 'Toggle state received' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
