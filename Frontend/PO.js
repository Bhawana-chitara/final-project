const POform = document.getElementById("POForm");

POform.addEventListener('submit', (e) => {

    e.preventDefault();

    console.log("form submited");

    const POformData = new FormData(POform);

    let name = POformData.get("name");
    
    // Q::  extract all values from form



    console.log("Hello welcome! , "+name);


});