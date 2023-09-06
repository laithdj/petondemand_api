const express = require('express');
const validate = require('../../middlewares/validate');
const auth = require('../../middlewares/auth');
// const { vendorsServices } = require('../../services');
const { freeslotsController } = require('../../controllers');



const router = express.Router();


router
    .route('/')
    // .get(auth(), couponController.getCourses), removed auth in post
    .post(auth(),validate(),freeslotsController.addfreeslots)

router
    .route('/get')
    .post(freeslotsController.getfreeslots)


// router
//     .route('/:id')
//     .get(vendorsController.updateVendors)
//     .patch(auth(), vendorsController.updateVendors) ;

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

module.exports = router;