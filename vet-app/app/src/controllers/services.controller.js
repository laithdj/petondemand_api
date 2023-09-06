const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const {servicesService} = require('../services');
// const pick = require('../utils/pick');
// const { serializeToJson, serializeCourseList } = require('../utils/json-serializer');

//Controller main sirf aur sirf Service ko subscribe kia hua

//Model
//Service
//controller
//routes

const getservices = catchAsync(async (req, res) => {
    const services = await servicesService.getservices();    
    res.status(httpStatus.CREATED).send({ services }); 
});






// const updateVendors = catchAsync(async (req, res) => {
//     const { id } = req.params;
//   const vendors = await vendorsServices.updateVendorById(id, req.body);
//     if (!vendors) {
//         throw new ApiError(httpStatus.NOT_FOUND, 'vendors not found');
//             }
//     res.send({ vendors });
// });


//Jo  b function bnana wo export krna






module.exports = {
    getservices,
    // updateVendors  
};