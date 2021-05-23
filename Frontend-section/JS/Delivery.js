const searchBar = document.getElementById("searchBar");
const URL = "http://localhost:3000/orders";

const orderid = document.getElementById("orderid");
const buyerName  = document.getElementById("buyerName");
const deliveryAddres = document.getElementById("deliveryAddres");
const productName = document.getElementById("productName");
const total = document.getElementById("total");
const deliveryDate  = document.getElementById("deliveryDate");
const orderDate = document.getElementById("orderDate");

searchBar.addEventListener("keyup" , (event) => {
    if (event.key === "Enter") {
        
        data = []
        
        const oid = searchBar.value;
        console.log(oid);

        fetch(URL)
          .then((res) => res.json())
          .then((res) => { 
              
            data = res;

            for (let i = data.length - 1; i >= 0; --i) {
            
                if(data[i]["_id"] == oid){
                    console.log(data[i]);

                    orderid.innerHTML = data[i]["_id"];
                    buyerName.innerHTML = data[i]["buyerName"];
                    deliveryAddres.innerHTML = data[i]["deliveryAddress"];
                    productName.innerHTML = data[i]["productName"];
                    total.innerHTML = "Rs. "+  data[i]["totalAmount"].toString();
                    deliveryDate.innerHTML = "26/12/2020";
                    orderDate.innerHTML = data[i]["orderDate"];
                    break;
                }
                
            }

           })
          .catch(err => console.log(err));

        
    }
})