var nextQuestion = document.getElementById('nextQuestion');
let nextQuest = document.getElementsByClassName('btn1');
var score = document.getElementById('score');
var finalScore = document.getElementById('finalScore');
var countdown = document.getElementById('countdown')
var count = 0;
var scoreCount = 0;
var duration = 0;
var quizSet = document.querySelectorAll('.quiz_set');
let quizBox = document.querySelectorAll('.quiz_box');
var quizAnsRow = document.querySelectorAll('.quiz_set .quiz_ans_row input');

console.log(nextQuest, 'next quest collection');
for(let i = 0; i < nextQuest.length; i++){
    nextQuest[i].addEventListener('click', function(){
        console.log("click")
        step()
        duration =10
    })     
}
// nextQuestion.addEventListener('click', function(){
//     console.log("click")
//     step()
//     duration =10
// }) 

quizAnsRow.forEach(function(quizAnsRowSingle) {
    quizAnsRowSingle.addEventListener('click', function() {
        setTimeout(function(){
            // step();
            duration =10
            },500)

        var valid =this.getAttribute('valid');
        if(valid == "valid"){
            scoreCount +=2;
            score.innerHTML = scoreCount;
            // finalScore.innerHTML = scoreCount;
        }else{
            scoreCount -=2;
            score.innerHTML = scoreCount;
            // finalScore.innerHTML = scoreCount;
        }
    })
})
function step(){
   console.log(nextQuestion, 'next quetions collections')
    count += 1;
    for(var i = 0; i < quizSet.length; i++){
        quizSet[i].className= 'quiz_set';

    }
    quizSet[count].className= 'quiz_set active';
    if (count === 1){
        console.log('count === 1')
        quizBox[1].style.display = 'block';
        quizBox[0].style.display = 'none';
        nextQuestion.style.display = 'none';
        clearInterval(durationTime);
        countdown.innerHTML = 0;
    }

    // quizSet[count].className= 'quiz_set active';
    if (count === 2){
        console.log('count === 2')
        quizBox[2].style.display = 'block';
        quizBox[1].style.display = 'none';
        nextQuestion.style.display = 'none';
        clearInterval(durationTime);
        countdown.innerHTML = 0;
    }

    // quizSet[count].className= 'quiz_set active';
    if (count === 3){
        quizBox[3].style.display = 'block';
        quizBox[2].style.display = 'none';
        nextQuestion.style.display = 'none';
        clearInterval(durationTime);
        countdown.innerHTML = 0;
    }

    // quizSet[count].className= 'quiz_set active';
    if (count === 4){
        quizBox[4].style.display = 'block';
        quizBox[3].style.display = 'none';
        nextQuestion.style.display = 'none';
        clearInterval(durationTime);
        countdown.innerHTML = 0;
    }

    // quizSet[count].className= 'quiz_set active';
    if (count === 5){
        // quizBox[5].style.display = 'block';
        quizBox[4].style.display = 'none';
        nextQuestion.style.display = 'none';
        clearInterval(durationTime);
        countdown.innerHTML = 0;
    }

    var durationTime = setInterval(() => {
        if(duration == 10){
            duration == 0;
        }
        duration +=1;
        countdown.innerHTML=duration;
        if(countdown.innerHTML == "10"){
            step()
        }
    
    },1000)
}