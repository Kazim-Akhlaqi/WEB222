/*****************************
* Task 5
*****************************/

// A largerNUM function using Declaration approach:
function largerNum (num1, num2) { 

  if (num1 > num2) {
   return num1;
} else {
    return num2;
}
}

// B largerNUM function using Expression approach:
var greaterNum = function (num1, num2) { 
  if (num1 > num2) {
    return num1;
} else {
    return num2;
}
};

// C Call functions "lagerNum" and "greterNum" with different parameters:
console.log("The larger number of 1 and 2 is " + largerNum(1,2) + ".");
console.log("The larger number of 3 and 4 is " + largerNum(3,4) + ".");

console.log("The larger number of 5 and 6 is " + greaterNum(5,6) + ".");
console.log("The larger number of 7 and 8 is " + greaterNum(7,8) + ".");

/*****************************
* Task 6
*****************************/

function Evaluator(){
    var sum = 0;
    var average = 0;
    for (var i=0; i<arguments.length; i++){
        sum += arguments[i];
    }
    average = sum / arguments.length;
    
    if (average >= 50){
        return true;
    } else {
        return false;
    }
}
console.log("Average, greater than or equal to 50: " + Evaluator(20,30,1));
console.log("Average, greater than or equal to 50: " + Evaluator(20,30,100,100));





