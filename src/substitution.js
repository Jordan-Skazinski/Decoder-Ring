// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  
  function substitution(input, alphabet, encode = true) {
    //let alp = 
    // your solution code here
    // if no alphabet is entered return false
    if(!alphabet) return false
    //turns the alphabet into an arry with the characters seperated
    let splitTheAlp = alphabet.split("")
    //result array for end
    let result = []
    //checks for if any character in the splitTheAlp array is repeated
    let duplicateChecker = splitTheAlp.some((letterIter, index, currrentArray)=>{
      return currrentArray.lastIndexOf(letterIter) !=index
    })//end of duplicateChecket
    //if their was a duplicate or the given alphabet is not 26 characters this returns false
    if(duplicateChecker || splitTheAlp.length !== 26) return false
    //makes sure theirs no capital letters to mess me up
    let lowerCaseInput = input.toLowerCase()
    //an array of arrays with pairs of the actual alphabet with the new one.
    let alphabetArray = [["a",alphabet[0]], ["b",alphabet[1]], ["c",alphabet[2]], ["d",alphabet[3]], ["e",alphabet[4]], ["f",alphabet[5]], ["g",alphabet[6]], ["h",alphabet[7]], ["i",alphabet[8]], ["j",alphabet[9]], ["k",alphabet[10]], ["l",alphabet[11]], ["m",alphabet[12]], ["n",alphabet[13]], ["o",alphabet[14]], ["p",alphabet[15]], ["q",alphabet[16]], ["r",alphabet[17]], ["s",alphabet[18]], ["t",alphabet[19]], ["u",alphabet[20]], ["v",alphabet[21]], ["w",alphabet[22]], ["x",alphabet[23]], ["y",alphabet[24]], ["z",alphabet[25]]]
    //if we want to decode
    if(!encode){
      //loops through the input array made earlier
      for(let i =0; i < lowerCaseInput.length; i++) {
        //this is jjust so i dont have to keep writing the [i] and for readability
        let individualCharacter = lowerCaseInput[i]
        //console.log(individualCharacter)
          if(individualCharacter === " "){result.push(individualCharacter)}
        //now we loop through the created alpabetArray
          for(let j = 0; j < alphabetArray.length; j++){
            //this will match the current character with the character in the 2nd slot of the arry, which for the decoder is the special alphabet character
            if(individualCharacter === alphabetArray[j][1]){
              //it will then push the first character of that spacific array into the result array
            result.push(alphabetArray[j][0])
            
          }

          }
      }
      //returns the result array and transforms it into a string
      return result.join("")
    }//end of !encode
    // for the encode section I just copy pasted the decode section. the only diffrence is line 58 and 59 I fliped what parts of the arry they were accessing
    for(let i =0; i < lowerCaseInput.length; i++) {
      let individualCharacter = lowerCaseInput[i]
      
     
        if(individualCharacter === " "){result.push(individualCharacter)}
      
        for(let j = 0; j < alphabetArray.length; j++){
          if(individualCharacter === alphabetArray[j][0]){
          result.push(alphabetArray[j][1])
          //console.log(alphabetArray[j][0])
        }else{continue}
        }
    }
   return result.join("")
  }//end of substitution function

  return {
    substitution,
  };//end of return sub
})();//end of substitutionModule

module.exports = { substitution: substitutionModule.substitution };
