
const navButton = document.querySelector(".nav_button");

navButton.addEventListener("mouseover", () => {
    navButton.style.transform = "scale(1.1)";
    navButton.style.backgroundColor = "var(--accueil-hover)";
});

navButton.addEventListener("mouseout", () => {
    navButton.style.transform = "scale(1)";
    navButton.style.backgroundColor = "var(--color-blue)";
});



const form = document.querySelector("#suggestions form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nom = document.querySelector("#nom").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();


    if (nom === "" || email === "" || message === "") {
        alert("Tous les champs doivent être remplis.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Veuillez entrer une adresse email valide.");
        return;
    }

    alert("Formulaire envoyé avec succès !");
    form.reset();
});


const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


const submitButton = form.querySelector("button[type='submit']");

submitButton.addEventListener("mousedown", () => {
    submitButton.style.transform = "scale(0.9)";
});

submitButton.addEventListener("mouseup", () => {
    submitButton.style.transform = "scale(1)";
});