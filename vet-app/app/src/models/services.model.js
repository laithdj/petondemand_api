// const { number, boolean, string } = require('joi');
const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const servciesSchema = mongoose.Schema(
  {
    name: {
      type: String,
    //   required: true
    },
  },
  { 
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
servciesSchema.plugin(toJSON);
servciesSchema.plugin(paginate);

/**
 * @typedef services
 */
const services = mongoose.model('services', servciesSchema);

module.exports = services;