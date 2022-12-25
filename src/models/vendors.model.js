// const { number, boolean, string } = require('joi');
const { required } = require('joi');
const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const vendorSchema = mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true
    },
    name: {   
      type: String,
      default: null
    },
    location: {
      type: String,
      default: null
    },
    mobile: {
      type: String,
      default: null
    },
    registeredPrice: {
      type: Number,
    },
    surety:{
      type:Boolean,
      default:false,
      required:true
    }
  },
  { 
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
vendorSchema.plugin(toJSON);
vendorSchema.plugin(paginate);

/**
 * @typedef Vendors
 */
const Vendors = mongoose.model('Vendors', vendorSchema);

module.exports = Vendors;