const productContainer = document.getElementById("ProductContainer");
const _product = document.getElementById("product");
const _addproduct = document.getElementById("addproduct");
const addProductBtn = document.getElementById("AddProductBtn");
const productForm = document.getElementById("productForm");

const productTable = document.getElementById("ProductsList");

const URL = "http://localhost:3000/buyers";


updateProductList();


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

        let _idTd = document.createElement("th");
        _idTd.innerHTML = data[i]["_id"];
        tableTr.appendChild(_idTd);

        let phoneNumberTd = document.createElement("th");
        phoneNumberTd.innerHTML = data[i]["phoneNumber"];
        tableTr.appendChild(phoneNumberTd);
        
        let emailTd = document.createElement("th");
        emailTd.innerHTML = data[i]["email"];
        tableTr.appendChild(emailTd);

        let addressTd = document.createElement("th");
        addressTd.innerHTML = data[i]["address"];
        tableTr.appendChild(addressTd);

        productTable.appendChild(tableTr);
      }
    }
    )
    .catch((err) => console.log(err));
}