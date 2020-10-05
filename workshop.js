function firstLetter(inputString) {
    if (inputString == undefined){
        return undefined
    }else{
        return inputString[0]
    }
}

function lastLetter(inputString) {
    if (inputString == undefined){
        return undefined
    }else{
        return inputString[inputString.length - 1]
    }
}

function letterAtPosition(inputString, position) {
    if (inputString == undefined){
        return undefined
    }else{
        return inputString[position]
    }
}

function addTwoNumbers(num1, num2) {
    if (isNaN(num1) && isNaN(num2)){
        return undefined
    }else{
        return num1 + num2
    }
}

function multiplyTwoNumbers(num1, num2) {
    if (isNaN(num1) && isNaN(num2)){
        return undefined
    }else{
        return num1 * num2
    }
}

function calculator(operation, num1, num2) {
    if(operation == "add"){
        return num1 + num2
    }else if(operation == "sub"){
        return num1 - num2
    }else if(operation == "mult"){
        return num1 * num2
    }else if(operation == "div"){
        return num1 / num2
    }else{
        return undefined
    }
}

function repeatString(inputString, numRepetitions) {
    if(numRepetitions == undefined || inputString == undefined){
        return undefined
    }else{
        if(numRepetitions <= 0){
            return ''
        }
        return inputString.repeat(numRepetitions)
    }
}

function reverseString(inputString) {
    let splitString = inputString.split("")
    let reverseArray = splitString.reverse()
    let joinArray = reverseArray.join("")
    return joinArray
}

function longestWord(inputString) {
    if(inputString == ''){
        return ''
    }else{
        let splitString = inputString.split(' ')
        let longestWord = ''
        for(let i = 0 ; i < splitString.length ; i++){
            if(splitString[i].length > longestWord.length){ // last one would warrant >= to override previous ones over >
                longestWord = splitString[i]
            }
        }
        return longestWord
    }
}

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