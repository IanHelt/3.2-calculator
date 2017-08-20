(function(){
'use strict';

  var inputs = document.querySelector(".display");
  var firstNum = [];
  var secondNum = [];
  var operands = [];
  var decimalCount = [];
  var isPositive = true;
  var result;
  var maxLength = 13;

  document.body.addEventListener("click", function pushButton(event){

    if (event.target.className == "number" && inputs.innerText.length < 13){
      if (inputs.textContent == result && firstNum[0] == result){
        inputs.textContent = null;
        firstNum.splice(0);
      };
      if (operands[0] == null) {
        inputs.textContent += event.target.value;
        firstNum.push(event.target.value);
      }
      else{
        inputs.textContent += event.target.value;
        secondNum.push(event.target.value);
      };
    };

    if (event.target.className == "decimal" && inputs.innerText.length < 13){
      if (decimalCount.length == 1){
        return;
      }else if(operands[0] == null) {
        firstNum.push('.');
        inputs.textContent += event.target.value;
      }else{
        inputs.textContent += event.target.value;
        secondNum.push(event.target.value);
      }
    };

    if (event.target.className == "operand"){
      if (operands.length >= 1){
        doMath();
        operands.splice(0, 1);
        firstNum.splice(0);
        secondNum.splice(0);
        firstNum.push(result);
        operands.push(event.target.value);
        inputs.textContent = result;
      }else{
      operands.push(event.target.value);
      inputs.textContent = null;
      }
    };
    if (event.target.className == "equalsign"){
      doMath();
      operands.splice(0);
      firstNum.splice(0);
      secondNum.splice(0);
      firstNum.push(result);
      inputs.textContent = result;
    };
    if (event.target.className == "clear"){
      firstNum.splice(0);
      secondNum.splice(0);
      operands.splice(0);
      inputs.textContent = null;
      result = null;
    };
    if (event.target.className == "posneg"){

    }
    console.log(operands);
    console.log(firstNum);
    console.log(secondNum);
  });


  function doMath(){
    if ((firstNum[0] == '.' || firstNum[0] != NaN) && (secondNum[0] == '.' || secondNum[0] != NaN)
      && (firstNum[(firstNum.length - 1)] != '.') && (secondNum[(secondNum.length - 1)] != '.')){

      let first = firstNum.join('');
      first = parseInt(first);
      let second = secondNum.join('');
      second = parseInt(second);

      switch (operands[0]) {
     case "+":
       result = first + second;
       break;

     case "-":
       result = (first - second);
       break;

     case "*":
       result = (first * second);
       break;

     case "÷":
       result = (first / second);
       break;

       return result;
    }
  }else{
    inputs.textContent = 'Invalid entry';
    }
  };




})();
