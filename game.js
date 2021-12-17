


//start of game

var levelNum = 1;
var gameOver = false;
var colorChoices = ["red","blue","yellow","green"];
var gamePattern =[];
var userClickPattern = [];


$(document).keydown(function(e){
        if(e.key === "a"){
            randomSequence();
            $("h1").text("Level "+levelNum);
            levelNum++;
        }
    
})

//idk how to use the wrong sound?
//User pick animations
$(".btn").click(function (e){
    
    $(this).fadeOut(250).fadeIn(250); 
    
    handler(e.target.id);
    
    playSound(e.target.id);
    
    animatePress(e.target.id);

    checkAnswer(e.target.id);
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
    console.log(userClickPattern);
   
}

//equality operator will compare the reference for arrays and objeect not the values
// BAD: userClickPattern === gamePattern

function checkAnswer(currentLevel){

    if(JSON.stringify(userClickPattern) === JSON.stringify(gamePattern) ) {
       console.log("success"); 
    }else{
        console.log("wrong");
    }

}


function randomSequence() {

        var randomNumber = Math.floor(Math.random() * 4);
        var randomColor = colorChoices[randomNumber];

        gamePattern.push(randomColor);
        console.log(gamePattern);


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



