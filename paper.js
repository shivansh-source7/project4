let userScore =0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const comScorepara = document.querySelector("#com-score");

const genCompChoise= ()=>{
    const option= ["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return option[randIdx];
};

const drawGame =()=>{
    msg.innerText = "Game was Draw. play again";
    msg.style.backgroundColor="#081b31";
};

const showWinner=(userWin, userChoise, compChoise)=>{
   if(userWin){
    userScore++;
    userScorepara.innerText= userScore;
     msg.innerText = `You win. your ${userChoise} beats ${compChoise}`;
    msg.style.backgroundColor="green";
   }else{
     compScore++;
     comScorepara.innerText = compScore;
    msg.innerText= `You lost. ${compChoise} beats your ${userChoise}`;
    msg.style.backgroundColor="red";
   }
};

const playGame=(userChoise) =>{
    console.log("user choise=", userChoise);
    // generate computer choice
    const compChoise= genCompChoise();
    console.log("comp choise=", compChoise);

    if(userChoise=== compChoise){
        drawGame();
    }else{
        let userWin = true;
        if(userChoise ==="rock"){
            //scissors, paper
            userWin = compChoise ==="paper" ? false : true;
        } else if(userChoise==="paper"){
            //rock,scissors
            userWin = compScore=== "scissors" ? false : true;
        }  else{
            // rock, paper
            userWin = compChoise==="rock" ? false : true;
        }
        showWinner(userWin, userChoise, compChoise);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
       const  userChoise = choice.getAttribute("id");
       playGame(userChoise);
    });
});