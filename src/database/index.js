const mongoose = require('mongoose');

const database = process.env.DB_HOST || '';

mongoose
  .connect(database, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch((err) => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
  });

mongoose.process = global.Promise;

module.exports = mongoose;
