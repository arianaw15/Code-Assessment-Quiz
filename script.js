//If the user clicks "Start" the timer will start and the 1st set of questions will appear

var startBtn = document.querySelector("#start-btn")
var answers = document.querySelector("#answer-buttons")
var hideBox = document.querySelector(".hide")
var nextBtn = document.querySelector("#next-btn")
var question = document.querySelector("#question")
var questionName = ["What symbol do you use to signify the beginning of an array?","What number does an array start with?", "How many strings can you have in an array?"]
var answer1 = ["answer 1","answer 2", "answer 3", "answer 4"]

startBtn.addEventListener("click", function(event){
    event.preventDefault();
    if (hideBox.style.display === "none"){
        hideBox.style.display = "block";
    }  else{hideBox.style.display = "none";
    };
        document.getElementById("question").innerHTML = questionName[0];
    for (let index = 0; index < answer1.length; index++) {
        const element = answer1[index];
        
    }
})

//If the user selects the correct question, the score will add a point


function setNextQuestion(){

}

function selectAnswer(){

}

//When the user answers all of the questions, their score will be displayed at the end