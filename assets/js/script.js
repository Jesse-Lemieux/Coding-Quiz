//Main elements and Global variables
var bodyEl = document.querySelector('#body')
var headerEl = document.querySelector('#header');
var timerContainer = document.querySelector('#timerparent');
var mainEl = document.querySelector('#main');

//Timer element display
var timeLeft = 75;

var timerDisplay = document.createElement('h2');
    timerDisplay.textContent = timeLeft + ' seconds remaining';
    timerDisplay.className = 'timerdisplay';
    timerContainer.appendChild(timerDisplay);
//Timer functionality
function quizTimer(){setInterval(() => {

  if (timeLeft > 0){
    timeLeft=timeLeft-1;
    timerDisplay.innerHTML = timeLeft + " seconds remaining"
  } 
  else (clearInterval)
}, 1000);
}


//Quiz questions
var questions = [{
  numb: 1,
  question:'What symbols are used to wrap an array?',
  answer: '[]',
  options: [
    '""',
    '{}',
    '[]',
    '()'
  ]
},
  {
  numb: 2,
  question: 'How can you covert an object into a string?',
  answer: 'JSON.stringify',
  options: [
    'JSON.stringify',
    'addEventListener.makeString',
    '::convert::',
    '#becomestring'
  ]
},

{
  numb: 3,
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
  numb: 4,
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
  numb: 5,
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


//Quiz funtionality 
function quizQuestions(){
  


}


//Start button
var quizStart = document.createElement('button');
    quizStart.textContent = 'START';
    quizStart.className = 'quizstart';
    mainEl.appendChild(quizStart);
    quizStart.addEventListener('click', quizTimer);


  


