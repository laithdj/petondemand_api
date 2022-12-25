const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const {petsService} = require('../services');
// const pick = require('../utils/pick');
// const { serializeToJson, serializeCourseList } = require('../utils/json-serializer');

//Controller main sirf aur sirf Service ko subscribe kia hua

//Model
//Service
//controller
//routes

const getpets = catchAsync(async (req, res) => {
    const pets = await petsService.getpets();  
    // console.log(pets,"constroller");
    res.status(httpStatus.CREATED).send({ pets }); 
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
    getpets
    // updateVendors  
};