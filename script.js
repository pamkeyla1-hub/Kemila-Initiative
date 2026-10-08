// Animation lorsque la page est chargée
document.addEventListener("DOMContentLoaded", () => {

// Animation des cartes
const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
card.style.opacity = "0";
card.style.transform = "translateY(30px)";

setTimeout(() => {
card.style.transition = "all 0.6s ease";
card.style.opacity = "1";
card.style.transform = "translateY(0)";
}, index * 150);
});

// Formulaire de contact
const form = document.querySelector(".contact-form");

if (form) {

form.addEventListener("submit", function(event) {

event.preventDefault();

const name = document.querySelector("#name").value;

alert(
"Merci " + name +
" ! Votre message a bien été pris en compte."
);

form.reset();

});

}

});
