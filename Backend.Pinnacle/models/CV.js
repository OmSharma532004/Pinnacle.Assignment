const mongoose = require('mongoose');

const cvSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  description: String,
  skills: [String],
  experience: [
    {
      title: String,
      company: String,
      startDate: Date,
      endDate: Date,
      responsibilities: [String],
    },
  ],
  education: [
    {
      degree: String,
      institution: String,
      startDate: Date,
      endDate: Date,
    },
  ],
  // other CV fields
});

const CV = mongoose.model('CV', cvSchema);

module.exports = CV;
