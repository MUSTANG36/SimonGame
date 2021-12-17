


//start of game

var levelNum = 0;
var gameOver = false;
var colorChoices = ["Red","Blue","Yellow","green"];
var gamePattern =[];

//idk how to use the wrong sound?
//User pick animations
$(".btn").click(function (e){
    $(this).fadeOut(250).fadeIn(250);
    var audio = new Audio("/sounds/" + $(this).attr('id') + ".mp3");
    
    switch(e.target.id){
        case "red":
            audio.play();
            console.log("red");
        break;
        case "yellow":
            audio.play();
            console.log("yellow");
        break;
        case "green":
            audio.play();
            console.log("green");
        break;
        case "blue":
            audio.play();
            console.log("blue");
        break;
        default: 
        console.log("swtich ran");
        break;
    }
})



//when game starts
function level(){
    $(document).keydown(function(e){
    
        if("Beat level"){
            if(e.key === "a"){
                levelNum++;
                alert("Level " + levelNum);
                randomSequence(levelNum);
            
            }
        }
    })


}




function randomSequence(numberOfSquares) {

    for(var i=0;i < numberOfSquares; i++){
        

        var randomNumber = Math.floor(Math.random() * 4);
        var randomColor = colorChoices[randomNumber];

        gamePattern.push(randomColor);
       

        switch(randomColor){
            case "Red":
                $(".red").delay(180000).toggleClass("pickedSquares");
            break;
            case "Yellow":
                $(".yellow").delay(180000).toggleClass("pickedSquares");
            break;
            case "Green":
                $(".green").delay(1800000).toggleClass("pickedSquares");
            break;
            case "Blue":
                $(".blue").delay(1800000).toggleClass("pickedSquares");
            break;
            default: 
            console.log("swtich ran");
            break;
        }
    }

}


function playerPattern(){

    var playerPicks = [];

    var pattern = randomSequence(4);
   
}




function checkPattern(){

    var player = playerPattern;
    var computer = randomSequence;

    console.log("player " + player);
    console.log("computer " + computer);
    
}
