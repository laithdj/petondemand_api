// const { number, boolean, string } = require('joi');
const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const freeslotsSchema = mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true
    },
    day: {   
      type: String,
      default: null
    },
    start_time: {
      type: String,
      default: null
    },
    end_time: {
      type: String,
    },
  },
  { 
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
freeslotsSchema.plugin(toJSON);
freeslotsSchema.plugin(paginate);

/**
 * @typedef freeslots
 */
const freeslots = mongoose.model('freeslots', freeslotsSchema);

module.exports = freeslots;