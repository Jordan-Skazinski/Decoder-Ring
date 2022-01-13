// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

  function polybius(input, encode = true) {
  //console.log(input)
    //empty result string for putting the msg in
    let result = ""
    //counter to test for odd end length later
    let spaces = 0
    //for the decoder
     if (!encode){
      //loop through the msg for each character, i+2 so that we get pairs
      for(let i = 0; i < input.length; i = i + 2){
        //if the character is a space
        if(input[i] === " ") {
          //add to the space counter
          spaces ++
          //add to the result string
          result += input[i]
          //minus one from i since a space is only 1 character long
          i = i - 1
          continue }
          //switch takeing in the current number of the itteration and the next number to get pairs
        switch(`${input[i]}${input[i + 1]}`) {
          //a bunch of cases for each letter... 
        case "11":
          result += "a"
          break
        case "21":
          result += "b"
          break
        case "31":
          result += "c"
          break
        case "41":
          result += "d"
          break
        case "51":
          result += "e"
          break
        case "12":
          result += "f"
          break
        case "22":
          result += "g"
          break
        case "32":
          result += "h"
          break
        case "42":
          result += "j/i"
          break
        case "52":
          result += "k"
          break
        case "13":
          result += "l"
          break
        case "23":
          result += "m"
          break
        case "33":
          result += "n"
          break
        case "43":
          result += "o"
          break
        case "35":
          result += "p"
          break
        case "14":
          result += "q"
          break
        case "24":
          result += "r"
          break
        case "34":
          result += "s"
          break
        case "44":
          result += "t"
          break
        case "54":
          result += "u"
          break
        case "15":
          result += "v"
          break
        case "25":
          result += "w"
          break
        case "35":
          result += "x"
          break
        case "45":
          result += "y"
          break
        case "55":
          result += "z"
          break
      }
    //}
    }
    //tests to see if the length minuis the spaces is even, if not returns false
    if((input.length - spaces) % 2 !== 0 ){return false}
return result

     }// end of if 
     //makes sure all the characters are lowercase
     input = input.toLowerCase()
     //this does the same as the decoder except a little easier since its only i++
     for(let i = 0; i < input.length; i++){
      if(input[i].charCodeAt() < 97 || input[i].charCodeAt() > 122) {
        result += input[i]
        continue
      }
             
             switch(input[i]) {
              case "a":
                result += "11"
                break
              case "b":
                result += "21"
                break
              case "c":
                result += "31"
                break
              case "d":
                result += "41"
                break
              case "e":
                result += "51"
                break
              case "f":
                result += "12"
                break
              case "g":
                result += "22"
                break
              case "h":
                result += "32"
                break
              case "i":
                result += "42"
                break
              case "j":
                result += "42"
                break
              case "k":
                result += "52"
                break
              case "l":
                result += "13"
                break
              case "m":
                result += "23"
                break
              case "n":
                result += "33"
                break
              case "o":
                result += "43"
                break
              case "p":
                result += "53"
                break
              case "q":
                result += "14"
                break
              case "r":
                result += "24"
                break
              case "s":
                result += "34"
                break
              case "t":
                result += "44"
                break
              case "u":
                result += "54"
                break
              case "v":
                result += "15"
                break
              case "w":
                result += "25"
                break
              case "x":
                result += "35"
                break
              case "y":
                result += "45"
                break
              case "z":
                result += "55"
                break
            }
       }
    return result
}
  return {
    polybius,
  };

})();



module.exports = { polybius: polybiusModule.polybius };

