const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FileSchema = new Schema({
  fileName: {type: String, required: true},
  fileTitle: {type: String, required: false},
  fileDescription: {type: String, required: false},
  fileDescriptionTagged: {type: [String], required: false},
});

module.exports = mongoose.model('File', FileSchema);