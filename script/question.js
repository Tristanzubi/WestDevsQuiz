let secondes = 11;
const timer = document.getElementById("timeout");
const chrono = window.setInterval(tictac, 1000)

function tictac() {
    secondes--;
    timer.innerHTML = secondes
    if (secondes === 0) {
        window.clearTimeout(chrono);
    }
}


const reponse = document.querySelectorAll(".reponse")

reponse.forEach(button => {
    button.addEventListener("click", () => {

        const iscorrect = button.getAttribute("value") === "true";

        if (iscorrect) {
            alert("bonne réponse");
            button.style.backgroundColor = "green";
        } else {
            button.style.backgroundColor = "red";
            alert("mauvaise réponse");
        }

        button.forEach(button => button.disabled = true);
    })
});