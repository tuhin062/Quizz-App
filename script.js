let data = [
    {
    Q: "Q1: JS is used for?",
    a: "Frontend",
    b: "Animation",
    c: "Dynamically update content",
    d: "Backend",
    ans: "ans3",
    },
    {
    Q: "Q2: Fullform of JS ?",
    a: "Javascript",
    b: "Javascience",
    c: "JavaS",
    d: "Javasecure",
    ans: "ans1", 
    },
    {
    Q: "Q3: who devloped js",
    a: "santa",
    b: "brenden eich",
    c: "george",
    d: "Neck",
    ans: "ans2", 
    },
    {
    Q: "Q4: when js devloped",
    a: "1995",
    b: "1990",
    c: "1999",
    d: "1892",
    ans: "ans1", 
    }
]

let question = document.getElementById("qns");
let option1 = document.getElementById("opt1");
let option2 = document.getElementById("opt2");
let option3 = document.getElementById("opt3");
let option4 = document.getElementById("opt4");
let answers = document.querySelectorAll(".options");

let num = 0;
let score = 0;
let myScore = document.querySelector(".myScore");
let nextBtn = document.getElementById("next");

question.innerHTML = data[num].Q;
option1.innerHTML = data[num].a;
option2.innerHTML = data[num].b;
option3.innerHTML = data[num].c;
option4.innerHTML = data[num].d;

function disSelect(){
    answers.forEach((curElement)=>{
        curElement.checked=false;}
    )
}

function checkAns(){
    let ans;
    answers.forEach((curElement)=>{
        if(curElement.checked){ans = curElement.id;}
    })
    return ans;
}

function next(){
    let checkedAns = checkAns();
    if (checkedAns == data[num].ans){
        score++;
    }
    num++
    disSelect();

    if (num < data.length){
    question.innerHTML = data[num].Q;
    option1.innerHTML = data[num].a;
    option2.innerHTML = data[num].b;
    option3.innerHTML = data[num].c;
    option4.innerHTML = data[num].d;
    }else{
        myScore.innerHTML = `You Have Scored ${score}/${data.length} <br/>
        <button onclick = "location.reload()">Play Again</button>`;

        nextBtn.style.display = "none";
        document.querySelector(".btn").style.backgroundColor="lightGreen";
    }
}