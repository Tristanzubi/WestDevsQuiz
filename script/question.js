let secondes = 10;
const timer = document.getElementById("timeout");
const chrono = window.setInterval(tictac, 1000)

function tictac() {
    secondes--;
    if (secondes === 0 || !timer) {
        window.clearTimeout(chrono);
        return;
    }
    timer.innerHTML = secondes
}



document.addEventListener("DOMContentLoaded", () => {

    let score;
    if (localStorage.getItem("result")) {
        score = parseInt(localStorage.getItem("result"));
    } else {
        score = 0;
    }

    const reponse = document.querySelectorAll(".reponse")

    reponse.forEach(button => {
        button.addEventListener("click", () => {
            const iscorrect = button.getAttribute("value") === "true";

            reponse.forEach(button => {
                button.disabled = true;
                button.style.opacity = "0.5";
            });

            if (iscorrect) {
                button.style.backgroundColor = "rgb(112, 213, 236)";
                button.style.opacity = "1";
                score++;
                localStorage.setItem("result", score);
            } else {
                button.style.backgroundColor = "rgb(255, 128, 121)";
                reponse.forEach(button => {
                    if (button.getAttribute("value") === "true") {
                        button.style.backgroundColor = "rgb(112, 213, 236)";
                        button.style.opacity = "1";
                    }
                });
            }
        });
    });
    console.log(score);
});



const score = localStorage.getItem("result") || 0;
document.querySelector("#resultScore").innerHTML = `<p>votre score est de <br> ${score} /5</p> `;
function resetScore() {
    localStorage.removeItem("#score")
}
function resetScore() {
    localStorage.removeItem("#score")
}