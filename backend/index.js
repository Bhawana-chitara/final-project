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

models.connectDb().then(async () => {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
      });
} )


