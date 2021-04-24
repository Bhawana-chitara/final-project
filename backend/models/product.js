const mongoose = require('mongoose');
 
const productSchema = new mongoose.Schema(
  {
    name: {type: String,unique: true,required: true,},
    price:{type:Number,require:true},
    quantity:{type:String,require:true},
    date:{type:String,require:true},
    status:{type:String,require:true}
  },
  { timestamps: true },
);
 
module.exports = mongoose.model("Product",productSchema);