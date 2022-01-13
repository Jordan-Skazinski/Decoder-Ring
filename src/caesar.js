// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
// creates a empty string for the end return
  let result = ""
//makes sure there are no capital letters to mess me up
  input = input.toLowerCase()
  //tests if the shift is more then 24 or less then -24 then returns false if eather
  if(shift === 0 || shift > 24 || shift < -24) return false

  //if the ment to decode just times the shift by -1 to revers its effect
    if (encode === false) shift *= -1
    //loop through input 
  for(let i = 0; i < input.length; i++){
    //if the character is not a lower case alphabet letter
    if(input[i].charCodeAt() < 97 || input[i].charCodeAt() > 122) {
      //then add it to the result string
      result += input[i]
      continue
    }
    //sets the letter to the charcode plus the shift code to get the shifted letter
    let charCode = input[i].charCodeAt() + shift
    //if the letter would hit the end of tthe alphabet go back to the start of the alphabet
    if(charCode > 122) {
      charCode -= 26
    }
    //the same but for the reverse
    if(charCode < 97){
      charCode += 26
    }
    //turns the letter back into a letter from charCode number
    let letterFromChar = String.fromCharCode(charCode)
    //adds the letter to the result string
    result += letterFromChar

  }
  //returns the result string.
  return result
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
