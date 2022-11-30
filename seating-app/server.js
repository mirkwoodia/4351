const express = require('express');
const app = express(); 
const port = process.env.PORT || 5000;

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); 

// TODO: We need a more complex request system, one for logging in and one for registering,
//       as well as requests for all the seating table information. can do it RESTful or with
//       json objects in the request body, whichever y'all prefer
//
// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT.', userId: 'not_registered' });
  console.log("sss");
}); 

app.get('/express_backend/admin', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT.', userId: 'Admin' });
  console.log("sss");
}); 

app.get('/express_backend/user', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT.', userId: 'User' });
  console.log("sss");
}); 