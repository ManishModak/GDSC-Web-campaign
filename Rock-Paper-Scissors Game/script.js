let ComputerChoiceDisplay = document.querySelector('.computer-choice') ;
let UserChoiceDisplay = document.querySelector('.user-choice') ;
let Result = document.querySelector('.result') ;
let possibleChoices = document.querySelectorAll('button') ;

let UserChoice ;
let computerChoice ;

possibleChoices.forEach(function(pchoice){
    return pchoice.addEventListener('click',function(e){
        UserChoice = e.target.id ;
        UserChoiceDisplay.innerHTML = UserChoice ;
        generateComputerResult() ;
        getResult() ;
    }) 
})

function generateComputerResult()
{
    const RandomNumber=Math.floor(Math.random()*3) ;
    if(RandomNumber===0)
    {
        computerChoice = "rock" ;
    }
    if(RandomNumber===1)
    {
        computerChoice = "paper" ;
    }
    if(RandomNumber===2)
    {
        computerChoice = "scissors" ;
    }

    ComputerChoiceDisplay.innerHTML = computerChoice ;
}

function getResult()
{
    if(UserChoice === computerChoice)
    {
        Result.innerHTML="It's a draw" ;
    }
    if(UserChoice === "rock" && computerChoice === "paper")
    {
        Result.innerHTML="You Lose!!" ;
    }
    if(UserChoice === "rock" && computerChoice === "scissors")
    {
        Result.innerHTML="You Win!!" ;
    }
    if(UserChoice === "paper" && computerChoice === "rock")
    {
        Result.innerHTML="You Win!!" ;
    }
    if(UserChoice === "paper" && computerChoice === "scissors")
    {
        Result.innerHTML="You Lose!!" ;
    }
    if(UserChoice === "scissors" && computerChoice === "paper")
    {
        Result.innerHTML="You Win!!" ;
    }
    if(UserChoice === "scissors" && computerChoice === "rock")
    {
        Result.innerHTML="You Lose!!" ;
    }
}

