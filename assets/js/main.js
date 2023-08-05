var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 50;
var backspace = false;

var outputElem = document.getElementById("demo"); // get element when page loads
function typeWriter() {
  outputElem.textContent = txt.substring(0, i);

  if (i > txt.length) backspace = true;
  if (i == 0) backspace = false;
  i = i + (backspace ? -1 : 1);
  setTimeout(typeWriter, speed);
}