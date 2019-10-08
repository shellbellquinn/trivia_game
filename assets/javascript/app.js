var rightAnswers = 0;
var wrongAnswers = 0;
var questionCount = 0;
var startGame = false;
var countdown = "";
var timeLeft = ""; 

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
var incorrect = $('#incorrect');
var startResetBtn = $('#startReset');
var nextQuestionBtn = $('#nextQuestion');

var questions = [
    {
       questionNum: 1,
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
       timeUpResponse: 'Time\'s up! The correct answer is 1929. The first ceremony was held at the Hollywood Roosevelt Hotel.',
       imgSrc: 'https://media3.giphy.com/media/26BkMnfPJE3ltfqWk/200.webp?cid=790b7611a8db4819a9fb6b087e4f3330c1d826ddce723453&rid=200.webp',
    },
    {
        questionNum: 2,
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
        timeUpResponse: 'Time\'s up! The correct answer is 1929. The first ceremony was held at the Hollywood Roosevelt Hotel.',
        imgSrc: 'https://media3.giphy.com/media/26BkMnfPJE3ltfqWk/200.webp?cid=790b7611a8db4819a9fb6b087e4f3330c1d826ddce723453&rid=200.webp',
     },
     {
        questionNum: 3,
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
        timeUpResponse: 'Time\'s up! The correct answer is 1929. The first ceremony was held at the Hollywood Roosevelt Hotel.',
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

   /* Start Game */

   startResetBtn.click(function() {
    if(!startGame) {
        nextQuestion();
    }
    });

   function nextQuestion() {
    if(questionCount < questions.length) {
        startGame = true;
        countdown = 30;
        timeLeft = setInterval(countdown, 1000); 
        startResetBtn.detach();
        answerImg.detach();
        correct.detach();
        incorrect.detach();
        qTimer.appendTo('#qSection').text('Time left: ' + countdown);
        qNumber.appendTo('#qSection').text('Question #' + questions[questionCount].questionNum);
        currentQuestion.appendTo('#qSection').html(questions[questionCount].question);
        answerA.appendTo('#qSection').html(questions[questionCount].answers.a);
        answerB.appendTo('#qSection').html(questions[questionCount].answers.b);
        answerC.appendTo('#qSection').html(questions[questionCount].answers.c);
        answerD.appendTo('#qSection').html(questions[questionCount].answers.d);
    }
}

 