// get HTML elements
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var subheader = document.getElementById("subheader");
var choiceA = document.getElementById("a");
var choiceB = document.getElementById("b");
var choiceC = document.getElementById("c");
var choiceD = document.getElementById("d");
var counter = document.getElementById("counter");
var timeBar = document.getElementById("timeBar");
var progress = document.getElementById("progress");
var scoreDiv = document.getElementById("scoreContainer");
var img1 = document.getElementById("img1");
var questionImg = document.getElementById("questionImg");

// create vars and questions
var questions = [
    {
        question : "If the Teenage Mutant Ninja Turtles were real turtles, which would be their animal classifiaction?",
        questionImg: "http://pngimg.com/uploads/ninja_turtles/ninja_turtles_PNG55.png",
        choiceA : "Reptiles",
        choiceB : "Marsupials",
        choiceC : "Amphibians",
        choiceD : "Mammals",
        correct : "a",
        correctResponce: "Great job! You know your reptiles!",
        incorrectResponce: "Nope! Turtles, snakes, lizards, tortoises, crocodiles, and alligators are all reptiles!",
        timesUpResponce: "Time's Up! The correct answer was reptile!",
    },{
        question : "It takes Nick 75 minutes to do his homework. If he begins at 7pm, how much time will he have to practice his dance moves before bed at 10pm?",
        questionImg: "img/css.png",
        choiceA : "1 hour and 20 minutes",
        choiceB : "1 hour and 15 minutes",
        choiceC : "1 hour and 45 minutes",
        choiceD : "1 hour and 35 minutes",
        correct : "c",
        correctResponce: "Nice! Practice those dance moves!",
        incorrectResponce: "Wrong! He would have 1 hour and 45 minutes to practice.",
        timesUpResponce: "Uh oh! Time's up the correct answer was 1 hour and 45 minutes!",
    },{
        question : "What hemisphere is Australia located in?",
        questionImg: "img/js.png",
        choiceA : "Northern",
        choiceB : "Southern",
        choiceC : "Both",
        choiceD : "Neither",
        correct : "b",
        correctResponce: "That's right, cheers mate!",
        incorrectResponce: "Nope! The land down under is in the Southern hemisphere.",
        timesUpResponce: "Time's Up! The right answer is Southern.",

    },
    {
        question : "'My very empty mouth swallowed up nachos?' is a mnemonic device that helps us remember the name of which of these things?",
        questionImg: "img/js.png",
        choiceA : "Moon Phases",
        choiceB : "Stars in Orion",
        choiceC : "Planets in Our Solar System",
        choiceD : "Order of Operations",
        correct : "c",
        correctResponce: "Correct!",
        incorrectResponce: "Incorrect! It's the planets in our solar system!",
        timesUpResponce: "Time's Up! The correct answer is planets in our solar system!",
    },
    {
        question : "If a peach pit is one-sixth the weight of a peach and you have 24 pounds of peaches, how many pounds are the pits?",
        questionImg: "img/js.png",
        choiceA : "6 pounds",
        choiceB : "4 pounds",
        choiceC : "8 pounds",
        choiceD : "2 pounds",
        correct : "b",
        correctResponce: "Yay! That's right, enjoy your peaches.",
        incorrectResponce: "Nope! One-sixth of 24 is 4.",
        timesUpResponce: "Time's Up! The answer is 4."
    },
];

var lastQuestion = questions.length - 1;
var currentQuestion = 0;
var count = 0;
var questionTime = 30; 
var barWidth = 700; 
var barUnit = barWidth / questionTime;
var timer;
var score = 0;

// next question
function nextQuestion(){
    
    var q = questions[currentQuestion];
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    questionImg.setAttribute ("src", q.questionImg);
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    subheader.style.display = "none";
    img1.style.display ="none";
    nextQuestion();
    quiz.style.display = "block";
    renderCounter();
    timer = setInterval(renderCounter,1000); // 1000ms = 1s
}

// // render progress
// function renderProgress(){
//     move();
//     for(var qIndex = 0; qIndex <= lastQuestion; qIndex++){
//         progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
//     }
// }

// counter render

function renderCounter(){
    if(count <= questionTime){
        timeBar.style.width = count * barUnit + "px";
        counter.innerHTML = count;
        count++
    }else{
        count = 0;
        // change progress color to red
        alert(questions[currentQuestion].timesUpResponce);
    }
}

 function renderNextQuestion(){
        if(currentQuestion < lastQuestion){
            currentQuestion++;
            nextQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(timer);
            scoreRender();
            alert(test);
            count = 0;
            alert(questions[currentQuestion].timesUpResponce);
        }
    }




// checkAnwer

function checkAnswer(answer){
    if( answer == questions[currentQuestion].correct){
        // answer is correct
        score++;
        alert(questions[currentQuestion].correctResponce);
    }else if ( answer != questions[currentQuestion].correct){
        // answer is wrong 
        alert(questions[currentQuestion].incorrectResponce);
        }
    count = 0;
    if(currentQuestion < lastQuestion){
        currentQuestion++;
        nextQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(timer);
        scoreRender();
    }
    
}

// answer is correct


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
    else if(scorePerCent >= 0)
        finalScore="Uh Oh! A Fifth Grader is Definately Smarter Than You. Maybe It's Time To Go Back to School."
    
    
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"% " + finalScore + "</p>";
}

