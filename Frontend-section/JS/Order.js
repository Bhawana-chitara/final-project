const productContainer = document.getElementById("ProductContainer");
const _product = document.getElementById("product");
const _addproduct = document.getElementById("addproduct");
const addProductBtn = document.getElementById("AddProductBtn");
const productForm = document.getElementById("productForm");
const m_selectList = document.getElementById("ProductNameSelectList");

const productTable = document.getElementById("ProductsList");

const URL = "http://localhost:3000/orders";
const AddURL = "http://localhost:3000/addorder";

_addproduct.style.display = "none";
updateProductList();
console.log("TEST");

function updateProductList(){
  let data = [];
  productTable.innerHTML = '';
  fetch(URL)
    .then((res) => res.json())
    .then((res) => {
      data = res;
      console.log(data);
      for (let i = data.length - 1; i >= 0; --i) {
        // console.log(data[i]);

        let tableTr = document.createElement("tr");

        let oderidTD = document.createElement("th");
        oderidTD.innerHTML = data[i]["_id"];
        tableTr.appendChild(oderidTD);

        let buyerNameTD = document.createElement("th");
        buyerNameTD.innerHTML = data[i]["buyerName"];
        tableTr.appendChild(buyerNameTD);

        let productNameTd = document.createElement("th");
        productNameTd.innerHTML = data[i]["productName"];
        tableTr.appendChild(productNameTd);

        let productQuantityTd = document.createElement("th");
        productQuantityTd.innerHTML = data[i]["productQuantity"];
        tableTr.appendChild(productQuantityTd);

        let orderDateTd = document.createElement("th");
        orderDateTd.innerHTML = data[i]["orderDate"];
        tableTr.appendChild(orderDateTd);
        
        let deliveryAddressTd = document.createElement("th");
        deliveryAddressTd.innerHTML = "N/A";
        tableTr.appendChild(deliveryAddressTd);

        let totalAmountTd = document.createElement("th");
        totalAmountTd.innerHTML = data[i]["totalAmount"];
        tableTr.appendChild(totalAmountTd);

        productTable.appendChild(tableTr);
      }

    })
    .catch((err) => console.log(err));
}


addProductBtn.addEventListener('click', () => {
    _addproduct.style.display = "";
    _product.style.display = "none";

    const product_url = "http://localhost:3000/products";
    let data = [];

    fetch(product_url)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        data = res;
        for (let i = 0; i < data.length; i++) {
          
          let productOption = document.createElement("option");
          productOption.value = data[i]["name"];
          productOption.innerHTML = data[i]["name"];
          
          m_selectList.appendChild(productOption);

        }
      })
      .catch(err => console.log(err));

})



productForm.addEventListener('submit' , (e) => {
    e.preventDefault();

    const productFormData = new FormData(productForm);

    const order = {
        "buyerName":productFormData.get("buyerName"),
        "productQuantity":productFormData.get("productQuantity"),
        "phoneNumber":productFormData.get("phoneNumber"),
        "email":productFormData.get("email"),
        "orderDate":productFormData.get("orderDate"),
        "totalAmount":productFormData.get("totalAmount"),
        "productName":productFormData.get("productName"),
        "deliveryAddress":productFormData.get("deliveryAddress"),
    }

    console.log(product);

    const test = {
        method: 'POST', 
        mode: 'cors', 
        cache: 'no-cache',
        credentials: 'same-origin', 
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(order) 
      };

    fetch(AddURL,test)
    .then(res => res.json())
    .then(res => {
        console.log(res);
        _addproduct.style.display = "none";
        updateProductList();
        _product.style.display = "";
        productForm.reset();
    
    })
    .catch(err => console.log(err));

    
    
})

