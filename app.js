const questions = [
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: 1 },
    { question: "What is the capital of France?", options: ["London", "Berlin", "Paris", "Madrid"], answer: 2 },
    { question: "Which planet is closest to the Sun?", options: ["Venus", "Earth", "Mercury", "Mars"], answer: 2 },
    { question: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: 2 },
    { question: "What is the chemical symbol for water?", options: ["O2", "CO2", "H2O", "NaCl"], answer: 2 },
    { question: "How many continents are there?", options: ["5", "6", "7", "8"], answer: 2 },
    { question: "What is the square root of 64?", options: ["6", "7", "8", "9"], answer: 2 },
    { question: "Who wrote 'Romeo and Juliet'?", options: ["Shakespeare", "Dickens", "Hemingway", "Tolkien"], answer: 0 },
    { question: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: 2 },
    { question: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "South Korea", "Thailand"], answer: 1 },
    { question: "What is the speed of light?", options: ["300 km/s", "300,000 km/s", "30,000 km/s", "3,000 km/s"], answer: 1 },
    { question: "Who painted the Mona Lisa?", options: ["Picasso", "Van Gogh", "Da Vinci", "Michelangelo"], answer: 2 },
    { question: "What is the smallest prime number?", options: ["1", "2", "3", "5"], answer: 1 },
    { question: "What is the freezing point of water?", options: ["0°C", "32°C", "100°C", "212°C"], answer: 0 },
    { question: "Which element has the atomic number 1?", options: ["Oxygen", "Carbon", "Hydrogen", "Helium"], answer: 2 }
];

let currentQuestionIndex = 0;
let selectedOption = null;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-button");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
    nextButton.disabled = true;

    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.textContent = option;
        optionElement.classList.add("option");
        optionElement.addEventListener("click", () => selectOption(index, optionElement));
        optionsElement.appendChild(optionElement);
    });
}

function selectOption(index, optionElement) {
    selectedOption = index;
    document.querySelectorAll(".option").forEach((el, idx) => {
        el.classList.remove("selected");
    });
    optionElement.classList.add("selected");
    nextButton.disabled = false;
}

nextButton.addEventListener("click", () => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
        alert("Correct!");
    } else {
        alert("Wrong!");
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        questionElement.textContent = "Quiz Completed!";
        optionsElement.innerHTML = "";
        nextButton.style.display = "none";
    }
});

loadQuestion();
