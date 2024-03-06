//common function for both types of press-button and keyboard

function makesound(key)//pas key as variable to function
{ 
    switch(key)
    {
            case "1":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
            case "2":
            var tom2=new Audio("sounds/tom-2.mp3");
           tom2.play();
            break;
            case "3":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
            case "4":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
            case "5":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
            case "6":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
         default:
            var kickk=new Audio("sounds/kick-bass.mp3");
            kickk.play();

    }

}
function buttonanimation(currentkey)
{
   var activebutton=document.querySelector("."+currentkey);
   activebutton.classList.add("pressed");
  setTimeout(function(){
    activebutton.classList.remove("pressed");
  },100);
  //settimeout takes two parameters-one is a fn. which tells what to do-2nd is after what what time gap it has to do it
}
//detecting button press
var c=document.querySelectorAll(".drum").length;
for(var i=0;i<c;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        var buttoninnerhtml=this.innerHTML;
        makesound(buttoninnerhtml);
        buttonanimation(buttoninnerhtml)
    }
    );//adddeventlistener takes 2 inputs,first one is what even it should listen to and second is what it should do as a reaction to that event 
}
//this was for clicking the buttons and seeing that on clicking,something is happening through the function handleclick
//keyboard event listeners
//deprecated keypress was for characters while keydown is for all the keys and tells which key was pressed

//detecting keyboard press
document.addEventListener("keydown",function(event)//passing the event that triggered the key press
{
    makesound(event.key); 
    buttonanimation(event.key);  
}
);
//here,function(event) is a callback function 
//and addeventlistener is a higher order function as it takes another fn. as an input which gets called back then the keydown event occurs
