const question = document.getElementById("question");
const choices = Array.from(document.getElementsByTagName("choice-text"));

let currentQuestion ={};
let acceptingAnswer = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Inside which HTML element do we put the JavaScript ?",
        choice1: "<script>",
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scripting>",
        answer: 1
    },
    {
        question: "What is the correct syntax for refering to an external script call 'xxx.js'?",
        choice1: "<script href = 'xxx.js'>",
        choice2: "<jscript name = 'xxx.js'>",
        choice3: "<script src = 'xxx.js'>",
        choice4: "<script file = 'xxx.js'>",
        answer: 3
    },
    {
        question: "How do you write 'Hello world' in an alert box?",
        choice1: "msgBox('Hello world')",
        choice2: "<alertBox('Hello world')",
        choice3: "msg('Hello world')",
        choice4: "alert('Hello world')",
        answer: 4
    }
];

const CORRECT_BONUS = 10;
const MAX_QUESTION = 3;

startGame = () =>{
    questionCounter =0;
    score =0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = ()=>{
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice =>{
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];

    });
};

startGame();
