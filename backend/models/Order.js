const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
      buyerName: {type: String,required: true,},
      productName: {type:String,require:true},
      productQuantity:{type:Number,require:true},
      phoneNumber:{type:Number,require:true},
      email:{type:String,require:true},
      deliveryAddress:{type:String,require:true},
      orderDate:{type:String,require:true},
      totalAmount:{type:Number,require:true}
    },
    { timestamps: true },
  );

  module.exports = mongoose.model("Order",orderSchema);