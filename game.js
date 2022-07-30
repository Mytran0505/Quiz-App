const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull =document.getElementById("progressBarFull")

let currentQuestion ={};
let acceptingAnswer = false;
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
    if(availableQuestions.length == 0 || questionCounter >= MAX_QUESTION){
        localStorage.setItem('mostRecentScore', score);
        // go to the end page
        return window.location.assign('/end.html');
    }
    questionCounter++;

    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTION}`;

    progressBarFull.style.width = `${(questionCounter/MAX_QUESTION)* 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice =>{
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];

    });

    availableQuestions.splice(questionIndex, 1);
    console.log(availableQuestions);
    acceptingAnswer = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e =>{
        if(!acceptingAnswer) return;

        acceptingAnswer = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

     
        const classToAplly = selectedAnswer == currentQuestion.answer?'correct':'incorrect';

        if (classToAplly == "correct"){
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToAplly);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToAplly);
            getNewQuestion();
        }, 300);

    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}

startGame();
//comment
