const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  languages: { type: String, required: true },
  description: { type: String, required: true },
  role: { type: String, required: true },
  category: { type: String }, // e.g., "BTECH SEM - 3"
});

module.exports = mongoose.model('Project', projectSchema);
