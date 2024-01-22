let userInput = document.querySelectorAll(".img");
let userInputSt = document.querySelector(".Stone");
let userInputSc = document.querySelector(".Scissor");
let userInputPr = document.querySelector(".Paper");
let comScore = document.querySelector("#comScore");
let userScore = document.querySelector("#userScore");
let result =document.querySelector("#button");
// let msgStyle =document.querySelector("#button");
// let compInput = Math.floor(Math.random()*3 +1);

let userPoint = 0;
let comPoint = 0;
// 1=Stone;
// 2=Scessior;
// 3=Paper;

userInputSt.addEventListener("click", () => {
    let compInput = Math.floor(Math.random() * 3 + 1);
    if (compInput === 1) {
        result.innerText = ("Draw");
        result.style.backgroundColor = "rgb(18, 23, 21)";
    }
    else if (compInput === 2) {
        userPoint = userPoint + 1;
        userScore.innerText = userPoint;
        result.innerText = ("Your Stone Beats Computer Scissor !");
        result.style.backgroundColor = "Green";

    } else {
        comPoint = comPoint + 1;
        comScore.innerText = comPoint;
        result.innerText = ("Computer Paper Beats Your Stone !");
        result.style.backgroundColor = "red";

    }
})
userInputSc.addEventListener("click", () => {
    let compInput = Math.floor(Math.random() * 3 + 1);
    if (compInput === 1) {
        comPoint = comPoint + 1;
        comScore.innerText = comPoint;
        result.innerText = ("Computer Stone Beats Your Scissor!");
        result.style.backgroundColor = "red";
    }
    else if (compInput === 2) {
        result.innerText = ("Draw");
        result.style.backgroundColor = "rgb(18, 23, 21)";
    } else {
        userPoint = userPoint + 1;
        userScore.innerText = userPoint;
        result.innerText = ("Your Scissor Beats Computer Paper !");
        result.style.backgroundColor = "Green";
    }
})

userInputPr.addEventListener("click", () => {
    let compInput = Math.floor(Math.random() * 3 + 1);
    if (compInput === 1) {
        userPoint = userPoint + 1;
        userScore.innerText = userPoint;
        result.innerText = ("Your Paper Beats Computer Stone !");
        result.style.backgroundColor = "Green";
    }
    else if (compInput === 2) {
        comPoint = comPoint + 1;
        comScore.innerText = comPoint;
        result.innerText = ("Computer Scissor Beats Your Paper!");
        result.style.backgroundColor = "red";

    } else {
        result.innerText = ("Draw");
        result.style.backgroundColor = "rgb(18, 23, 21)";
    }
})


