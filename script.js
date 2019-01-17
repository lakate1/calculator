 /* Variable numbers for numbered buttons*/
 var oneBtn = document.getElementById('calc-one');
 var twoBtn = document.getElementById('calc-two');
 var threeBtn = document.getElementById('calc-three');
 var fourBtn = document.getElementById('calc-four');
 var fiveBtn = document.getElementById('calc-five');
 var sixBtn = document.getElementById('calc-six');
 var sevenBtn = document.getElementById('calc-seven');
 var eightBtn = document.getElementById('calc-eight');
 var nineBtn = document.getElementById('calc-nine');
 var zeroBtn = document.getElementById('calc-zero');
 
 var decimalBtn = document.getElementById('calc-decimal');
 var clearBtn = document.getElementById('calc-clear');
 var backspaceBtn = document.getElementById('calc-backspace');
 var displayValElement = document.getElementById('calc-display');
 
 
 var displayVal = '0'; 
 var evalStringArray = []; 
 
 var calcNumBtns = document.getElementsByClassName('calc-num');
 var calcOperatorBtns = document.getElementsByClassName('calc-operator');
 
 var updateDisplayVal = function(clickObj) { 
     var btnText = clickObj.target.innerText;
     if(displayVal === '0'){
         displayVal = '';
     }
 
     displayVal += btnText;
     displayValElement.innerText = displayVal;
 }
 
 for(var i=0; i < calcNumBtns.length; i++) {
     calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
 }

 clearBtn.onclick = () => {
     displayVal = "0";
     pendingVal = undefined;
     evalStringArray = [];
     displayValElement.innerHTMl = displayVal;
 }
 backspaceBtn.onclick = () => {
     let lengthOfDisplayVal = displayVal.length;
     displayVal = displayVal.slice(0, lengthOfDisplayVal -1);
     displayValElement.innerHTMl = displayVal;
 }