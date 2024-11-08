


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form"); 
    const name = document.getElementById("cardholder-name");
    const cardNumber = document.getElementById("card-number");
    const expDate = document.getElementById("exp-date");
    const year = document.getElementById("year");
    const cvc = document.getElementById("cvc-display");

// variable para detectar los errores
    const nameError = document.querySelector("#failed-name-error");
    const numberError = document.querySelector("#failed-number-error");

// variables para el relleno 
    const writteSerialNumber = document.getElementById("serial-number");
    const writeDate = document.getElementById("date");
    const writeName = document.getElementById("name");
    const cvcDisplay = document.getElementById("cvc-display");



// escritura card number;
     cardNumber.addEventListener("input", () => {
         if (cardNumber.value.length > 16) {
             cardNumber.value = cardNumber.value.substring(0,16);
     }

         writteSerialNumber.textContent = cardNumber.value;

     })



// escritura Nombre;

    name.addEventListener("input", () => {
        if(name.value.length >20){
            name.value = name.value.substring(0,20);
        }

        writeName.textContent = name.value;

    })

// escritura Fecha;

     const updateDateDisplay = () =>{
     writeDate.textContent = `${expDate.value} / ${year.value}`;
     };

     expDate.addEventListener("input", updateDateDisplay);
     year.addEventListener("input", updateDateDisplay);

  

// Escritura CVC; 

// cvc.addEventListener("input", () =>{
//     if(cvc.value.length >3){
//         cvc.value = cvc.value.substring(0,3);
//     }
// })
  
// cvcDisplay.textContent = cvcDisplay.value;

 
   

//  Mensajes de error;

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        nameError.style.display = "none";
        numberError.style.display = "none";
        name.classList.remove("input-error");
        cardNumber.classList.remove("input-error");

        let hasError = false;

        if (name.value === "") {
            nameError.style.display = "block";
            name.classList.add("input-error");
            hasError = true;
        }

        if (cardNumber.value === "" ) {
            numberError.style.display = "block";
            cardNumber.classList.add("input-error");
            hasError = true;
        }

        if (!hasError) {
            name.value = "";
            cardNumber.value = "";
            expDate.value = "";
            year.value = "";
            cvc.value = "";
            console.log("Enviado");
        }
    });
});
