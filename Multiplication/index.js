const num1 = Math.ceil(Math.random(1,10)*10)
const num2 = Math.ceil(Math.random(1,10)*10)

const quesEl = document.getElementById("question")
quesEl.innerText = `What is ${num1} mulitply by ${num2}?`

let score= JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

const formEl= document.getElementById("form");
const correctAns = num1 * num2;
const inputEl = document.getElementById("input");

const scoreEl = document.getElementById("score");

formEl.addEventListener("submit", ()=> {
    const userAns = +inputEl.value
    if(userAns=== correctAns){
        score++
        updateLocalStorage()
    }else{
        score--
        updateLocalStorage()
    }

    scoreEl.innerText = `score: ${score}`
})

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}

//+ is used to convert string  to int
