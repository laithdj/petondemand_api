const express = require('express');
// const validate = require('../../middlewares/validate');
const validate = require('../../middlewares/validate');
const auth = require('../../middlewares/auth');
const { vendorsServices } = require('../../services');
const { vendorsController } = require('../../controllers');

const router = express.Router();


router
    .route('/')
    .post(auth(),vendorsController.addVendor)

router
    .route('/create')
    .post(auth(),vendorsController.createVen)


router
    .route('/get')
    .post(vendorsController.getvend)


// router
//     .route('/:id')
//     .get(vendorsController.updateVendors)
//     .patch(auth(), vendorsController.updateVendors) ;

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

module.exports = router;