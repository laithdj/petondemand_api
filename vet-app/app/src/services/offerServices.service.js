const httpStatus = require ('http-status');
const {offerServices} = require ('../models');


/**  
 * create offer Services
 * @param {Object} offerservices
 * @returns {Promise<offerservices>}
*/

const createofferServices = async (offerservices)=>
{
    return offerServices.create(offerservices);
}


const getsearchVendors = async (id) => {
    return offerServices.find( { service_id: id  } );
  };

  
  const getsearchSerDetails = async (serid,vendid) => {
    return offerServices.find( { service_id: serid , user_id: vendid } );
  };


//   const UpdateOfferService= async (id, Body) => {
    // const offSer = await getsearchVendors(id);

    // console.log(timeslotss)
    // if (!offSer) {
        // throw new ApiError(httpStatus.NOT_FOUND, 'offer service not found');
    // }
    // console.log(Body,"parameters");
    // Object.assign(offSer, Body);
    // await offSer.save();
    // return offSer;
// };



module.exports={
    createofferServices,
    getsearchVendors,
    getsearchSerDetails
    // UpdateOfferService

}