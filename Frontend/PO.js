const POform = document.getElementById("POForm");

POform.addEventListener('submit', (e) => {

    e.preventDefault();

    const POformData = new FormData(POform);

    let name = POformData.get("name");
    let email = POformData.get("email");
    let number = POformData.get("number");
    let date = POformData.get("date");

    console.log("Hello welcome! , "+name);
    console.log(email);
    console.log(number);
    console.log(date);


});