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
var mobileTimeBar = document.getElementById("mobileTimeBar");
var mobileProgress = document.getElementById("mobileProgress");
var scoreDiv = document.getElementById("scoreContainer");
var img1 = document.getElementById("img1");
var questionImg = document.getElementById("questionImg");
var imgContainer = document.getElementById('imgContainer')

// create vars and questions
var questions = [{
        question: "If the Teenage Mutant Ninja Turtles were real turtles, which would be their animal classifiaction?",
        questionImg: "http://pngimg.com/uploads/ninja_turtles/ninja_turtles_PNG55.png",
        choiceA: "Reptiles",
        choiceB: "Marsupials",
        choiceC: "Amphibians",
        choiceD: "Mammals",
        correct: "a",
        correctResponce: "Great job! You know your reptiles!",
        incorrectResponce: "Nope! Turtles, snakes, lizards, tortoises, crocodiles, and alligators are all reptiles!",
        timesUpResponce: "Time's Up! The correct answer was reptile!",
    }, {
        question: "It takes Nick 75 minutes to do his homework. If he begins at 7pm, how much time will he have to practice his dance moves before bed at 10pm?",
        questionImg: "https://cdn.dribbble.com/users/185578/screenshots/4752552/backpack-kid.gif",
        choiceA: "1 hour and 20 minutes",
        choiceB: "1 hour and 15 minutes",
        choiceC: "1 hour and 45 minutes",
        choiceD: "1 hour and 35 minutes",
        correct: "c",
        correctResponce: "Nice! Practice those dance moves!",
        incorrectResponce: "Wrong! He would have 1 hour and 45 minutes to practice.",
        timesUpResponce: "Uh oh! Time's up the correct answer was 1 hour and 45 minutes!",
    },
    {
        question: "Which word contains a long vowel sound in the following sentence? “Dogs like tennis balls.",
        questionImg: "https://i.giphy.com/media/xagTEogeO9qes/giphy.webp",
        choiceA: "Dogs",
        choiceB: "Like",
        choiceC: "Tennis",
        choiceD: "Balls",
        correct: "b",
        correctResponce: "Nice job! Nice has a long 'i' too!",
        incorrectResponce: "Nope! A long vowel is pronounced exactly the same as the letter itself. In this case, the long vowel is the “i” in like.",
        timesUpResponce: "Time's Up! A long vowel is pronounced exactly the same as the letter itself. In this case, the long vowel is the “i” in like."
    },
    {
        question: "'My very empty mouth swallowed up nachos?' is a mnemonic device that helps us remember the name of which of these things?",
        questionImg: "http://pluspng.com/img-png/free-png-nachos-and-cheese-cheese-tray-cliparts-2577009-800.png",
        choiceA: "Moon Phases",
        choiceB: "Stars in Orion",
        choiceC: "Planets in Our Solar System",
        choiceD: "Order of Operations",
        correct: "c",
        correctResponce: "Correct! Sorry Pluto, no nachos for you.",
        incorrectResponce: "Incorrect! It's the planets in our solar system!",
        timesUpResponce: "Time's Up! The correct answer is planets in our solar system!",
    },
    {
        question: "Australia is the world's 6th largest country by area! In what hemisphere is Australia located?                     ",
        questionImg: "http://bestanimations.com/Flags/Australia/australian-flag-animated-gif-36.gif",
        choiceA: "Northern",
        choiceB: "Southern",
        choiceC: "Both",
        choiceD: "Neither",
        correct: "b",
        correctResponce: "That's right, cheers mate!",
        incorrectResponce: "Nope! The land down under is in the Southern hemisphere.",
        timesUpResponce: "Time's Up! The right answer is Southern.",

    },
    {
        question: "What typically green chemical found in plants uses photosynthesis to turn sunlight into energy?",
        questionImg: "https://media0.giphy.com/media/o7R0zQ62m8Nk4/giphy.gif?cid=790b761169393137045bd757afcc81a374ad242c39288900&rid=giphy.gif",
        choiceA: "Iodine",
        choiceB: "Chloroform",
        choiceC: "Chlorophyll",
        choiceD: "Ethylamine",
        correct: "c",
        correctResponce: "Nice job paying attention in science!",
        incorrectResponce: "Nope! It's Chlorophyll.",
        timesUpResponce: "Time's Up! It's Chlorophyll."
    },
    {
        question: "If a peach pit is one-sixth the weight of a peach and you have 24 pounds of peaches, how many pounds are the pits?",
        questionImg: "https://cdn.prod-carehubs.net/n1/d4fe2aba09187cb4/uploads/2019/06/peach-joke.jpg",
        choiceA: "6 pounds",
        choiceB: "4 pounds",
        choiceC: "8 pounds",
        choiceD: "2 pounds",
        correct: "b",
        correctResponce: "Yay! That's right, enjoy your peaches.",
        incorrectResponce: "Nope! One-sixth of 24 is 4.",
        timesUpResponce: "Time's Up! The answer is 4."
    },
    {
        question: "Between 1488 and 1485 The Wars of The Roses took place in what country?",
        questionImg: "https://media0.giphy.com/media/26Ff1jwWkIz5VygBG/giphy.gif?cid=790b761193a937a935da6abcb04b7c330adbd0aea7d0f0ba&rid=giphy.gif",
        choiceA: "England",
        choiceB: "France",
        choiceC: "Germany",
        choiceD: "Spain",
        correct: "a",
        correctResponce: "Congrats! This led to the Tudor house taking the throne of England.",
        incorrectResponce: "Nope! The Wars of the Roses were a series of English civil wars for control of the throne.",
        timesUpResponce: "Time's Up! The Wars of the Roses were a series of English civil wars for control of the throne."
    },
    {
        question: "By definition an ornithologist is a scientist who studies what?",
        questionImg: "https://pngriver.com/wp-content/uploads/2018/03/Download-Science-PNG-Transparent-Picture-For-Designing-Work.png",
        choiceA: "Plants",
        choiceB: "Ears",
        choiceC: "Fossils",
        choiceD: "Birds",
        correct: "d",
        correctResponce: "Yes! Let's go birdwatching!",
        incorrectResponce: "Nope! Ornithologists study birds!",
        timesUpResponce: "Time's Up! Ornithologists study birds!"
    },
    {
        question: "The classic Hans Christian Andersen Fairy Tale 'The Real Princess' is better known as 'The Princess and the...'",
        questionImg: "https://i.giphy.com/media/2Gf1SyVRuDzWw/giphy.webp",
        choiceA: "Bride",
        choiceB: "Frog",
        choiceC: "Prince",
        choiceD: "Pea",
        correct: "d",
        correctResponce: "Yes! It's the Princess and the Pea.",
        incorrectResponce: "Nope! It's the Princess and the Pea.",
        timesUpResponce: "Time's Up! It's the Princess and the Pea."
    },
];

