const httpStatus = require('http-status');
// const config = require('../config/config');
// const logger = require('../config/logger');

const { freeslots } = require('../models');
// const ApiError = require('../utils/ApiError');


/**
 * Create a timming slots
 * @param {Object} timeslots
 * @returns {Promise<timeslots>}
 */
const createtimeslots = async (timeslots) => {
    console.log('time slots', timeslots);
    // const res = await vendorBody.save();
    return freeslots.create(timeslots);
    // return res;
};


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const gettimeslots = async (id,d) => {
  // console.log(freeslots.find({user_id:id}))
    return freeslots.find( { user_id: id  , day:d} );
  };




  const getfreetimeslots = async (id,d) => {
    // console.log(freeslots.find({user_id:id}))
      return freeslots.find( { user_id: id } );
    };
  
  /**
 * Get Course by id
 * @param {ObjectId} id
 * @returns {Promise<freetime>}
 */
const getfreeSlotsById = async (id) => {
  console.log('freeslots by id',id);
  return freeslots.findById(id);
};


/**
 * Update user by id
 * @param {ObjectId} id
 * @param {Object} Body
 * @returns {Promise<timeslotss>}
  */

const updatetimeslotsById = async (id, Body) => {
    const timeslotss = await getfreeSlotsById(id);

    // console.log(timeslotss)
    if (!timeslotss) {
        throw new ApiError(httpStatus.NOT_FOUND, 'timeslots not found');
    }
    // console.log(Body,"parameters");
    Object.assign(timeslotss, Body);
    await timeslotss.save();
    return timeslotss;
};

//   +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


module.exports = {
    createtimeslots,
    gettimeslots,
    getfreetimeslots,
    updatetimeslotsById
};