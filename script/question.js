document.addEventListener("DOMContentLoaded", () => {
    let secondes = 10;
    const timer = document.getElementById("timeout");
    const reponses = document.querySelectorAll(".reponse");
    const chrono = window.setInterval(tictac, 1000)

    function tictac() {
        secondes--;
        if (secondes === -1 || !timer) {
            window.clearTimeout(chrono);
            rightAnwser()
            return;
        }
        timer.innerHTML = secondes
    }

    function rightAnwser() {
        reponses.forEach(button => {
            button.disabled = true;
            button.style.opacity = "0.5";

            if (button.getAttribute("value") === "true") {
                button.style.backgroundColor = "rgb(112, 213, 236)";
                button.style.opacity = "1";
            }
        });
    }


    let score;
    if (localStorage.getItem("result")) {
        score = parseInt(localStorage.getItem("result"));
    } else {
        score = 0;
    }

    const reponse = document.querySelectorAll(".reponse");

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


    let finalScore = localStorage.getItem("result") || 0;
    document.querySelector("#resultScore").innerHTML = `<p>Votre score est de <br> ${finalScore} /10</p> `;
    function resetScore() {
        localStorage.removeItem("#score")
    }
    function resetScore() {
        localStorage.removeItem("#score")
    }

    let robot = document.querySelector("main section img");

    if (finalScore >= 8) {
        robot.src = '../Assets/Logo_WestDevQuiz.png';
    } else if (finalScore >= 5) {
        robot.src = '../Assets/Logo_WestDevQuizBof.png';
    } else {
        robot.src = '../Assets/Logo_WestDevQuizBad.png';
    }
});

