const productContainer = document.getElementById("ProductContainer");
const _product = document.getElementById("product");
const _addproduct = document.getElementById("addproduct");
const addProductBtn = document.getElementById("AddProductBtn");
const productForm = document.getElementById("productForm");

const productTable = document.getElementById("ProductsList");


_addproduct.style.display = "none";
updateProductList();


function updateProductList(){
  let data = [];
  productTable.innerHTML = '';
  fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((res) => {
      data = res;
      console.log(data);
      for (let i = data.length - 1; i >= 0; --i) {
        // console.log(data[i]);

        let tableTr = document.createElement("tr");

        let nameTd = document.createElement("th");
        nameTd.innerHTML = data[i]["name"];
        tableTr.appendChild(nameTd);

        let priceTd = document.createElement("th");
        priceTd.innerHTML = data[i]["price"];
        tableTr.appendChild(priceTd);

        let quantityTd = document.createElement("th");
        quantityTd.innerHTML = data[i]["quantity"];
        tableTr.appendChild(quantityTd);

        let dateTd = document.createElement("th");
        dateTd.innerHTML = data[i]["date"];
        tableTr.appendChild(dateTd);

        let statusTd = document.createElement("th");
        statusTd.innerHTML = data[i]["status"];
        tableTr.appendChild(statusTd);

        productTable.appendChild(tableTr);
      }
    })
    .catch((err) => console.log(err));
}


addProductBtn.addEventListener('click', () => {
    _addproduct.style.display = "";
    _product.style.display = "none";
})



productForm.addEventListener('submit' , (e) => {
    e.preventDefault();

    const productFormData = new FormData(productForm);

    const product = {
        "name":productFormData.get("name"),
        "price":productFormData.get("price"),
        "date":productFormData.get("date"),
        "quantity":productFormData.get("quantity"),
        "status":productFormData.get("status")
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
        body: JSON.stringify(product) 
      };

    fetch("http://localhost:3000/addproduct",test)
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

