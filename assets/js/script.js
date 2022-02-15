//Main elements and Global variables
var bodyEl = document.querySelector('#body')
var headerEl = document.querySelector('#header');
var timerContainer = document.querySelector('#timerparent');
var containerEl = document.querySelector('#container');
var startBtn = document.querySelector('#start-btn');
var questionContainerEl = document.querySelector('#question-container');
const shuffeldQuestions, currentQuestionIndex
var questionEl = document.querySelector('#question');
var answerButtonsEl = document.querySelector('#answer-buttons')

//Timer element display
var timeLeft = 75;

var timerDisplay = document.createElement('h2');
    timerDisplay.textContent = timeLeft + ' seconds remaining';
    timerDisplay.className = 'hide';
    timerContainer.appendChild(timerDisplay);
//Timer functionality
function quizTimer(){setInterval(() => {

  timerDisplay.classList.add('timerdisplay');

  if (timeLeft > 0){
    timeLeft=timeLeft-1;
    timerDisplay.innerHTML = timeLeft + " seconds remaining"
  } 
  else (clearInterval)
}, 1000);
}

//Quiz questions
var questions = [{
  question:'What symbols are used to wrap an array?',
  answers: [
    { text: '""', correct: false },
    { text: '[]', correct: true },
    { text: '()', correct: false },
    { text: '{}', correct: false },

  ]
},
  {
  question: 'How can you covert an object into a string?',
  answers: [
    { text: 'JSON.stringify', correct: true },
    { text: 'addEventListener.makeString', correct: false },
    { text: '::convert::', correct: false },
    { text: '#becomestring', correct: false },
  ]

},

{
  question: 'What can access a globally declared variable?',
  answer: 'all of the above',
  options: [
    'for loops',
    'functions',
    'objects',
    'all of the above'
  ]
},

{
  question: 'setInterval uses milliseconds to make its intervals. How long is 5500 milliseconds?',
  answer: '5 and a half seconds',
  options: [
    '55 seconds',
    '5 and a half minutes',
    '5 and a half seconds',
    '5500 seconds'
  ]
},

{
  question: 'Out of these options, which is an eventListener?',
  answer: 'click',
  options: [
    'html',
    'concatenate',
    'tweet',
    'click'
  ]
},

  ]

  //Quiz Functionality
function startQuiz(){
  startBtn.classList.add('hide');
  shuffeldQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerEl.classList.remove('hide');
  setQuestion();
}

function setQuestion(){
  showQuestion(shuffeldQuestions[currentQuestionIndex])

}

function showQuestion(question){
  questionEl.innertext = question.question;
}

//Start button
    startBtn.addEventListener('click', () => {
      quizTimer();
      startQuiz();
    });


  


