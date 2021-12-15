let newGame = document.getElementById("newGame");
let rollDice = document.getElementById("rollDice");
const maximumNumberOfRolls = 3;
let count;

let randomNumber1;
let randomNumber2;
let randomNumber3;
let randomNumber4;

let totalRoundSith ;
let totalRoundJedi;

let totalSith; 
let totalJedi;

let gameLoop = newGame.addEventListener("click", runGame);

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");

let roundScoreSith = document.getElementById("roundScoreSith");
let gameScoreSith = document.getElementById("gameScoreSith");
let roundScoreJedi = document.getElementById("roundScoreJedi");
let gameScoreJedi = document.getElementById("gameScoreJedi");

let sithWin = document.getElementById("sithWin");
let jediWin = document.getElementById("jediWin");
let draw = document.getElementById("draw");
let = showSithWin;
let = showJediWin;
let = showDraw;

sithWin.style.opacity = "0";
jediWin.style.opacity = "0";
draw.style.opacity = "0";

gameLoop;

function runGame() {

    count = 1;

    totalSith = 0; 
    totalJedi = 0;
    totalRoundSith = 0;
    totalRoundJedi = 0;

    newGame.disabled = true;
    sithWin.style.opacity = "0";
    jediWin.style.opacity = "0";
    draw.style.opacity = "0";

    roundScoreSith.innerHTML =  totalRoundSith;
    gameScoreSith.innerHTML = totalSith;
    roundScoreJedi.innerHTML = totalRoundJedi;
    gameScoreJedi.innerHTML = totalJedi;

    rollDice.addEventListener("click", roll);
}

function roll() {

    console.log(count+"Hey");

    randomNumber1 = Math.floor((Math.random() * 6) + 1), randomNumber2 = Math.floor((Math.random() * 6) + 1), randomNumber3 = Math.floor((Math.random() * 6) + 1), randomNumber4 = Math.floor((Math.random() * 6) + 1);
    
    console.log(randomNumber1);
    console.log(randomNumber2);
    console.log(randomNumber3);
    console.log(randomNumber4);

    
    if ((randomNumber1 === 1) || (randomNumber2 === 1)) {

        totalRoundSith = 0;
        totalSith += 0;

    } else if (randomNumber1 === randomNumber2){

        totalRoundSith = (randomNumber1 + randomNumber2)*2;
        totalSith += totalRoundSith;

    } else {

        totalRoundSith = randomNumber1 + randomNumber2;
        totalSith += totalRoundSith;;
    }

    if ((randomNumber3 === 1) || (randomNumber4 === 1)) {

        totalRoundJedi = 0;
        totalJedi += 0;

    } else if (randomNumber3 === randomNumber4){

        totalRoundJedi = (randomNumber3 + randomNumber4)*2;
        totalJedi += totalRoundJedi;

    } else {

        totalRoundJedi = randomNumber3 + randomNumber4;
        totalJedi += totalRoundJedi;
    }
    
    img1.src = `styles/Images/dice${randomNumber1}.png`;
    img2.src = `styles/Images/dice${randomNumber2}.png`;
    img3.src = `styles/Images/dice${randomNumber3}.png`;
    img4.src = `styles/Images/dice${randomNumber4}.png`;

    roundScoreSith.innerHTML =  totalRoundSith;
    gameScoreSith.innerHTML = totalSith;
    roundScoreJedi.innerHTML = totalRoundJedi;
    gameScoreJedi.innerHTML = totalJedi;

    if (count === maximumNumberOfRolls) {

        console.log("Done");
        newGame.disabled = false;
        rollDice.removeEventListener("click", roll);

        if (totalSith > totalJedi) {

            showSithWin = setTimeout(function(){
    
                sithWin.style.opacity = "1";
                sithWin.style.transition= "3s";
                }, 1000);
        } else if (totalSith < totalJedi){

            showJediWin = setTimeout(function(){
    
                jediWin.style.opacity = "1";
                jediWin.style.transition= "3s";
                }, 1000);
        } else {

            showDraw = setTimeout(function(){

                draw.style.opacity = "1";
                draw.style.transition= "3s";
                }, 1000);
        }

        gameLoop;

    }

    count += 1;

    console.log(totalRoundSith);
    console.log(totalRoundJedi);
    console.log(totalSith);
    console.log(totalJedi);
}