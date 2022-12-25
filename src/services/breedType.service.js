const httpStatus = require('http-status');
const { BreedTypes } = require('../models');


/**
 * Create a vendor
//  * @param {Object} breedtypeBody
//  * @returns {Promise<Vendors>}
 */
// const createBreedType = async (breedtypeBody) => {
    // console.log('breedtypeBody', breedtypeBody);
    // const res = await BreedTypes.save();
//     return BreedTypes.create(breedtypeBody);
//     return res;
// };


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/**
//  * Create a vendor
 * @returns {Promise<BreedTypes>}
 */

const getbreedtype = async (id) => {
    // console.log(id);
    return BreedTypes.find({ Pet_id: id  } );
  };



/**
 * Update user by id
//  * @param {ObjectId} id
//  * @param {Object} Body
//  * @returns {Promise<Vendors>}
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
    getbreedtype,
    // createBreedType
};