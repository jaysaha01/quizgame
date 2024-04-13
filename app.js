// https://dribbble.com/shots/8632945-Trivia-Quiz-Exploration => quiz templte

let quizarr = [

    {
        question: "Which of these tags would display the largest text?",
        option1: "H2 tag",
        option2: "p tag",
        option3: "h6 tag",
        option4: "h4 tag",
        ans: "H2 tag",
        id:1
    },

    {
        question: "What is the purpose of !DOCTYPE html",
        option1: "provides the web browser with security information",
        option2: "Allows programmers to link to files in-line",
        option3: "instructs the browser where to look for your CSS files",
        option4: "Tells the web browser what language to expect",
        ans: "Tells the web browser what language to expect",
        id:2
    },

    {
        question: "What is the difference between HTML and CSS?",
        option1: "CSS is one type of HTML",
        option2: "CSS structures a webpage. HTML strictly provides styling.",
        option3: "HTML gives a webpage structure. CSS provides styling.",
        option4: "There is no difference.",
        ans: "HTML gives a webpage structure. CSS provides styling.",
        id:3
    },


    {
        question: "What is the full form of CSS?",
        option1: "Casecading Styles Sheet",
        option2: "Cascading Style Sheets",
        option3: "Casacoding Style Sheets",
        option4: "None of the Above",
        ans: "Cascading Style Sheets",
        id:4
    },


    {
        question: "Inline CSS is added using",
        option1: "using style tag",
        option2: "using style attribute",
        option3: "using link tag",
        option4: "both ii). and iii).",
        ans: "using style attribute",
        id:5
    },

]

let Status = document.querySelector(".status");
let question = document.querySelector(".question");
let asnwers = document.querySelector(".asnwers");
let ansbx = document.querySelectorAll(".ansrs");
let nxtbtn = document.querySelector(".nxtbtn");
let ovely =document.querySelector(".ovely");

// ovely.children[0].style.backgroundColor="red"
// ovely.children[0].innerHTML="red"


var score = 1;

let num = 0;

function chagneing() {

    nxtbtn.addEventListener('click', () => {

        num=num+1;

        if (num === quizarr.length) {

            ovely.style.display="flex";

            ovely.children[0].innerHTML=`Your Score is ${score}`

            setTimeout(()=>{
                ovely.style.display="none";
            },2000)

        } else {
            chnageQuiz(num)
        }
    })
}

chnageQuiz(num)

Status.style.display="none";

let arrvalue = chagneing()

function chnageQuiz(arrvalue) {

    question.innerHTML = `${quizarr[num].id}.  ${quizarr[arrvalue].question}`;
    asnwers.innerHTML = `
    <div class="ansrs">${quizarr[arrvalue].option1}</div>
    <div class="ansrs">${quizarr[arrvalue].option2}</div>
    <div class="ansrs">${quizarr[arrvalue].option3}</div>
    <div class="ansrs">${quizarr[arrvalue].option4}</div>
    `
    nxtbtn.innerHTML = "Next Question";

    nxtbtn.style.display="none"


    let answerLogged = false;

    asnwers.addEventListener('click', (e) => {

        // Check if the answer has already been logged
        if (!answerLogged) {

           
            // Get the selected answer
            let selectedAnswer = e.target.innerHTML;

            // Get the correct answer for the current question
            let correctAnswer = quizarr[num].ans;

            let targetelm = e.target;

            // Check if the selected answer is correct
            if (selectedAnswer === correctAnswer) {
                // console.log("Correct!");
                score++;
                targetelm.style.backgroundColor="rgb(209 212 255)";
                targetelm.style.border="2px solid #717aef";
                targetelm.style.color="#717aef";

            } else {
                // console.log("Wrong!"); 
                score--;
                if (score < 0) {
                    score = 0;
                }
                console.log(score);
                console.log(targetelm);
                targetelm.style.backgroundColor="#fbafaf";
                targetelm.style.border="2px solid red";
                targetelm.style.color="red";
            }

            let totalquestion=quizarr.length;
            let currentquizno= quizarr[num].id;
            nxtbtn.style.display="block"
            Status.style.display="block";
            
            console.log(`totalquestion ${totalquestion} & currentquizno ${currentquizno}`);

            Status.innerHTML=`You complited ${currentquizno} / ${totalquestion}`

            answerLogged = true;
        }
    });

}




















