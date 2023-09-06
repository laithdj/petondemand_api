const httpStatus = require('http-status');
// const config = require('../config/config');
// const logger = require('../config/logger');

const { Vendors } = require('../models');

// const ApiError = require('../utils/ApiError');


/**
 * Create a vendor
 * @param {Object} vendorsBody
 * @returns {Promise<Vendors>}
 */
const createVendor = async (vendorsBody) => {
    console.log('vendorsBody', vendorsBody);
    // const res = await vendorBody.save();
    return Vendors.create(vendorsBody);
    // return res;
};


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const getVendor = async (id) => {
    return Vendors.find( { user_id: id  } );
  };

  /**
 * Get Course by id
 * @param {ObjectId} id
 * @returns {Promise<Vendors>}
 */

 const getVendorById = async (id) => {
   return Vendors.findById(id);
 };
 

/**
 * Update user by id
 * @param {ObjectId} id
 * @param {Object} Body
 * @returns {Promise<Vendors>}
 */

const updateVendorById = async (id, Body) => {
    const Vendor = await getVendorById(id);
    console.log(Vendor)
    if (!Vendor) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Vendor not found');
    }

    Object.assign(Vendor, {mobile:Body.mobile,location:Body.location,surety:Body.Surety});
    await Vendor.save();
    return Vendor;
};

//   +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


module.exports = {
    createVendor,
    getVendor,
    updateVendorById
};