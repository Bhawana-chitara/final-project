const express = require('express');
const cors = require('cors');

const models = require('./models/index');

const app = express()
const port = 3000

app.use(cors()); 
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})


//  START PRODUCT 

app.get('/products',(req,res) => {
  models.Product.find().then(data => {
    console.log(data);
    res.send(data);
  });
});

app.post("/addproduct",(req,res) => {
  console.log(req.body);

  const productData = new models.Product({
    "name":req.body.name,
    "price":req.body.price,
    "date":req.body.date,
    "quantity":req.body.quantity,
    "status":req.body.status
  });

  productData.save()
    .then(result => {
      console.log(result);
      res.send({"message":"data saved!"}).status(200);
    })
    .catch(err => console.log(err));

  res.send({"message":"DONE!"}).status(200);
});

//  END PRODUCT 


//  START CATEGORY 
app.get('/category',(req,res) => {
  models.Category.find().then(data => {
    console.log(data);
    res.send(data);
  });
});

app.post("/addcategory",(req,res) => {
  console.log(req.body);

  const categoryData = new models.Category({
    "name":req.body.name,
    "date":req.body.date,
    "stock":req.body.stock,
    "imageurl":req.body.imageurl
  });

  categoryData.save()
    .then(result => {
      console.log(result);
      res.send({"message":"data saved!"}).status(200);
    })
    .catch(err => console.log(err));

  res.send({"message":"DONE!"}).status(200);
});
//  END CATEGORY 


//  START ORDER | Also addeed buyer post request
app.get('/orders',(req,res) => {
  models.Order.find().then(data => {
    console.log(data);
    res.send(data);
  });
});

app.post("/addorder",(req,res) => {
  console.log(req.body);

  const OrderData = new models.Order({
    "buyerName":req.body.buyerName,
    "productQuantity":req.body.productQuantity,
    "phoneNumber":req.body.phoneNumber,
    "email":req.body.email,
    "orderDate":req.body.orderDate,
    "totalAmount":req.body.totalAmount,
    "productName":req.body.productName,
    "deliveryAddress":req.body.deliveryAddress
  });

  const BuyerDetail = new models.Buyer(
    {
      "name":req.body.buyerName,
      "email":req.body.email,
      "phoneNumber":req.body.phoneNumber,
      "address":req.body.deliveryAddress
    }
  );

  OrderData.save()
    .then(result => {
      console.log(result);

      BuyerDetail.save()
        .then(result => {console.log(result);})
        .catch(err => {console.log(err)});

      res.send({"message":"data saved!"}).status(200);
    })
    .catch(err => console.log(err));

  res.send({"message":"DONE!"}).status(200);
});
//  END ORDER 



// START BUYER

app.get('/buyers',(req,res) => {
  models.Buyer.find().then(data => {
    console.log(data);
    res.send(data).status(200);
  })
  .catch(err => console.log(err));
})

//  END BUYER


models.connectDb().then(async () => {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
      });
} )


