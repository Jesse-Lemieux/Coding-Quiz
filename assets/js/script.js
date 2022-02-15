//Main elements and Global variables
var bodyEl = document.querySelector('#body');
var headerEl = document.querySelector('#header');
var timerContainer = document.querySelector('#timerparent');
var containerEl = document.querySelector('#container');
var startBtn = document.querySelector('#start-btn');
var questionContainerEl = document.querySelector('#question-container');
let shuffeldQuestions, currentQuestionIndex;
var questionEl = document.querySelector('#quest');
var answerButtonsEl = document.querySelector('#answer-buttons');

//Start button
startBtn.addEventListener('click', () => {
  quizTimer();
  startQuiz();
});

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
  else ()=>{
    clearInterval();
    timerDisplay.className = 'hide'
    questionContainerEl.className = 'hide'
    scoreLog();

  }
}, 1000);
}

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

function showQuestion(question) {
  questionEl.innerText = question.question
  question.answers.forEach(answer => {
    var button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsEl.appendChild(button)
  })
}



    
//Quiz questions
const questions = [
  {
  question:'What symbols are used to wrap an array?',
  answers: [
    { text: '""', correct: false },
    { text: '[]', correct: true },
    { text: '()', correct: false },
    { text: '{}', correct: false }
  ]
},
{
  question: 'How can you covert an object into a string?',
  answers: [
    { text: 'JSON.stringify', correct: true },
    { text: 'addEventListener.makeString', correct: false },
    { text: '::convert::', correct: false },
    { text: '#becomestring', correct: false }
  ]
  },
  
  {
  question: 'What can access a globally declared variable?',
  answers: [
    { text: 'for loops', correct: false },
    { text: 'functions', correct: false },
    { text: 'objects', correct: false },
    { text: 'all of the above', correct: true }
  ]
  },
  
  {
  question: 'setInterval uses milliseconds to make its intervals. How long is 5500 milliseconds?',
  answers: [
    { text: '55 seconds', correct: false },
    { text: '5 and a half minutes', correct: false },
    { text: '5 and a half seconds', correct: true },
    { text: '5500 seconds', correct: false }
  ]
  },
  
  {
  question: 'Out of these options, which is an eventListener?',
  answers: [
    { text: 'html', correct: false },
    { text: 'concatenate', correct: false },
    { text: 'tweet', correct: false },
    { text: 'click', correct: true }
  ]
  },
  
  ]



  


