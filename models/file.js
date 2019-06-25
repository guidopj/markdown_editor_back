const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FileSchema = new Schema({
  fileName: {type: String, required: true},
  fileTitle: {type: String, required: true},
  fileDescription: {type: String, required: true},
});

module.exports = mongoose.model('File', FileSchema);