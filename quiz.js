
//questions array 
const quizData =[
    {
        question: "Javascript is which type of programming language ?",
        options:["Object-Oriented", "Object-Based",  "Assembly-language", "High-level"],
        answer:"Object-Based"
    },
    {
        question:"Which one of the following also known as Conditional Expression ? ",
        options:["Alternative to if-else", "Switch statement", "If-then-else statement", "immediate if"],
        answer: "immediate if"
    },
    {
        question: "In JavaScript, what is a block of statement ? ",
        options:["Conditional block", "block that combines a number of statements into a single compound statement", 
        "both conditional block and a single statement", "block that contains a single statement"],
        answer: "block that combines a number of statements into a single compound statement"
    },
    {
        question:"When interpreter encounters an empty statements, what it will do ?",
        options:["Shows a warning", "Prompts to complete the statement", "Throws an error", "Ignores the statements"],
        answer: "Ignores the statements"
    },
    {
        question:" The \"function\" and \" var\" are known as:",
        options: ["Keywords", "Data types", "Declaration statements", "Prototypes"],
        answer: "Declaration statements"
    },
    {
        question: "Which of the following variables takes precedence over the others if the names are the same ?",
        options:["Global variable", "The local element", "The two of the above", "None of the above"],
        answer: "The local element"
    },
    {
        question: " Which one of the following is the correct way for calling the JavaScript code ?",
        options: ["Preprocessor", "Triggering Event", "RMI", "Function/Method"],
        answer: "Function/Method"
    },
    {
        question: "Which of the following type of a variable is volatile ?",
        options:["Mutable variable", "Dynamic variable", "Volatile variable", "Immutable variable"],
        answer: "Mutable variable"
    },
    {
        question:"Which of the following option is used as hexadecimal literal beginning ? ",
        options :["00", "0x", "0X", "Both 0x and 0X"],
        answer: "Both 0x and 0X"
    },
    {
        question:"In the JavaScript, which one of the following is not considered as an error ?",
        options: ["Syntax error", "Missing of semicolons", "Division by zero", "Missing of Bracket"],
        answer: "Division by zero"
    }
];

//the questions container which will display the questions and its options
const quizContainer = document.getElementById("quiz");
//the results container which will display the quiz results
const resultContainer = document.getElementById("result");
//the submit button
const submitButton = document.getElementById("submit");
//the retry button
const retryButton = document.getElementById("retry");
//display the correct answers if the quiz is completed
const showAnswerButton = document.getElementById('showAnswer');

//keeps track of the index of the current question being displayed
let currentQuestion = 0;
//keeps track of the number of correctly answered questions
let score = 0;
//store incorrect answers
let incorrectAnswers = [];

//takes an array as input and shuffles its elements randomly
function shuffleArray(array){
    //iterates over each element of the array starting from the last element and going backwards until the first element
    for (let i =array.length - 1; i > 0; i--){
        //j will be an integer between 0 and i
        const j = Math.floor(Math.random() * (i + 1));
        //the elements i and j are swapped using desctructuring assignment
        [array[i], array[j]] = [array[j], array[i]];
    }
}


//displaying the questions and its options
function displayQuestion() {
    const questionData = quizData[currentQuestion];
    //creating the question element
    const questionElement = document.createElement("div");
    questionElement.className = "question";
    questionElement.innerHTML = questionData.question;

    //creating the options element
    const optionsElement = document.createElement("div");
    optionsElement.className = "options";


    //shuffle options
    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);
    for (let i = 0; i < shuffledOptions.length; i++){
        //label element
        const option = document.createElement("label");
        option.className = "option";
        // input element
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "quiz";
        radio.value = shuffledOptions[i];
        //option text
        const optionText = document.createTextNode(shuffledOptions[i]);
        option.appendChild(radio);
        option.appendChild(optionText);
        optionsElement.appendChild(option);
    }

    quizContainer.innerHTML = "";
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
}


//checking answer if it is correct or not
function checkAnswer() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption){
        const answer = selectedOption.value;
        if(answer === quizData[currentQuestion].answer){
            score++;
        } else {
            incorrectAnswers.push({
                question: quizData[currentQuestion].question,
                incorrectAnswer: answer,
                correctAnswer: quizData[currentQuestion].answer
            });
        }
        currentQuestion++;
        selectedOption.checked = false;
        if (currentQuestion < quizData.length){
            displayQuestion();
        } else {
            displayResult();
        }
    }
}


// displaying the results
function displayResult() {
    quizContainer.style.display = "none";
    submitButton.style.display = "none";
    retryButton.style.display = "inline-block";
    showAnswerButton.style.display = "inline-block";
    resultContainer.innerHTML =`You scored ${score} out of ${quizData.length}!` 
}


//retrying the quiz
function retryQuiz() {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    quizContainer.style.display = "block";
    submitButton.style.display = "inline-block";
    retryButton.style.display = "none";
    showAnswerButton.style.display = "none";
    resultContainer.innerHTML = "";
    displayQuestion();
}

//showing correct answer
function showAnswer() {
    quizContainer.style.display = "none";
    submitButton.style.display = "none";
    retryButton.style.display = "inline-block";
    showAnswerButton.style.display = "none";

    let incorrectAnswerHtml = "";
    for (let i=0; i < incorrectAnswers.length; i++){
        incorrectAnswerHtml += `
        <p>
        <strong>Question:</strong>
        ${incorrectAnswers[i].question}<br>
        <strong>Your Answer:</strong>
        ${incorrectAnswers[i].incorrectAnswer}<br>
        <strong>Correct Answer:</strong>
        ${incorrectAnswers[i].correctAnswer}
        </p>
        `;
    }
    resultContainer.innerHTML = `<p>You scored ${score} out of ${quizData.length}!</p>
    <strong>Incorrect Answers: </strong> ${incorrectAnswerHtml}
    `;
}


submitButton.addEventListener("click", checkAnswer);
retryButton.addEventListener("click", retryQuiz);
showAnswerButton.addEventListener("click", showAnswer);

displayQuestion();