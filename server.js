const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000

const playground = require('graphql-playground').middleware.express

// import { express as playground } from 'graphql-playground/middleware'

app.use('/playground', playground({ endpointUrl: '/graphql' }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
app.post('/multisensor', (req, res) => {
  console.log(req.body);

  

  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
