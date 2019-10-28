require('dotenv/config');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');

const appRoutes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

require('./database');

// middleware
app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// configs
app.disable('x-powered-by');

// routes
appRoutes(app);

// server
app.listen(port, () => console.log(`running at port ${port}`));
