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

var question1 = 'What symbols are used to wrap an array?';
var question2 = 'How can you covert an object into a string?';
var question3 = 'What can access a globally declared variable?';
var question4 = 'setInterval uses milliseconds to make its intervals. How long is 5500 milliseconds?';
var question5 = 'Out of these options, which is an eventListener?';


//Start button
var quizStart = document.createElement('button');
    quizStart.textContent = 'START';
    quizStart.className = 'quizstart';
    mainEl.appendChild(quizStart);
    quizStart.addEventListener('click', quizTimer);


  


