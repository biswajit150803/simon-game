var gamePattern=[];
var buttonColours=["red","blue","green","yellow"];
function nextSequence(){
    var ranNum=Math.ceil(Math.random()*4)-1;
    var randomChosenColor=buttonColours[ranNum];
    gamePattern.push(randomChosenColor);
}
nextSequence();
