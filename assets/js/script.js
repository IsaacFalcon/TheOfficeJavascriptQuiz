const startButton = document.getElementById('start-btn');
const titleHeader = document.getElementById('header1');
const subHeader = document.getElementById('header2');
const timeElement = document.getElementById('time');
const questionContainerElement = document.getElementById('question-container1');
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-buttons');
var timer = 50;
var timeCount;


function setupTimer() {
  timeCount = setInterval(function () {
      timer--;
      var timeReset = timeElement.textContent = "Time:" + " " + timer;
     timer = timer;
      if (timer <= 0) {         
          clearInterval(timeCount);
            
          timeElement.textContent = timeReset;
           
      }
  }, 1000)
}

startButton.addEventListener('click', startGame);

function startGame() {
   console.log('started');
   startButton.classList.add('hide');
   titleHeader.classList.add('hide');
   subHeader.classList.add('hide');
   questionContainerElement.classList.remove('hide');
   setupTimer();

}

var questions = [
   {
    question: "What does Kevin do with the onions in his chili?",
    choices: ["Undercooks Them", "Puts them in last", "Dices them", "Chews them first"],
    answer: "Undercooks Them",
   },
   {
    question: "What is the Villains name in Threat Level Midnight",
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
    question: "Who does Michael hit with his car",
    choices: ["Kevin", "Meredith", "The security guard", "Oscar"],
    answer: "",
   },
 ]

