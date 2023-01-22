var startButton = document.getElementById('start-button');
var questions = document.getElementById('questions');
var answers = document.getElementById('answers');
var choice1 = document.getElementById('choice1');
var choice2 = document.getElementById('choice2');
var choice3 = document.getElementById('choice3');
var choice4 = document.getElementById('choice4');

var questionsKey=[
    {
        question:"Commonly used data types DO NOT include",
        choice1:"strings",
        choice2:"booleans",
        choice3:"alerts",
        choice4:"numbers",
        answer:"choice3"
    },

    {
        question:"The condition in an if/else statement is enclosed within __",
        choice1:"quotes",
        choice2:"curly brackets",
        choice3:"parentheses",
        choice4:"square brackets",
        answer:"choice3"
    },

    {
        question:"Arrays in Javascript can be used to store__",
        choice1:"numbers and strings",
        choice2:"other arrays",
        choice3:"booleans",
        choice4:"all of the above",
        answer:"choice4"
    },

    {
        question:"String values must be enclosed within __ when being assigned to variables",
        choice1:"commas",
        choice2:"curly brackets",
        choice3:"quotes",
        choice4:"parentheses",
        answer:"choice3"
    },

    {
        question:"A very useful tool used during development and debugging for printint content to the debugger is",
        choice1:"Javascriipt",
        choice2:"console log",
        choice3:"for loops",
        choice4:"terminal/bash",
        answer:"choice2"
    }

]

var currentQuestion=0;
var lastQuestion= questionsKey.length -1;


function createQuestions(){
var displayQuestion = questionsKey[currentQuestion];
console.log(displayQuestion);
questions.textContent= displayQuestion.question;

startButton.style.display="none";
answers.style.display="block";
choice1.textContent= displayQuestion.choice1;
choice2.textContent= displayQuestion.choice2;
choice3.textContent= displayQuestion.choice3;
choice4.textContent= displayQuestion.choice4;
}



function startQuiz(){
createQuestions();
}
startButton.addEventListener("click", startQuiz);