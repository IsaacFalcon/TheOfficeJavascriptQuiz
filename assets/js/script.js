const startButton = document.getElementById('start-btn');
const titleHeader = document.getElementById('header1');
const subHeader = document.getElementById('header2');
const timeElement = document.getElementById('time');
const questionContainerElement = document.getElementById('question-container1');
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-buttons');
var endScores = document.getElementById('scorescreen');
var score = document.getElementById('finalscore');
var  nameValue = document.getElementById('nameinput');
var subInitials = document.getElementById('submitinitials');
var restart = document.getElementById('restart-btn');
var rightAnswer = document.getElementById('right');
var wrongAnswer = document.getElementById('wrong');
var scoreDisplay = document.getElementById('previousscore');

var timer = 50;
var timeCount;
var questionNumber = 0;

// Timer functions to go through quiz and stop at 0
function setupTimer() {
  timeCount = setInterval(function () {
      timer--;
      var timeReset = timeElement.textContent = "Time:" + " " + timer;
     timer = timer;
      if (timer <= 0) {         
          clearInterval(timeCount);
          endGame();  
          timeElement.textContent = timeReset;

           
      }
  }, 1000)
}

// Start button to be clicked and run startGame Function
startButton.addEventListener('click', startGame);

function startGame() {
   console.log('started');
   startButton.classList.add('hide');
   titleHeader.classList.add('hide');
   subHeader.classList.add('hide');
   scoreDisplay.classList.add('hide');
   questionContainerElement.classList.remove('hide');
   setupTimer();
   displayQuestion();

}

// Array of questions, Answers, and correct choices for Quiz
var questions = [
   {
    question: "What does Kevin do with the onions in his chili?",
    choices: ["Undercooks Them", "Puts them in last", "Dices them", "Chews them first"],
    answer: "Undercooks Them",
   },
   {
    question: "What is the Villains name in Threat Level Midnight?",
    choices: ["Michael Scarn", "Packer", "Cherokee Jack", "Golden Face"],
    answer: "Golden Face",
   },
   {
    question: "What color does Creed die his hair?",
    choices: ["Jet Black", "Fire Red", "Light Brown", "Pink"],
    answer: "Jet Black",
   },
   {
    question: "What does Jim put Dwights stapler in?",
    choices: ["The comment box", "Shoebox", "Jello", "A tea pot"],
    answer: "Jello",
   },
   {
    question: "Who does Michael hit with his car?",
    choices: ["Kevin", "Meredith", "The security guard", "Oscar"],
    answer: "Meredith",
   },
 ]

//  function to display question and button answer choices
function displayQuestion() {
  var currentQuestion = questions[questionNumber];
  document.querySelector("h3").innerHTML = currentQuestion.question;
  answerButtonsElement.innerHTML = "";
  currentQuestion.choices.forEach(function(choice) {
    var choiceButton = document.createElement("button");
    choiceButton.setAttribute("class", "btn");
    choiceButton.setAttribute("value", choice);
    choiceButton.textContent = choice;
    choiceButton.onclick = evaluateAnswer;
    answerButtonsElement.append(choiceButton);
  })

}

// function to determine what to happen when correct or wrong choice is picked and timer subtract when wrong is chosen
function evaluateAnswer() {
   if(this.value === questions[questionNumber].answer) {
    console.log("correct!");
    rightAnswer.classList.remove('hide');
    wrongAnswer.classList.add('hide');

   } else {
    console.log("incorrect!");
    timer = timer -10;
    timeElement.textContent = timer;
    wrongAnswer.classList.remove('hide');
    rightAnswer.classList.add('hide');
   }
   questionNumber++;
   if(questionNumber === questions.length) {
    endGame();
   }
   else {
     displayQuestion();
   }
}

// endgame function, hiding questions and displaying score based off timer
function endGame() {
  questionContainerElement.setAttribute("class", "hide");
  endScores.removeAttribute("class");
  clearInterval(timeCount);
  score.textContent = timer;
}

// saves score to local storage
function saveScore() {
    var newScore = {
    newName: nameValue.value,
    userScore: timer,
    }
    console.log(newScore);
    window.localStorage.setItem('high score', JSON.stringify(newScore));
    subInitials.textContent = 'Submitted';
}

// added button to refresh game
function refresh() {
  window.location.reload("Refresh")
}

// submit button to save score and initials to local storage
subInitials.onclick = saveScore

restart.onclick = refresh
