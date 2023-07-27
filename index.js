

 var drumNo=document.querySelectorAll(".drum").length;
for (var i=0; i<drumNo;i++){
  //document.querySelectorAll(".drum")[i].addEventListener("click", clickhandle);
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
  var buttonText=this.innerHTML;
  buttonAnimination(buttonText);
    
    switch (buttonText) {
      case "w":
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
        break;

        case "a":
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
        break;

        case "s":
        var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
        break;

        case "d":
        var audio=new Audio("sounds/tom-4.mp3");
        audio.play();
        break;

        case "j":
        var audio=new Audio("sounds/snare.mp3");
        audio.play();
        break;

        case "k":
        var audio=new Audio("sounds/crash.mp3");
        audio.play();
        break;

        case "l":
        var audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
    
      default:
        break;
    }

  });

}


// for (var i=0; i<drumNo;i++){
  //document.querySelectorAll(".drum")[i].addEventListener("click", clickhandle);
  addEventListener("keypress", function(keys){
   keySound(keys.key);
   buttonAnimination(keys.key);
  });

  function keySound(keys){
    switch (keys) {
      case "w":
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
        break;

        case "a":
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
        break;

        case "s":
        var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
        break;

        case "d":
        var audio=new Audio("sounds/tom-4.mp3");
        audio.play();
        break;

        case "j":
        var audio=new Audio("sounds/snare.mp3");
        audio.play();
        break;

        case "k":
        var audio=new Audio("sounds/crash.mp3");
        audio.play();
        break;

        case "l":
        var audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
    
      default:
        // this.alert("Wrong Key was pressed");
        break;
    }
  }

function buttonAnimination(currentKey){
  var activeButton=document.querySelector("."+currentKey);
 activeButton.classList.add("pressed");

 setTimeout(function(){
  activeButton.classList.remove("pressed");
 },80);
}