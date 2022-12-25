const httpStatus = require ('http-status');
const catchAsync = require('../utils/catchAsync');
const {offerServicesService} = require ('../services');

const addOfferServices = catchAsync(async (req,res)=>{
    // console.log(req.body,"aini");
    // const OS = await offerServicesService.getsearchVendors(req.body.service_id);

    // if(OS.length==0){
      const offerService = await offerServicesService.createofferServices(req.body);
    res.status(httpStatus.CREATED).send(offerService);
    // }
    // else
    // {
        // const update = await freeslotsService.updatetimeslotsById (OS[0].id,req.body)
        // res.send(update);
    // }
})

const getsearchvend = catchAsync(async (req, res) => {
    console.log(req.body.service_id,"aini")
    const searchvend = await offerServicesService.getsearchVendors(req.body.service_id);
    res.status(httpStatus.CREATED).send({ searchvend }); 
});

const getsearchvendDetail = catchAsync(async (req, res) => {
    console.log(req.body.service_id,"  ",req.body.user_id)
    const searchvend = await offerServicesService.getsearchSerDetails(req.body.service_id,req.body.user_id);
    res.status(httpStatus.CREATED).send({ searchvend }); 
});




module.exports={
    addOfferServices,
    getsearchvend,
    getsearchvendDetail
}