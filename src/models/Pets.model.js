const mongoose = require ('mongoose');
const {toJSON, paginate} = require ('./plugins');

const PetsSchema= mongoose.Schema(
    {
    name: {
        type: String,
        required: true
      }
    },
      { 
        timestamps: true,
      }
)

PetsSchema.plugin(toJSON);
PetsSchema.plugin(paginate);



/**
 * @typedef PetsSchema
 */
const Pets = mongoose.model('Pets',PetsSchema);

module.exports = Pets;