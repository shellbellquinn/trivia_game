var rightAnswers = 0;
var wrongAnswers = 0;
var questionCount = 0;
var startGame = false;
var countdown;
var timeLeft;


/*Jquery get HTML variables */
var qTimer = $('#qTimer');
var qNumber = $('#qNumber');
var currentQuestion = $('#question');
var answerA = $('#a');
var answerB = $('#b');
var answerC = $('#c');
var answerD = $('#d');
var answers = $('.answer');
var answerImg = $('#answerImg');
var correct = $('#correct');
var timesUp = $('#timesUp');
var incorrect = $('#incorrect');
var startResetBtn = $('#startReset');
var nextQuestionBtn = $('#nextQuestion');

var questions = [
    {
       qNumber: 1,
       question: 'Test Question',
       answers: {
           a: 'test',
           b: 'test',
           c: 'test',
           d: 'test'
       },
       correctAnswer: 'c',
       correctResponse: 'YAY!',
       incorrectResponse: 'Opps',
       timeUpResponse: '1Time\'s up!',
       imgSrc: 'assets/images/pic.jpg',
    },
    {
        qNumber: 2,
        question: 'Test Question',
        answers: {
            a: 'test',
            b: 'test',
            c: 'test',
            d: 'test'
        },
        correctAnswer: 'c',
        correctResponse: 'YAY!',
        incorrectResponse: 'Opps',
        timeUpResponse: '2Time\'s up!',
        imgSrc: 'https://media3.giphy.com/media/26BkMnfPJE3ltfqWk/200.webp?cid=790b7611a8db4819a9fb6b087e4f3330c1d826ddce723453&rid=200.webp',
     },
     {
        qNumber: 3,
        question: 'Test Question',
        answers: {
            a: 'test',
            b: 'test',
            c: 'test',
            d: 'test'
        },
        correctAnswer: 'c',
        correctResponse: 'YAY!',
        incorrectResponse: 'Opps',
        timeUpResponse: '3Time\'s up!',
        imgSrc: 'https://media3.giphy.com/media/26BkMnfPJE3ltfqWk/200.webp?cid=790b7611a8db4819a9fb6b087e4f3330c1d826ddce723453&rid=200.webp',
     },
]

   /* Initial Elements */
   qTimer.detach();
   qNumber.detach();
   currentQuestion.text('We are about to see if you are smarter than a fifth grader!');
   answerA.detach();
   answerB.detach();
   answerC.detach();
   answerD.detach();
   correct.detach();
   incorrect.detach();
   nextQuestionBtn.detach();

 
   /* Function that runs the countdown called in nextQuestion() */
   function quesCountdown() {
    countdown--;
    qTimer.text('Time left: ' + countdown);
    if(countdown === 0) {
        clearInterval(timeLeft);
        timesUpDisplay() //replace with time's up function that has clearQ built in
    }
}

   /* Start and Reset Game */

   startResetBtn.click(function() {
    if(startGame === true) {
        rightAnswers = 0;
        wrongAnswers = 0;
        questionCount = 0;
        nextQuestion();
    }
    else {
        nextQuestion();
    }
    });

   function nextQuestion() {
    if(questionCount < questions.length) {
        startGame = true;
        countdown = 5;
        timeLeft = setInterval(quesCountdown, 1000); 
        nextQuestionBtn.detach();
        startResetBtn.detach();
        answerImg.detach();
        correct.detach();
        incorrect.detach();
        timesUp.detach();
        qTimer.appendTo('#qSection').text('Time left: ' + countdown);
        qNumber.appendTo('#qSection').text('Question #' + questions[questionCount].qNumber);
        currentQuestion.appendTo('#qSection').text(questions[questionCount].question);
        answerA.appendTo('#qSection').text(questions[questionCount].answers.a);
        answerB.appendTo('#qSection').text(questions[questionCount].answers.b);
        answerC.appendTo('#qSection').text(questions[questionCount].answers.c);
        answerD.appendTo('#qSection').text(questions[questionCount].answers.d);
    }
}

/* clear previous question */

function clearQ() {
    qTimer.detach();
    qNumber.detach();
    answerA.detach();
    answerB.detach();
    answerC.detach();
    answerD.detach();
    correct.detach();
    incorrect.detach();
    answerImg.appendTo('#qSection').attr('src', questions[questionCount].imgSrc);
    nextQuestionBtn.appendTo('#qSection').text;
    // answerImg.appendTo('#answerImage').html;

}

/* user clicks */

nextQuestionBtn.click(nextQuestion);

// answers.click(function() {
    
//     if(questions[questionCount].correctAnswer) {
//         rightAnswersDisplay();
//     } else {
//         wrongAnswerDisplay();
//     };
// });




/* times up function */
function timesUpDisplay () {
    clearQ();
    currentQuestion.html(questions[questionCount].timeUpResponse);
    wrongAnswers ++;
    questionCount ++;
}
/* wrong answer function */

function wrongAnswerDisplay () {
    clearQ();
    currentQuestion.html(questions[questionCount].incorrectResponse);
    wrongAnswers ++;
    questionCount ++;
}

/* right answer function */

function rightAnswerDisplay () {
    clearQ();
    currentQuestion.html(questions[questionCount].correctResponse);
    wrongAnswers ++;
    questionCount ++;
}

/* end of game score */

