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
      
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
  
   return splitStr.join(' '); 

  
    
    
}

function sumOfNumbers(arrayOfNumbers) {
    
    var sum=0;
    
    for(var i in arrayOfNumbers){
        
        sum+=arrayOfNumbers[i];
    }
    return sum;

}

function uniqueElements(array1, array2) {

    
    var array3=[];
    var same=false; 
    
    for(var i in array1){
        same=false;
        
        for (var j in array2) {
            if(array1[i] === array2[j]) {   
                same=true;
            }
            
        }
    }
    
    
    return array3;


}

function isPalindrome(inputString) {
    
    var re = /[^A-Za-z0-9]/g
    
    var lowRegStr = inputString.toLowerCase().replace(re, '');
     
        console.log(lowRegStr);
    
    var reverseStr = lowRegStr.split('').reverse().join(''); 
     
    return reverseStr===lowRegStr;

    
}

function wrapCharacter(inputString) {
    
    var newStr="";
    
    console.log('inputString', inputString);
    
      for(var i =0; i<inputString.length; i++){
        
          
         
         
        if(i===0){
           newStr+=inputString[i];
        }
        
        else if(i%40===0){
            
            
            console.log("consol:",inputString[i])
            
            if(inputString[i]!=" "){
            newStr+=inputString[i];
            
            
            }
            newStr+='\n';
            
        }
        else{
          newStr+=inputString[i];
        }
        
   
        
    }
    console.log("newstr", newStr)
        
    return newStr;

}




function wrapWord(inputString) {
    
     var newStr="";
     
     var wrap= "";
     
    
    
      for(var i =0; i<inputString.length; i++){
        
        if(i===0){
           wrap+=inputString[i];
        }
        
        else if(i%40===0){
            
            if(wrap.length<=40){
                newStr+= wrap;
                wrap= "";
                
            }
            
            else if(i<41){
                newStr += wrap;
                wrap= "";
                
            }
            
            else{
                newStr+="\n"+wrap;
                wrap="";
            }
            
            
            if(inputString[i]!=" "){
            newStr+=inputString[i];
            
            }
            newStr+='\n';
            
        }
        else{
          wrap +=inputString[i];
        }
        
   
        
    }
    console.log("newstr", newStr)
        
    return newStr;

}
//     var str="";
//     var wrap="";
    
//     for(var i=0 ; i < inputString.length; i++){
        
        
        
//         if(inputString[i]!= " "){
//             wrap += inputString[i];
            
//             if(wrap.length===39){
//                 str += "\n";
                
//                 str += wrap;
//                 wrap=""
                
//                 str += "\n";
//             }
            
//         }else{
//             str+= wrap+ " ";
            
//             wrap="";
//         }
        
// 'the increased productivity fostered by a friendly environment and quality tools is essential to meet ever increasing demands for '
// 'the increased productivity fostered by a\nfriendly environment and quality tools\nis essential to meet ever increasing\ndemands for software.'      
        
//     }
//         console.log(str);
    
//     return str;
    
    
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
