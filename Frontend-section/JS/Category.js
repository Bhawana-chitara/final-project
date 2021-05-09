const productContainer = document.getElementById("ProductContainer");
const _product = document.getElementById("product");
const _addproduct = document.getElementById("addproduct");
const addProductBtn = document.getElementById("AddProductBtn");
const productForm = document.getElementById("productForm");

const productTable = document.getElementById("ProductsList");

const URL = "http://localhost:3000/category";

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

        let nameTd = document.createElement("th");
        nameTd.innerHTML = data[i]["name"];
        tableTr.appendChild(nameTd);

        let catID = document.createElement("th");
        catID.innerHTML = data[i]["_id"];
        tableTr.appendChild(catID);

        let quantityTd = document.createElement("th");
        quantityTd.innerHTML = data[i]["stock"];
        tableTr.appendChild(quantityTd);

        let dateTd = document.createElement("th");
        dateTd.innerHTML = data[i]["date"];
        tableTr.appendChild(dateTd);


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

    const category = {
        "name":productFormData.get("name"),
        "date":productFormData.get("date"),
        "stock":productFormData.get("stock"),
        "imageurl":productFormData.get("imageurl")
    }

    console.log(category);

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
        body: JSON.stringify(category) 
      };

    fetch("http://localhost:3000/addcategory",test)
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

