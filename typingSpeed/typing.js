let randomText = document.getElementById("randomText");
let textInput = document.getElementById("textInput");
let result = document.getElementById("result");
let btn = document.getElementById("btn");
let restartBtn = document.getElementById("restartBtn");

let data = [
    "JavaScript is a scripting language that enables ",
    "It also enables users to load content into a document", 
    "such as dropdown menus, animated graphics",
    "a scripting language used to create "
];

let randomValue; // Store the random text index
let startTime;
let endTime;

// Calculate typing speed and display result
const myFun = () => {
    let wordLength = textInput.value.trim().split(/\s+/).length; // Split and count words
    let time = new Date();
    endTime = time.getTime();
    let completeTime = Math.floor((endTime - startTime) / 1000);
    let speed = Math.floor((wordLength / completeTime) * 60);

    result.innerHTML = `You wrote ${wordLength} words in ${completeTime} seconds: Your Typing Speed is ${speed} words per minute.`;
};

// Start the typing test
btn.addEventListener("click", function () {
    if (btn.innerText === "Start") {
        // Start logic
        randomValue = Math.floor(Math.random() * data.length);
        let time = new Date();
        startTime = time.getTime();

        btn.innerText = "Done";
        textInput.disabled = false;
        textInput.style.backgroundColor = "white";
        randomText.innerHTML = data[randomValue];
        textInput.value = ""; // Clear any previous input
        result.innerHTML = ""; // Clear previous results
    } else if (btn.innerText === "Done") {
        // End logic
        btn.innerText = "Start";
        textInput.disabled = true;
        textInput.style.backgroundColor = "rgb(230, 230, 230)";
        myFun();
        restartBtn.style.display = "inline"; // Show Restart button
    }
});

// Restart the typing test
restartBtn.addEventListener("click", function () {
    // Reset all fields
    textInput.disabled = true;
    textInput.style.backgroundColor = "rgb(230, 230, 230)";
    textInput.value = "";
    randomText.innerHTML = "";
    result.innerHTML = "";

    btn.innerText = "Start"; // Reset Start button text
    restartBtn.style.display = "none"; // Hide Restart button
});
