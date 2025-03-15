

// quiz.js

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 30; // Set timer for each question in seconds

const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars"
    },
    {
        question: "Is JavaScript a programming language?",
        options: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "Which ocean is the largest?",
        options: ["Atlantic", "Indian", "Pacific", "Arctic"],
        correctAnswer: "Pacific"
    },
    
{
    question: "Which is the only body part that is fully grown from birth?",
    options: ["Nose", "Eyes", "Heart", "Ears"],
    correctAnswer: "Eyes"
},
{
    question: "How many borns do we have in an ear?",
    options: ["1", "6", "3", "None"],
    correctAnswer: "3"
},
{
    question: "In which year did Uganda get her independence",
    options: ["1999", "1900", "1965", "1960"],
    correctAnswer: "1960"
},
{
    question: "What has keys but can't open locks?",
    options: ["Piano", "Strings", "Guitar"],
    correctAnswer: "Piano"
}

];

function startQuiz() {
    // Hide the start button
    document.getElementById("start-btn").style.display = "none";

    // Show the question container
    document.getElementById("question-container").style.display = "block";

    // Start displaying the first question
    displayQuestion();
}

function displayQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    document.getElementById("question-text").textContent = question.question;

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = ''; // Clear previous options
    question.options.forEach(option => {
        const optionElement = document.createElement("li");
        optionElement.textContent = option;
        optionElement.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(optionElement);
    });

    startTimer();
}

function startTimer() {
    timeLeft = 30; // Reset timer for each question
    document.getElementById("timer").textContent = `Time Left: ${timeLeft}s`;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = `Time Left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function checkAnswer(selectedAnswer) {
    const correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;
    if (selectedAnswer === correctAnswer) {
        score++;
    }

    // Disable all options after an answer is selected
    const options = document.getElementById("options-container").children;
    Array.from(options).forEach(option => {
        option.onclick = null;
        if (option.textContent === correctAnswer) {
            option.style.backgroundColor = "green"; // Correct answer
        } else if (option.textContent === selectedAnswer) {
            option.style.backgroundColor = "red"; // Incorrect answer
        }
    });

    setTimeout(nextQuestion, 1000); // Wait for a second before moving to the next question
}

function nextQuestion() {
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("score").textContent = `Your Score: ${score} / ${quizQuestions.length}`;
    document.getElementById("retry-btn").style.display = "inline-block";
}

function retryQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById("question-container").style.display = "block";
    document.getElementById("result-container").style.display = "none";
    document.getElementById("start-btn").style.display = "none"; // Hide start button again
    displayQuestion();
}
