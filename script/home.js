const play = document.querySelector("#play");

play.addEventListener("mouseover", () => {
    play.style.transform = "scale(1.1)";
    play.style.background = --button-color;
});

play.addEventListener("mouseout", () => {
    play.style.transform = "scale(1)";
    play.style.backgroundColor = --button-color;
});