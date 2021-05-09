let Product = require("./product");
let Category = require("./Category");
let Order = require("./Order");
let Buyer = require("./BuyerData");

const mongoose = require("mongoose");

const connectDb = () => {
  return mongoose.connect(
    "mongodb://localhost:27017/products",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  );
};


module.exports = {connectDb , Product , Category ,Order , Buyer };

// export default models;
