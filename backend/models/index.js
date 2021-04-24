let Product = require("./product");

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


module.exports = {connectDb , Product };

// export default models;
