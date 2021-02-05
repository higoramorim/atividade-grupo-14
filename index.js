const express = require('express');

const app = express();

const data = require('./data/data');

const validateComment = (name) => {
  return data.find((obj) => obj.user === name)
}

app.get('/users/:name', (req, res) => {
  const response = validateComment(req.params.name)
  let message;
  if(response !== undefined) {
    message = response.comments
  } else {
    throw new Error('user not found');
  }
  res.send(message)
  console.log(message)
});

app.use('/', (err, req, res,next) => {
  res.status(500).send(err.message)
});

app.listen(3000, () => console.log('listening on port 3000'));