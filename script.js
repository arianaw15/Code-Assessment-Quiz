//If the user clicks "Start" the timer will start and the 1st set of questions will appear

var startBtn = document.getElementById('start-btn')
var questionContainer = document.getElementById('question-container')
var nextBtn = document.getElementById('next-btn')
var answerButtonsElement = document.getElementById('answer-buttons')
var question = document.getElementById('question')
var questionName = [{
        question: "Question 1",
        answer: [
            {text: 'answer1.1', correct: false},
            {text: 'answer1.2', correct: true},
            {text: 'answer1.3', correct: false},
            {text: 'answer1.4', correct: false}
        ]
    },
    {question: "Question 2",
answer: [
    {text: 'answer2.1', correct: false},
            {text: 'answer2.2', correct: false},
            {text: 'answer2.3', correct: false},
            {text: 'answer2.4', correct: true}
]}
]




// When a user clicks "start" the first question and answer options appear
startBtn.addEventListener('click', startQuiz)

function startQuiz(){
startBtn.classList.add('hide');
questionContainer.classList.remove('hide');
resetState();
for (let i = 0; i < questionName.length; i++) {
    document.getElementById("question").innerHTML = questionName[i].question;
    questionName[i].answer.forEach(answer => {
        const answerBtn = document.createElement('button');
        answerBtn.innerHTML = answer.text;
        answerBtn.classList.add('btn');
        answerBtn.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(answerBtn);
    })
    
}
    
}

//Function to reset the state to allow for the next set of questions
function resetState(){
    nextBtn.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

//When the user selects an answer it, alerts them whether they were correct or not and the next button appears

function selectAnswer() {
    nextBtn.classList.remove('hide');
    if (correct = "true"){
        alert("That's correct!")
    }
    else{
        alert("That's incorrect")
    }
}
nextBtn.addEventListener('click', () =>{
    setNextQuestion()
})

function setNextQuestion() {
    nextBtn.classList.add('hide'); 
    resetState(); 
}



//When the user answers all of the questions, their score will be displayed at the end