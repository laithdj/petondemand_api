const express = require('express');
const validate = require('../../middlewares/validate');
const auth = require('../../middlewares/auth');
// const { vendorsServices } = require('../../services');
const { offerServicesController } = require('../../controllers');



const router = express.Router();


router
    .route('/')
    .post(offerServicesController.addOfferServices)


router
    .route('/search')
    .post(offerServicesController.getsearchvend)

    router
    .route('/searchDetails')
    .post(offerServicesController.getsearchvendDetail)


// router
//     .route('/:id')
//     .get(vendorsController.updateVendors)
//     .patch(auth(), vendorsController.updateVendors) ;

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

module.exports = router;