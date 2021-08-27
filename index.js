//Rock Paper Scissors
let playerscore = 0;
let computerscore = 0;
let round = 0;
let options = ['rock','paper','scissors'];

//function to evaluate computer  choice
function computerPlay(){
    const results = options[Math.floor(3*Math.random())];
    return results;
}

//function to print new paragraph
// for rock
function newparagraph(){
   
    let playeroption = 'rock';
    let computeroption = computerPlay();

    if(playeroption == 'rock'){
        if (computeroption == options[2]){
            playerscore++;
            document.getElementById('clicked-btn').innerHTML=`You chose ${playeroption}. Computer chose ${computeroption}. You win!`;
            document.getElementById('scores').innerHTML=`Your Score = ${playerscore} || Computer Score = ${computerscore}`;
 
        }
        if (computeroption == options[1]){
            computerscore++;
            document.getElementById('clicked-btn').innerHTML=`You chose ${playeroption}. Computer chose ${computeroption}. You lose`;
            document.getElementById('scores').innerHTML=`Your Score = ${playerscore} || Computer Score = ${computerscore}`;
 
        
        }
        if (playeroption == computeroption){
            document.getElementById('clicked-btn').innerHTML=`You chose ${playeroption}. Computer chose ${computeroption}. It is a tie`;
            document.getElementById('scores').innerHTML=`Your Score = ${playerscore} || Computer Score = ${computerscore}`;

        }
        if (playerscore == 5){
            alert('You have passed the test! You may join the brotherhood of archers!');
        }
        if (computerscore == 5){
            alert('You have failed this city. Refresh to redeem yourself');
        }
            
    }
    
}


//for paper
function newparagraph1(){
    let playeroption = 'paper';
    let computeroption = computerPlay();
    
    if(playeroption == 'paper'){
        if (computeroption == options[2]){
            computerscore++;
            document.getElementById('clicked-btn').innerHTML=`You chose ${playeroption}. Computer chose ${computeroption}. You lose!`;
            document.getElementById('scores').innerHTML=`Your Score = ${playerscore} || Computer Score = ${computerscore}`;

            
        }
        if (computeroption == options[0]){
            playerscore++;
            document.getElementById('clicked-btn').innerHTML=`You chose ${playeroption}. Computer chose ${computeroption}. You win`;
            document.getElementById('scores').innerHTML=`Your Score = ${playerscore} || Computer Score = ${computerscore}`;

           
        }
        if (playeroption == computeroption){
            document.getElementById('clicked-btn').innerHTML=`You chose ${playeroption}. Computer chose ${computeroption}. It is a tie`;
            document.getElementById('scores').innerHTML=`Your Score = ${playerscore} || Computer Score = ${computerscore}`;

        }
        if (playerscore == 5){
            alert('You have passed the test! You may join the brotherhood of archers!');
        }
        if (computerscore == 5){
            alert('You have failed this city. Refresh to redeem yourself');
        }
}
}

//for scissors
function newparagraph2(){

    let playeroption = 'scissors';
    let computeroption = computerPlay();

    if(playeroption == 'scissors'){
        if (computeroption == options[0]){
            computerscore++;
            document.getElementById('clicked-btn').innerHTML=`You chose ${playeroption}. Computer chose ${computeroption}. You lose!`;
            document.getElementById('scores').innerHTML=`Your Score = ${playerscore} || Computer Score = ${computerscore}`;

 
            
        }
        if (computeroption == options[1]){
            playerscore++;
            document.getElementById('clicked-btn').innerHTML=`You chose ${playeroption}. Computer chose ${computeroption}. You win`;
            document.getElementById('scores').innerHTML=`Your Score = ${playerscore} || Computer Score = ${computerscore}`;

            
        }
        if (playeroption == computeroption){
            document.getElementById('clicked-btn').innerHTML=`You chose ${playeroption}. Computer chose ${computeroption}. It is a tie`;
            document.getElementById('scores').innerHTML=`Your Score = ${playerscore} || Computer Score = ${computerscore}`;

        }
        if (playerscore == 5){
            alert('You have passed the test! You may join the brotherhood of archers!');
        }
        if (computerscore == 5){
            alert('You have failed this city. Refresh to redeem yourself');
        }

    }
}

//fuction to count the number of rounds
function playRounds(){
    round+=1;
    document.getElementById('round').innerHTML=`Rounds played: ${round}`;
}

if (playerscore == 5){
    alert('You have passed the test! You may join the brotherhood of archers!');
}
if (computerscore == 5){
    alert('You have failed this city. Refresh to redeem yourself');
}