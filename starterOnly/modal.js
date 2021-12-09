function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".close");
const btnSubmit = document.getElementById("btnSubmit");
const regexNumbers = /^[0-9]+$/;
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// Form variables
let form = document.getElementById("form");
let firstName = document.getElementById("first");
let lastName = document.getElementById("last");
let email = document.getElementById("email");
let birthDate = document.getElementById("birthdate");
let tournamentQtt = document.getElementById("quantity");
let termsOfUse= document.getElementById("checkbox1");
let newsLetter = document.getElementById("checkbox2");
let location1 = document.getElementById("location1");
let location2 = document.getElementById("location2");
let location3 = document.getElementById("location3");
let location4 = document.getElementById("location4");
let location5 = document.getElementById("location5");
let location6 = document.getElementById("location6");
let location7 = document.getElementById("location7");
let locations = document.getElementsByName("location");


// Fermeture de la modal

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal event
closeBtn.addEventListener("click", function () { 
  modalbg.style.display = "none";
 } )

 
 // Prevent default form behavior
form.addEventListener('submit', (e) => {
  e.preventDefault();
});


let cities = [

  location1, 
  location2, 
  location3, 
  location4,
  location5,
  location6,
  location7

];



var i;
let city;
let getLocation = () =>{
  
  for (i = 0; i < cities.length; i++) {
    if (cities[i].checked) {
     city = cities[i].value ;
    }
  }
  
  return true;
} 





// formVerification => Ne pas oublier d'en faire une variable à appeler dans la func valid()

function formVerification(){
// (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
if(firstName.value == null || firstName.value == "" || isNaN(firstName.value) == false || firstName.value.length < 2){
  console.log("Le champ prénom ne peut être vide et doit contenir au moins 2 lettres.");
  
  firstName.parentElement.setAttribute("data-error-visible", true);
  firstName.parentElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.")
  firstName.value="";

  return false;

} 

// (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.

else if(lastName.value == null || lastName.value == "" || isNaN(lastName.value) == false || lastName.value.length < 2){

  console.log("Le champ nom ne peut être vide et doit contenir au moins 2 lettres.");

  lastName.parentElement.setAttribute("data-error-visible", true);
  lastName.parentElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.")
  lastName.value="";

  return false;
} 
// (3) L'adresse électronique est valide.

else if(email.value == null || email.value == "" || email.value.match(regexEmail) == false){

  console.log("Veuillez entrer un email valide");

  email.closest(".formData").setAttribute("data-error-visible", true);
  email.closest(".formData").setAttribute("data-error", "Veuillez entrer un email valide (ex : johndoe@gmail.com).")
  email.value="";
  
  return false;
}
else if(birthDate.value == null || birthDate.value == ""){
  console.log('Veuillez entrer une date de de naissance');
  birthDate.parentElement.setAttribute("data-error-visible", true);
  birthDate.parentElement.setAttribute("data-error", "Veuillez entrer un email valide (ex : johndoe@gmail.com).")
  birthDate.value="";

  return false

}
//  (4) Pour le nombre de concours, une valeur numérique est saisie.
else if(tournamentQtt.value == null || tournamentQtt.value == "" || isNaN(tournamentQtt.value) == true || tournamentQtt.value < 0){
  console.log('Veuillez entrer un chiffre');
  tournamentQtt.closest(".formData").setAttribute("data-error-visible", true);
  tournamentQtt.closest(".formData").setAttribute("data-error", "Veuillez renseigner le nombre de tournois auxquels vous avez participé.")
  tournamentQtt.value="";

  return false;

}
//(5) Un bouton radio est sélectionné. (Bouton Aucun)
else if(city == null  || city == undefined){
  console.log('Veuillez choisir une ville');
  location1.closest(".formData").setAttribute("data-error-visible", true);
  location1.closest(".formData").setAttribute("data-error", "Veuillez sélectionner une ville.")


  return false;
}
//(6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
else if(termsOfUse.checked != true || termsOfUse.checked == undefined || termsOfUse.checked == null){
  console.log("Veuillez accepter nos conditions");
  termsOfUse.closest(".formData").setAttribute("data-error-visible", true);
  termsOfUse.closest(".formData").setAttribute("data-error", "Vous devez accepter les termes et conditions.");

  return false;
}
else{

  return true;
}

}


// checkBox termsOfUse cochée par défaut;
termsOfUse.setAttribute("checked", true);



// Create validate function()
let formData;
let allDatas =[];
function validate(){
  if(getLocation() == true && formVerification() == true ){

    formData = {

      Prénom: firstName.value,
      Nom : lastName.value,
      email: email.value,
      birthDate: birthDate.value,
      tournamentQtt: tournamentQtt.value,
      location : city,
      userCondition: termsOfUse.value,
      newsLetter : newsLetter.value,
   
    }
    
    // Ajout des données à l'objet allDatas

    allDatas.push(formData);
    console.log(allDatas);

    thanksModal();

  } else{
    return false;
  }
 
}

// function ThanksModal
let modalForm = document.querySelector("#modalForm");
let modalBody = document.querySelector(".modal-body");
let thanksModal = () => {
  form.remove();
  modalBody.innerHTML += 
  "<div class = 'thanksModal'> <div class = 'thanksMessage'>Thank you for submiting your registration details<div> <div class = 'thanksBtn' id='thanksBtn'> Close <div>";
  modalbg.style.display = "block";

  let thanksBtn = document.querySelector('#thanksBtn');
thanksBtn.addEventListener('click', ()=> {
  modalbg.style.display = "none";
})

};
