# javascript-quiz-app
A quiz app created using javascript
###This JavaScript code is a simple quiz application that presents a series of questions with multiple-choice options. 
The user can select an option for each question, and after answering all the questions, they can submit the quiz to see their score and review incorrect answers. 
Let's break down the code:

quizData: An array containing objects, each representing a quiz question along with its options and correct answer.

quizContainer, resultContainer, submitButton, retryButton, and showAnswerButton: These variables hold references to DOM elements for various sections of the quiz interface.

currentQuestion, score, and incorrectAnswers: These variables keep track of the current question index, the user's score, and the list of incorrect answers.

shuffleArray(array): A function that takes an array as input and shuffles its elements randomly. It is used to randomize the order of options for each question.

displayQuestion(): A function that displays the current question along with its options on the quiz container.

checkAnswer(): A function called when the user clicks the submit button. It checks if the user has selected an answer, updates the score, stores incorrect answers if any, and either displays the next question or shows the result if all questions are answered.

displayResult(): A function to display the final score after completing the quiz.

retryQuiz(): A function to reset the quiz and start again from the first question.

showAnswer(): A function to display the correct answers for the incorrectly answered questions after the quiz is completed.

The application allows the user to take the quiz, see their score, and review incorrect answers. 
The questions and options are randomized, adding an element of surprise and making the quiz more engaging.







