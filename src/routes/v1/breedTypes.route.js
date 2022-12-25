const express = require('express');
const validate = require('../../middlewares/validate');
const auth = require('../../middlewares/auth');
const {breedTypeController} = require('../../controllers');

const router = express.Router();


router
    .route('/')
    .post(breedTypeController.getbreedTypes);
    



// router
    // .route('/post')
    // .get(vendorsController.updateVendors)
    // .post( breedTypeController.createBreedType) ;

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

module.exports = router;