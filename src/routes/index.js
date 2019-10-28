const express = require('express');
const discoveriesRoutes = require('./discoveries');

const router = express.Router();

router.use('/discoveries', discoveriesRoutes);

module.exports = (app) => app.use('/api', router);
