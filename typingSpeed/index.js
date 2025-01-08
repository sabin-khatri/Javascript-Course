let startBtn = document.getElementById("startBtn");
let restartBtn = document.getElementById("restartBtn");
let textInput = document.getElementById("textInput");
let showText = document.getElementById("showText");
let result = document.getElementById("speed");
let showRandomData = document.getElementById("showRandomData");

let data = [
    "JavaScript is a scripting language enables",
    "It also enables users to load content",
    "Such as dropdown menus animated",
    "A scripting language used to create",
    "How JavaScript works and why JS is famous"
];

let randomData;
let startTime;
let endTime;

const resetFields = () => {
    textInput.value = "";
    textInput.disabled = true;
    textInput.style.backgroundColor = "rgb(230, 230, 230)";
    showRandomData.innerHTML = "";
    result.innerHTML = "";
    showText.innerHTML = "";
    startBtn.innerText = "Start";
    restartBtn.style.display = "none"; // Hide Restart button
};

startBtn.addEventListener("click", function () {
    if (startBtn.innerText === "Start") {
        // Start logic
        randomData = data[Math.floor(Math.random() * data.length)];
        let time = new Date();
        startTime = time.getTime();

        textInput.disabled = false;
        textInput.style.backgroundColor = "white";
        textInput.value = ""; // Clear any previous input
        showRandomData.innerHTML = randomData;
        startBtn.innerText = "Done";

    } else if (startBtn.innerText === "Done") {
        // End logic
        let time = new Date();
        endTime = time.getTime();
        let completionTime = Math.floor((endTime - startTime) / 1000);
        let wordLength = textInput.value.trim().split(/\s+/).length; // Trim & split by spaces
        let speed = Math.round((wordLength / completionTime) * 60);

        result.innerHTML = `You wrote ${wordLength} words in ${completionTime} seconds. Your typing speed is ${speed} words per minute.`;

        textInput.disabled = true;
        textInput.style.backgroundColor = "rgb(230, 230, 230)";
        startBtn.innerText = "Start";
        restartBtn.style.display = "inline"; // Show Restart button
    }
});

restartBtn.addEventListener("click", resetFields);