var lastQuestion = questions.length - 1;
var currentQuestion = 0;
var count = 0;
var questionTime = 15;
var barWidth = 700;
var barUnit = barWidth / questionTime;
var mobileBarWidth = 350;
var mobileBarUnit = mobileBarWidth / questionTime;
var barUnit = barWidth / questionTime;
var timer;
var score = 0;
var scorePerCent= "0";



start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
    scoreDiv.textContent = "";
    imgContainer.setAttribute("src", "")
    scorePerCent= "0";
    lastQuestion = questions.length - 1;
    currentQuestion = 0;
    count = 0;
    timer;
    score = 0;
    currentQuestion = 0;
    score = 0;
    scoreDiv.setAttribute('style', 'display:none');
    imgContainer.setAttribute('style', 'display:none');
    start.style.display = "none";
    subheader.style.display = "none";
    img1.style.display = "none";
    nextQuestion();
    quiz.style.display = "block";
    renderCounter();
    timer = setInterval(renderCounter, 1000); 
}

// next question
function nextQuestion() {

    var q = questions[currentQuestion];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    questionImg.setAttribute("src", q.questionImg);
}


function renderCounter() {
    if (count <= questionTime) {
        timeBar.style.width = count * barUnit + "px"; //progess bar grow
        mobileTimeBar.style.width = count * mobileBarUnit + "px"; //progess bar grow
        counter.innerHTML = count;
        count++
    } else {
        count = 0;
        alert(questions[currentQuestion].timesUpResponce);
    }
}



// checkAnwer

function checkAnswer(answer) {
    if (answer == questions[currentQuestion].correct) {
        // answer is correct
        score++;
        alert(questions[currentQuestion].correctResponce);
    } else if (answer != questions[currentQuestion].correct) {
        // answer is wrong 
        alert(questions[currentQuestion].incorrectResponce);
    }
    count = 0;
    if (currentQuestion < lastQuestion) {
        currentQuestion++;
        nextQuestion();
    } else {
        // end the quiz and show the score
        clearInterval(timer);
        scoreRender();
    }

}



// score render
function scoreRender() {
    scoreDiv.style.display = "block";
    quiz.style.display = "none";
    start.style.display = "block";
    imgContainer.setAttribute("style", "block");

    // calculate the amount of question percent answered by the user
    scorePerCent = Math.round(100 * score / questions.length);


    var finalScore = ""
    var imgSource = ""

    if (scorePerCent >= 80) {
        finalScore = "Congrats! You're Smarter Than a Fifth Grader!";
       imgSource= "https://media.giphy.com/media/xTiTnwLdTHmELnDx4I/giphy.gif";
    } else if (scorePerCent >= 60) {
        finalScore = "Cheer Up! There May Be a Couple Fifth Graders You're Smarter Than.";
        imgSource= "https://i.giphy.com/media/26BkMnfPJE3ltfqWk/giphy.webp";
    } else if (scorePerCent >= 30) {
        finalScore = "Yikes! You're Not Smarter Than a Fifth Grader.";
        imgSource= "https://media2.giphy.com/media/3oEduYeIpHUgif4J32/giphy.gif?cid=790b7611612a936bc6cedddd20ee26cd5d6dfbfb13c98559&rid=giphy.gif"
    } else if (scorePerCent >= 0) {
        finalScore = "Uh Oh! A Fifth Grader is Definately Smarter Than You. Maybe It's Time To Go Back to School.";
        imgSource= "https://media.giphy.com/media/FMiD54OqYdnW0/giphy.gif"
    }

    

    scoreDiv.textContent = scorePerCent + "% " + finalScore;
    imgContainer.setAttribute("src", imgSource)




    }