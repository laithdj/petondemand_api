const mongoose = require ('mongoose');
const {toJSON, paginate} = require ('./plugins');

const offerServicesSchema = mongoose.Schema(
    {
    user_id: {
        type: String,
        required: true
      },
      vendor_name: {
        type: String,
        required: true
      },
      service_id: {
        type: String,
        required: true
      },
      service_name: {
        type: String
      },
      service_price: {
        type: Number
      }
    },
      { 
        timestamps: true,
      }
)

offerServicesSchema.plugin(toJSON);
offerServicesSchema.plugin(paginate);



/**
 * @typedef offerServicesSchema
 */
const offerServices = mongoose.model('offer_services', offerServicesSchema);

module.exports = offerServices;