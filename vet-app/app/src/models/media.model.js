// const { number, boolean, string } = require('joi');
// const { required } = require('joi');
const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const mediaSchema = mongoose.Schema(
  {
    name: {   
      type: String,
      default: null
    },
    fileName: {   
      type: String,
      default: null
    },
    mimeType: {
      type: String,
      default: null
    },
    destination: {
      type: String,
      default: null
    }
  },
  { 
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
mediaSchema.plugin(toJSON);
mediaSchema.plugin(paginate);

/**
 * @typedef Media
 */
const Media = mongoose.model('Media', mediaSchema);

module.exports = Media;