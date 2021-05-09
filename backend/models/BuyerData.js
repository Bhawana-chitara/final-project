const mongoose = require('mongoose');
 
const BuyerSchema = new mongoose.Schema(
  {
    name: {type: String,unique: true,required: true,},
    email:{type:String,require:true},
    phoneNumber:{type:Number,require:true},
    address:{type:String,require:true}
  },
  { timestamps: true },
);
 
module.exports = mongoose.model("Buyer",BuyerSchema);