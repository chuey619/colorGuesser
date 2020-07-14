//------------------variables-------------------------------
// numbers of colors
var numColors = 6;
// colors array
var colors;
//correct color
var pickedColor;
//squares array
var squares = document.querySelectorAll('.square');
// rgb in title
var titleRGB = document.querySelector('#titleRGB')
// try again or correct
var messageDisplay = document.querySelector('#message');
//h1
var h1 = document.querySelector('h1');
// new colors
var resetButton = document.querySelector("#resetButton");

// mode buttons
var modeButtons = document.querySelectorAll('.mode');
// easy squares
var easySquares = document.querySelectorAll('.hideOnEasy');
//all buttons
var buttons = document.querySelectorAll('button');
//selected button
var selectedButton = document.querySelector('.selected')



//-------------functions-----------
// runs app
function init(){
  setUpModeListeners();
  setUpSquares();
  setUpResetButton();
  reset();
}
// set up button listeners
function setUpModeListeners(){
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener('click', function(){
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent === 'Easy' ? numColors = 3: numColors = 6;
      reset(numColors);
      })
    }
}
//initialize squares
function setUpSquares(){
  for(var i = 0; i < squares.length; i++){
    squares[i].addEventListener('click', function(){
      var clickedColor = this.style.backgroundColor;
    //happens when you win
      if(clickedColor === pickedColor){
        changeColor(clickedColor);
        messageDisplay.textContent = 'Correct';
        messageDisplay.style.color = pickedColor;
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again";
      
        for(var i = 0; i < buttons.length; i++){
          buttons[i].style.color = pickedColor;
        }
    //happens when youre wrong
        } else {
        this.style.backgroundColor = '#232323';
        messageDisplay.textContent = 'Try again';
        }
      });
    }
}
//set up reset button
function setUpResetButton(){
  resetButton.addEventListener('click', reset);
}
//sets color of squares
function changeColor(color){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}
//picks winning color
function pickColor(){
  randIdx = Math.floor(Math.random() * colors.length);
  return colors[randIdx];
}
// generates array of colors with singleColor()
function generateColors(numColors){
  arr = [];
  for(var i = 0; i < numColors; i++){
    arr.push(singleColor());
  }
  return arr;
}
// generates single color
function singleColor(){
  //red
  r = Math.floor(Math.random() * 256);
  //green
  g = Math.floor(Math.random() * 256);
  //blue
  b = Math.floor(Math.random() * 256);
  color = "rgb(" + r + ", " + g + ", " + b +")";
 
  return color;
}
// reset / pick new colors
function reset(){
if(numColors == 6){
  for(var i = 0; i < easySquares.length; i++){
    easySquares[i].style.display = 'block'; 
    }
  } else {
      for(var i = 0; i < easySquares.length; i++){
        easySquares[i].style.display = 'none';
    }
  }

  colors = generateColors(numColors);

  pickedColor = pickColor();

  titleRGB.textContent = pickedColor;

  h1.style.backgroundColor = "steelblue";

  messageDisplay.textContent = "";

  messageDisplay.style.color = "steelblue";

  resetButton.textContent = 'New Colors';

  selectedButton.style.backgroundColor = 'steelblue';

  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }
  for(var i = 0; i < buttons.length; i++){
    buttons[i].style.color = 'steelblue';
    buttons[i].style.backgroundColor = 'white';
  }
 }


//---------------------------------------


init();















