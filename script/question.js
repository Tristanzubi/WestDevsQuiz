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

const reponseUtilisateur = localStorage.getItem("q" + i);
const reponseCorrect {
    q1 = "",
    q2 = "",
    q3 = "",
    q4 = "",
    q5 = "",
}


let score = 0;
for (let i = 0; i <= 5; i++) {
} if (reponseUtilisateur === reponseCorrect["q" + i]) {
    score++;
}

// parti JS page Result

const resultScore = document.querySelector("#result-score");
const resultImage = document.querySelector("#result-image");

document.querySelector("#resultScore").innerText = "Votre score est de ${ score }/5 !";

if (score >= 4) {
    resultImage.src = '../Assets/Logo_WestDevQuiz.png';
    resultScore.innerText = 'Bravo !';
} else if (score >= 2) {
    resultImage.src = '../Assets/Logo_WestDevQuizBof.png';
    resultScore.innerText = 'Pas mal du tout !';
} else {
    resultImage.src = '../Assets/Logo_WestDevQuizBad.png';
    resultScore.innerText = 'Et si on révisait pour réessayer ?';
}
