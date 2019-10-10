// get HTML elements
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");

var choiceA = document.getElementById("a");
var choiceB = document.getElementById("b");
var choiceC = document.getElementById("c");
var choiceD = document.getElementById("d");
var counter = document.getElementById("counter");
var timeBar = document.getElementById("timeBar");
var progress = document.getElementById("progress");
var scoreDiv = document.getElementById("scoreContainer");

// create vars and questions
var questions = [
    {
        question : "Are you smart?",
        imgSrc : "img/html.png",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        choiceD : "Wrong",
        correct : "a",
        correctResponce: "Yay q1!",
        incorrectResponce: "Nope q1!",
        timesUpResponce: "Time's Up q1!",
    },{
        question : "Are you smart?",
        imgSrc : "img/css.png",
        choiceA : "Wrong",
        choiceB : "Correct",
        choiceC : "Wrong",
        choiceD : "Wrong",
        correct : "b",
        correctResponce: "Yay q2!",
        incorrectResponce: "Nope q2!",
        timesUpResponce: "Time's Up q2!",
    },{
        question : "Are you smart?",
        imgSrc : "img/js.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        choiceD : "Wrong",
        correct : "c",
        correctResponce: "Yay! q1",
        incorrectResponce: "Nope! q2",
        timesUpResponce: "Time's Up! q3",

    },
    {
        question : "Are you smart?",
        imgSrc : "img/js.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        choiceD : "Wrong",
        correct : "c",
        correctResponce: "Yay!",
        incorrectResponce: "Nope!",
        timesUpResponce: "Time's Up!",
    },
    {
        question : "Are you smart?",
        imgSrc : "img/js.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        choiceD : "Wrong",
        correct : "c",
        correctResponce: "Yay!",
        incorrectResponce: "Nope!",
        timesUpResponce: "Time's Up!"
    },
];

var lastQuestion = questions.length - 1;
var currentQuestion = 0;
var count = 0;
var questionTime = 5; 
var BarWidth = 200; // 150px
var BarUnit = BarWidth / questionTime;
var TIMER;
var score = 0;

// next question
function nextQuestion(){
    var q = questions[currentQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    nextQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(var qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeBar.style.width = count * BarUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        alert(questions[currentQuestion].timesUpResponce);
        if(currentQuestion < lastQuestion){
            currentQuestion++;
            nextQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
            alert(test);
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[currentQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
        alert(questions[currentQuestion].correctResponce);
    }else if ( answer != questions[currentQuestion].correct){
        // answer is wrong
        // change progress color to red
        answerIsWrong();
        alert(questions[currentQuestion].incorrectResponce);
        }
    count = 0;
    if(currentQuestion < lastQuestion){
        currentQuestion++;
        nextQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(currentQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(currentQuestion).style.backgroundColor = "#f00";
}

function TimeIsUp(){
    document.getElementById(currentQuestion).style.backgroundColor = "#f00";
    alert("test");
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    quiz.style.display = "none";
    
    // calculate the amount of question percent answered by the user
    var scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    var finalScore = ""

    if(scorePerCent >= 80) {
        finalScore="Congrats! You're Smarter Than a Fifth Grader!"
    }
    else if(scorePerCent >= 60) {
        finalScore="Cheer Up! There May Be a Couple Fifth Graders You're Smarter Than."
    }
    else if(scorePerCent >= 40) {
        finalScore="Yikes! You're Not Smarter Than a Fifth Grader."
    }
    else if(scorePerCent >= 20)
        finalScore="Uh Oh! A Fifth Grader is Definately Smarter Than You. Maybe It's Time To Go Back to School."
    
    
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"% " + finalScore + "</p>";
}
console.log(finalScore)
