var bodyEl = document.querySelector('#body')
var headerEl = document.querySelector('#header');
var timerContainer = document.querySelector('#timerparent');
var mainEl = document.querySelector('#main');

//Timer functionality
var timeLeft = 60;
    var elem = document.getElementById('timer');
    
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
      } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
      }
    }

var quizStart = document.createElement('button');
    quizStart.textContent = 'START';
    quizStart.className = 'quizstart';
    mainEl.appendChild(quizStart);
    quizStart.addEventListener('click');{
        countdown();
    }


