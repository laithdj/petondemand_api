const httpStatus = require('http-status');
// const config = require('../config/config');
// const logger = require('../config/logger');

const { services } = require('../models');
// const ApiError = require('../utils/ApiError');


/**
 * Create a vendor
 * @param {Object} servicesBody
 * @returns {Promise<Vendors>}
 */
// const createVendor = async (servicesBody) => {
    // console.log('servicesBody', servicesBody);
    // const res = await vendorBody.save();
    // return Vendors.create(servicesBody);
    // return res;
// };


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const getservices = async () => {
    return services.find();
  };



/**
 * Update user by id
 * @param {ObjectId} id
 * @param {Object} Body
 * @returns {Promise<Vendors>}
 */

// const updateVendorById = async (id, Body) => {
//     const coupen = await getVendorById(id);

//     console.log(Vendor)
//     if (!Vendor) {
//         throw new ApiError(httpStatus.NOT_FOUND, 'Vendor not found');
//     }

//     Object.assign(Vendor, Body.param);
//     await Vendor.save();
//     return Vendor;
// };

//   +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


module.exports = {
    // createVendor,
    getservices,
    // updateVendorById
};