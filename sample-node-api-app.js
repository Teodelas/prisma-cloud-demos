const express = require('express');
const app = express();
const port = 80;
app.use(express.json());

app.get('/hello-world', (req, res) => {
  const responseData = {
    response: 'Hello, World!',
    email: 'dummy@hotmail.com'
  };

  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*'); // Adjust as needed

  res.json(responseData);
});

// Handle POST request to '/hello-world'
app.post('/hello-world', (req, res) => {
  // Assuming the request body is a JSON object with an 'email' property
  const email = req.body && req.body.email;
  if (email) {
    const responseData = {
      receivedEmail: email
    };

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.json(responseData);
  } else {
    res.status(400).json({ error: 'Invalid request. Missing or invalid email in the payload.' });
  }
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
