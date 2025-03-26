const resultScore = document.querySelector("#result-score");
const resultImage = document.querySelector("#result-image");

let score = 0;

if (result >= 4) {
    resultImage.src = '../Assets/Logo_WestDevQuiz.png';
} else if (result >= 2) {
    resultImage.src = '../Assets/Logo_WestDevQuizBof.png';
} else {
    resultImage.src = '../Assets/Logo_WestDevQuizBad.png';
}

console.log(score === 4);