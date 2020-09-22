const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const deviceSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  port: {
    type: String,
    required: true,
    index: true
  },
  address: {
    type: Number,
    required: true,
    index: true
  }
}, {
  timestamps: true
});


module.exports = mongoose.model('Devices', deviceSchema);
