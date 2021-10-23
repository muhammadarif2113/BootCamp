const play = document.querySelector(".play-button"); 
const input = document.querySelector(".input-guess"); 
const inputButton = document.querySelector(".input-button");
var closeBy = document.querySelector(".close-by"); 
var historyGuess = document.querySelector(".history"); 
var score = document.querySelector("#score"); 
var highScore = document.querySelector("#highscore"); 
const body = document.querySelector("body"); 
var pic = document.querySelector("#pic"); 
const secretNum = document.querySelector(".secretNum");
const title = document.querySelector("#title"); 

var score1 = score.textContent; 
score1 = parseInt(score1); 

var topScore = highScore.textContent; 
topScore = parseInt(topScore); 



function reset(){

    body.style.backgroundColor = "lightcoral"; 
    historyGuess.innerHTML = null; 
    input.value = null; 
    score1 = 10; 
    score.innerHTML = 10; 
    pic.src = "question.png";
    secretNum.textContent = null; 
    secretNum.style.backgroundColor = "white"; 
    // location.reload(); 


}


play.addEventListener('click', ()=>{
    reset(); 
    const num = Math.floor(Math.random() * 100) + 1; 
    console.log(num); 


    inputButton.addEventListener('click', function(e){
        var myGuess = input.value; 


        if(isNaN(myGuess) || !myGuess){
            closeBy.innerHTML = '<ion-icon name="alert-circle-outline"></ion-icon>' + "Please enter a valid input"; 
        } else if (myGuess > 100){
            closeBy.innerHTML = '<ion-icon name="alert-circle-outline"></ion-icon>' + "Please enter a number between 1-100"; 
        } else {
            console.log(input.value); 
            if (myGuess > num){
                closeBy.innerHTML = '<ion-icon name="arrow-up-outline"></ion-icon>';
                closeBy.innerHTML += "Too High!"; 
                historyGuess.innerHTML += " " + myGuess + '<ion-icon name="arrow-up-outline"></ion-icon>'; 
                score1 = score1 - 1; 
                score.innerHTML = score1; 
                
    
            } else if (myGuess < num){
                closeBy.innerHTML = '<ion-icon name="arrow-down-outline"></ion-icon>';
                closeBy.innerHTML += "Too Low!"; 

                historyGuess.innerHTML += " " + myGuess + '<ion-icon name="arrow-down-outline"></ion-icon>'; 
                score1 = score1 - 1; 
                score.innerHTML = score1; 

    
            } else {
                closeBy.innerHTML = '<ion-icon name="thumbs-up-outline"></ion-icon>' + "Correct!"; 
                body.style.backgroundColor = "green"; 
                input.textContent = myGuess; 
                input.style.fontSize = "100px"; 
                pic.style.display = "none"; 
                secretNum.textContent = myGuess; 
                secretNum.style.backgroundColor = "red"; 
                secretNum.style.border = "none"; 
                title.style.fontSize = "12px"; 
                title.style.margin = "0px 0px 30px 0px";
                topScore = 10 - score1; 
                highScore.innerHTML = topScore; 

            }
            if(score1 == 0){
                // score.innerHTML = 0; 
                // e.stopPropagation(); 
                // e.preventDefault(); 

                alert("You Lost!"); 
                location.reload(); 


                return; 

            }
            // e.preventDefault(); 
        }

        



        
    
    })
})


