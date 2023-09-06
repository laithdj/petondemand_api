const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const {breedTypesService} = require('../services');
// const pick = require('../utils/pick');
// const { serializeToJson, serializeCourseList } = require('../utils/json-serializer');

//Controller main sirf aur sirf Service ko subscribe kia hua

//Model
//Service
//controller
//routes

const getbreedTypes = catchAsync(async (req, res) => {
    const breedtype = await breedTypesService.getbreedtype(req.body.Pet_id);  
    res.status(httpStatus.CREATED).send({ breedtype }); 
});


// const createBreedType = catchAsync(async (req,res)=>{
//     const offerService = await breedTypesService.createBreedType(req.body);
//   res.status(httpStatus.CREATED).send(offerService);
// })



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
    getbreedTypes ,
    // createBreedType
};