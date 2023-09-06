const mongoose = require ('mongoose');
const {toJSON, paginate} = require ('./plugins');

const  BreedTypeSchema= mongoose.Schema(
    {
        Breed_type: {
        type: String,
      },
      Pet_id: {
        type:String
    }
},
    { 
        timestamps: true,
    }
)

BreedTypeSchema.plugin(toJSON);
BreedTypeSchema.plugin(paginate);



/**
 * @typedef BreedTypes
 */
const BreedTypes = mongoose.model('BreedTypes',BreedTypeSchema);

module.exports = BreedTypes;