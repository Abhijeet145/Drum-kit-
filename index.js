 var sounds = ['sounds/crash.mp3','sounds/kick-bass.mp3','sounds/snare.mp3','sounds/tom-1.mp3','sounds/tom-2.mp3','sounds/tom-3.mp3','sounds/tom-4.mp3'];
 
 // detecting button clicks
 var numberOfDrumButtons = document.querySelectorAll(".drum").length;

 for(var i=0;i<numberOfDrumButtons;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function handleClick(){

        var buttonInnerHtml = this.innerHTML;
        playSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
 }

//  detecting keyboard press
 document.addEventListener("keydown",function(event){
   playSound(event.key);
   buttonAnimation(event.key);
 });

 // playing sound corresponding to events
function playSound(key){
    switch (key) {
        case "w":
            var audio = new Audio(sounds[3]);
            audio.play();
            break;
        case "a":
            var audio = new Audio(sounds[4]);
            audio.play();
            break;
        case "s":
            var audio = new Audio(sounds[5]);
            audio.play();
            break;
        case "d":
            var audio = new Audio(sounds[6]);
            audio.play();
            break;
        case "j":
            var audio = new Audio(sounds[0]);
            audio.play();
            break;
        case "k":
            var audio = new Audio(sounds[1]);
            audio.play();
            break;
        case "l":
            var audio = new Audio(sounds[2]);
            audio.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}