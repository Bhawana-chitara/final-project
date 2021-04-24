console.log("TEST TEST");

const productForm = document.getElementById("productForm");

productForm.addEventListener('submit',(e) => {
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
    .then(res => console.log(res))
    .catch(err => console.log(err));
    

    

});
 

// function returnDateFormated(tmpDate){
//     let retDate = "";
//     retDate += tmpDate.getDate().toString();
//     retDate += "/";
//     retDate += tmpDate.getMonth().toString();
//     retDate += "/";
//     retDate += tmpDate.getFullYear();
//     return retDate;
// }