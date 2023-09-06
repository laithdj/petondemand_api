const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const {freeslotsService } = require('../services');
const { async } = require('rxjs');




const addfreeslots = catchAsync(async (req, res) => {

    const freeslots = await freeslotsService.gettimeslots(req.body.user_id,req.body.day);    

    if(freeslots.length==0){    
    const Createslots = await freeslotsService.createtimeslots(req.body); 
    res.status(httpStatus.CREATED).send(Createslots);
    }
    else
    {
    const updateslots = await freeslotsService.updatetimeslotsById(freeslots[0].id,req.body)
    res.send(updateslots);
    }
    
});

const getfreeslots = catchAsync(async(req,res)=>{
    const freeslots= await freeslotsService.getfreetimeslots(req.body.user_id);   
    res.status(httpStatus.CREATED).send({ freeslots }); 
});











module.exports = {
    addfreeslots,
    getfreeslots
    // updateVendors  
};