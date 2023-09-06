const express = require('express');
// const validate = require('../../middlewares/validate');
const validate = require('../../middlewares/validate');
const auth = require('../../middlewares/auth');
const {servicesController} = require('../../controllers');

const router = express.Router();


router
    .route('/get')
    .get(servicesController.getservices);
    



// router
//     .route('/:id')
//     .get(vendorsController.updateVendors)
//     .patch(auth(), vendorsController.updateVendors) ;

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

module.exports = router;