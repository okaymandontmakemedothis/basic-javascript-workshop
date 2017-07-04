function firstLetter(inputString) {

    if (inputString === undefined) {
        return undefined
    }
    else {
        return inputString[0];
    }

}



function lastLetter(inputString) {
    var input;

    if (inputString === undefined) {
        return undefined
    }
    else {
        input = inputString.length;
        return inputString[input - 1]
    }
}

function letterAtPosition(inputString, position) {

    if (inputString === undefined || position === undefined) {
        return undefined
    }
    else {
        return inputString[position];
    }

}

function addTwoNumbers(num1, num2) {
    if (num1 === undefined || num2 === undefined) {
        return undefined
    }
    else if (typeof num1 != "number" || typeof num2 != "number") {
        return undefined

    }
    else {

        return num1 + num2;
    }

}

function multiplyTwoNumbers(num1, num2) {
    if (num1 === undefined || num2 === undefined) {
        return undefined;
    }
    else if (typeof num1 != "number" || typeof num2 != "number") {
        return undefined;

    }
    else {

        return num1 * num2;
    }
}

function calculator(operation, num1, num2) {

    if(typeof num1 != "number" || typeof num2 != "number"){
        return undefined
    }else {

        switch (operation) {
            case "add":
                return num1 + num2;


            case "sub":
               return num1-num2;


            case "mult":
                return num1*num2;


            case "div":
                return num1/num2;

            default:
                return undefined;
        }


    }
}

function repeatString(inputString, numRepetitions) {

    var newString="";

    for(var i=0; i<numRepetitions; i++){
       newString= newString+inputString;
    }

    return newString;

}

function reverseString(inputString) {

    var newString="";
    for(var i = inputString.length-1; i>=0; i--){
        newString= newString+inputString[i];
    }
    return newString;


}


function longestWord(inputString) {



   var str = inputString.split(" ");
    var longest = 0;
    var word = "";
    if (inputString===""){

    word="";

    }else{
    for (var i = 0; i < str.length ; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    }
    return word;


}




function capitalize(inputString) {

    var splitStr = inputString.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       // You do not need to check if i is larger than splitStr length, as your for does that for you
       // Assign it back to the array
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
   }
   // Directly return the joined string
   return splitStr.join(' ');




}

function sumOfNumbers(arrayOfNumbers) {

}

function uniqueElements(array1, array2) {
  if (array1.constructor !== Array || array2.constructor !== Array)
    return undefined;
  return (
    array1.filter(function(x) {
      return array2.indexOf(x) == -1;
    })
    .concat(array2.filter(function(x) {
      return array1.indexOf(x) == -1;
    })
  ));
}

function isPalindrome(inputString) {
  let inputString1 = inputString.toLowerCase().replace(/[^a-z]/g, '')
  let inputString2 = inputString1.split('').reverse().join('');
  return inputString1 === inputString2;
}

function wrapCharacter(inputString) {

}

function wrapWord(inputString) {

}

function bubbleSort(a) {
  if (a.length > 0) {
    var swapped;
    do {
      swapped = false;
      for (var i=0; i < a.length-1; i++) {
          if (a[i] > a[i+1]) {
              var temp = a[i];
              a[i] = a[i+1];
              a[i+1] = temp;
              swapped = true;
          }
      }
    } while (swapped);
  }
  return a;
}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    firstLetter: firstLetter,
    lastLetter: lastLetter,
    letterAtPosition: letterAtPosition,
    addTwoNumbers: addTwoNumbers,
    multiplyTwoNumbers: multiplyTwoNumbers,
    calculator: calculator,
    repeatString: repeatString,
    reverseString: reverseString,
    longestWord: longestWord,
    capitalize: capitalize,
    sumOfNumbers: sumOfNumbers,
    uniqueElements: uniqueElements,
    isPalindrome: isPalindrome,
    wrapCharacter: wrapCharacter,
    wrapWord: wrapWord,
    bubbleSort: bubbleSort
};
