const mongoose = require('mongoose');

const DiscoverySchema = mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  comments: String,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Discovery', DiscoverySchema);
