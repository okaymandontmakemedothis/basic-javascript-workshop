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

console.log(longestWord("The quick brown fox jumped over the lazy dog"));


function capitalize(inputString) {

}

function sumOfNumbers(arrayOfNumbers) {

}

function uniqueElements(array1, array2) {

}

function isPalindrome(inputString) {

}

function wrapCharacter(inputString) {

}

function wrapWord(inputString) {

}

function bubbleSort(arrayOfNumbers) {

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
