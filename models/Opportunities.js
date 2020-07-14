const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema for opportunities
const OpportunitiesSchema = new Schema({
 
  company: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  type: { 
    type: String,
    required: true
  },
  minimum_proficiency: { 
    type: String,
    required: true
  },
  location: { 
    type: String,
    required: true
  },
  description: { 
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Opportunities = mongoose.model('opportunities', OpportunitiesSchema);
