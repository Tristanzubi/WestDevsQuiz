// const resultScore = document.querySelector("#result-score");
// const resultImage = document.querySelector("#result-image");
// const reponseUtilisateur = localStorage.getItem("q" + i);
// const reponseCorrect {
//     q1 = "",
//     q2 = "",
//     q3 = "",
//     q4 = "",
//     q5 = "",
// }

// let score = 0;
// for (let i = 0; i <= 5; i++) {
// } if (reponseUtilisateur === reponseCorrect["q" + i]) {
//     score++;
// }

// document.querySelector("#resultScore").innerText = "Votre score est de ${ score }/5 !";

if (score >= 4) {
    resultImage.src = '../Assets/Logo_WestDevQuiz.png';
    alert resultScore.innerText = 'Bravo !';
} else if (score >= 2) {
    resultImage.src = '../Assets/Logo_WestDevQuizBof.png';
   alert resultScore.innerText = 'Pas mal du tout !';
} else {
    resultImage.src = '../Assets/Logo_WestDevQuizBad.png';
    alert resultScore.innerText = 'Et si on révisait pour réessayer ?';
}
