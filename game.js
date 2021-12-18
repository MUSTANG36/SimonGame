


//start of game

var levelNum = 0;
var started = false;
var colorChoices = ["red","blue","yellow","green"];
var gamePattern =[];
var userClickPattern = [];


$(document).keydown(function(){
    if(!started){
        $("#level-title").text("Level " + levelNum);
        randomSequence();
        started = true;
        }
    }
);

//idk how to use the wrong sound?
//User pick animations
$(".btn").click(function (e){
    
    $(this).fadeOut(250).fadeIn(250); 
    
    handler(e.target.id);
    
    playSound(e.target.id);
    
    animatePress(e.target.id);



})

function animatePress(currentColor){

    $("#"+currentColor).addClass("pressed");
    
    setTimeout(() => {  
        $("#"+currentColor).removeClass("pressed");
    }, 100)

}


function handler(btnColor){
   var userChoiceColour = btnColor;
   
   userClickPattern.push(userChoiceColour);

   //all checkAnswer() after a user has clicked and chosen their answer, 
    //passing in the index of the last answer in the user's sequence
   checkAnswer(userClickPattern.length-1);
    console.log(userClickPattern);
   
}

//equality operator will compare the reference for arrays and objeect not the values
// BAD: userClickPattern === gamePattern

function checkAnswer(currentLevel){

    if(gamePattern[currentLevel] === userClickPattern[currentLevel] ) {
       console.log("success"); 
       console.log(gamePattern[currentLevel]); 
       
       if(userClickPattern.length === gamePattern.length){
           setTimeout(function (){
               randomSequence();
               
           },1000);
       }
 



        } else{
                var wrongSound = new Audio("/sounds/wrong.mp3");
                wrongSound.play();
    
                $("body").addClass("game-over");
    
                setTimeout(function (){
                    $("body").removeClass("game-over");
                },200);
    
                $("#level-title").text("Game Over,Press 'a' key to Retart");
    
                console.log("wrong");
    
                //disable buttons
    
                $(document).keydown(function (e){
                    if(e.key === "a"){
                        startOver();
                        console.log("start over");
                    }
                    
                });
            }
}


function randomSequence() {

        levelNum++;
        $("#level-title").text("Level " + levelNum);

        var randomNumber = Math.floor(Math.random() * 4);
        var randomChosenColour = colorChoices[randomNumber];
        gamePattern.push(randomChosenColour);
        
        console.log(gamePattern);
        $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
            playSound(randomChosenColour);

        userClickPattern.length = 0;


}


function playSound(name){

    var audio = new Audio("/sounds/" + name + ".mp3");

    switch(name){
        case "red":
            audio.play();
            
        break;
        case "yellow":
            audio.play();
            
        break;
        case "green":
            audio.play();
            
        break;
        case "blue":
            audio.play();
      
        break;
        default: 
        console.log("swtich ran");
        break;
    }
}

function startOver(){


    levelNum = 0;
    $("#level-title").text("Level " + levelNum);
    
    gamePattern.length = 0;
    userClickPattern.length = 0;
    started = true;

    randomSequence();

}