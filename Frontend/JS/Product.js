const productTable = document.getElementById("ProductTable");

function UpdateProductTable() {
  
  let data = [];

  fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((res) => {
      data = res;
      for (let i = data.length - 1; i >= 0; --i) {
        console.log(data[i]);

        let tableTr = document.createElement("tr");

        let nameTd = document.createElement("td");
        nameTd.innerHTML = data[i]["name"];
        tableTr.appendChild(nameTd);

        let priceTd = document.createElement("td");
        priceTd.innerHTML = data[i]["price"];
        tableTr.appendChild(priceTd);

        let quantityTd = document.createElement("td");
        quantityTd.innerHTML = data[i]["quantity"];
        tableTr.appendChild(quantityTd);

        let dateTd = document.createElement("td");
        dateTd.innerHTML = data[i]["date"];
        tableTr.appendChild(dateTd);

        let statusTd = document.createElement("td");
        statusTd.innerHTML = data[i]["status"];
        tableTr.appendChild(statusTd);

        productTable.appendChild(tableTr);
      }
    })
    .catch((err) => console.log(err));
}

//  Java Script object notation - JSON

UpdateProductTable();
