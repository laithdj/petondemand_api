const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const {vendorsServices } = require('../services');

const addVendor = catchAsync(async (req, res) => {
    const vendors = await vendorsServices.getVendor(req.body.user_id); 
    const updatevendors = await vendorsServices.updateVendorById(vendors[0].id,req.body)
    res.send(updatevendors);
    // }
});

const createVen = catchAsync(async(req,res)=>{
    const vendors = await vendorsServices.getVendor(req.body.user_id);  
    if(vendors.length==0){
    const CreateVend = await vendorsServices.createVendor(req.body);
    res.status(httpStatus.CREATED).send(CreateVend);}
    else
    res.send(vendors);
})

const getvend = catchAsync(async (req, res) => {
    console.log(req.body.user_id)
    const vend = await vendorsServices.getVendor(req.body.user_id);
    res.status(httpStatus.CREATED).send({ vend }); 
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
    addVendor,
    createVen,
    getvend
    // updateVendors  
};