const resultElem = document.getElementById("result");
const containerElem = document.getElementById("container");

let colorDeg = 0;
let intervalId = null;

document.getElementById("draw").addEventListener("click", function() {
    const omikujiResults = ["大吉", "中吉", "小吉", "末吉", "凶", "大凶"];
    const omikujiColors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff", "#ff00ff"];

    const index = Math.floor(Math.random() * omikujiResults.length);
    const result = omikujiResults[index];
    const resultColor = omikujiColors[index];

    resultElem.textContent = `あなたの運勢は ${result}!`;
    resultElem.style.color = resultColor;
    resultElem.style.fontSize = "0";
    containerElem.classList = "active";
    document.body.style.backgroundColor = "#eee";

    if (intervalId) {
        clearInterval(intervalId);
    }

    setTimeout(function() {
        containerElem.classList = "";
        resultElem.style.fontSize = "";
    }, 1000)

    if (index === 0) {
        intervalId = setInterval(function() {
            document.body.style.backgroundColor = `hsl(${colorDeg}, 100%, 50%)`;
            colorDeg = (colorDeg + 1) % 360;
            console.log(colorDeg);
        }, 1)
    } 
});
