const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// configs
app.disable('x-powered-by');

// routes
app.get('/', (req, res) => {
  res.status(200).send({ message: 'Welcome' });
});

// server
app.listen(port, () => console.log(`running at port ${port}`));
