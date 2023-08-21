const currentUrl = window.location.href;
const textArray = currentUrl.split("/")
const word = textArray[textArray.length - 2]
const possibleText = "Meow"
const txt = 'Home/' + word;

var i = 0;
var speed = 100;
var payload = txt;
var backspace = false;
var completed = 0;

var outputElem = document.getElementById("typeWriter"); // get element when page loads

function typeWriter() {
  if (completed < 3){
    outputElem.textContent = payload.substring(0, i);
    if (i > payload.length){
      backspace = true;
      completed ++;
    }
    
    if (i == txt.length & payload == txt)speed = 5000;
    if (i == 1 & payload == possibleText)payload = txt;
    
    if (completed == 1 & i == 1)payload = possibleText;
  
  
    if (i == 0) backspace = false;
    i = i + (backspace ? -1 : 1);
    setTimeout(typeWriter, speed);
    if (i == txt.length-1 & payload == txt)speed =50;
  }
}