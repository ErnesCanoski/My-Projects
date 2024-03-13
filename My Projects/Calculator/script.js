//console.log("connected");
let displayText = document.getElementById('display-text');
let buttons = document.getElementById('buttons');
let buttonsRow1 = document.getElementById('buttons-row-1');
let buttonsRow2 = document.getElementById('buttons-row-2');
let button1 = document.getElementById('button-1');
let button2 = document.getElementById('button-2');
let button3 = document.getElementById('button-3');
let button4 = document.getElementById('button-4');
let button5 = document.getElementById('button-5');
let button6 = document.getElementById('button-6');
let button7 = document.getElementById('button-7');
let button8 = document.getElementById('button-8');
let button9 = document.getElementById('button-9');
let button0 = document.getElementById('button-0');
let buttonAdd = document.getElementById('button-add');
let buttonSubtract = document.getElementById('button-subtract');
let buttonMultiply = document.getElementById('button-multiply');
let buttonDivide = document.getElementById('button-divide');
let buttonEquals = document.getElementById('button-equals');
let buttonDecimal = document.getElementById('button-decimal');
let buttonReset = document.getElementById('button-reset');
let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';
button1.addEventListener('click', function() {
  displayText.innerHTML += '1';
});
button2.addEventListener('click', function() {
  displayText.innerHTML += '2';
});
button3.addEventListener('click', function() {
  displayText.innerHTML += '3';
});
button4.addEventListener('click', function() {
  displayText.innerHTML += '4';
});
button5.addEventListener('click', function() {
  displayText.innerHTML += '5';
});
button6.addEventListener('click', function() {
  displayText.innerHTML += '6';
});
button7.addEventListener('click', function() {
  displayText.innerHTML += '7';
});
button8.addEventListener('click', function() {
  displayText.innerHTML += '8';
});
button9.addEventListener('click', function() {
  displayText.innerHTML += '9';
});
button0.addEventListener('click', function() {
  displayText.innerHTML += '0';
});
buttonAdd.addEventListener('click', function() {
  firstNumber = displayText.innerHTML;
  operator = '+';
  displayText.innerHTML = '';
});
buttonSubtract.addEventListener('click', function() {
  firstNumber = displayText.innerHTML;
  operator = '-';
  displayText.innerHTML = '';
});
buttonMultiply.addEventListener('click', function() {
  firstNumber = displayText.innerHTML;
  operator = '*';
  displayText.innerHTML = '';
});
buttonDivide.addEventListener('click', function() {
  firstNumber = displayText.innerHTML;
  operator = '/';
  displayText.innerHTML = '';
});
buttonEquals.addEventListener('click', function() {
  secondNumber = displayText.innerHTML;
  if (operator === '+') {
    result = parseInt(firstNumber) + parseInt(secondNumber);
  } else if (operator === '-') {
    result = parseInt(firstNumber) - parseInt(secondNumber);
  } else if (operator === '*') {
    result = parseInt(firstNumber) * parseInt(secondNumber);
  } else if (operator === '/') {
    result = parseInt(firstNumber) / parseInt(secondNumber);
  }
  displayText.innerHTML = result;
});
buttonDecimal.addEventListener('click', function() {
  displayText.innerHTML += '.';
});
buttonReset.addEventListener('click', function() {
  displayText.innerHTML = '';
});



