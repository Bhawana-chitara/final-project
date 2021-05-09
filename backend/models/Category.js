const mongoose = require('mongoose');
 
const categorySchema = new mongoose.Schema(
  {
    name: {type: String,unique: true,required: true,},
    stock:{type:String,require:true},
    date:{type:String,require:true},
    imageurl:{type:String,require:true}
  },
  { timestamps: true },
);
 
module.exports = mongoose.model("Category",categorySchema);