console.log("test"); // works

var regex = /is/ // case sensitive
var Regex = /Great/i //  case in sensitive
var amountRegex = /e/g // g = global (counts amount of time the word/character is used in the string)

var string = "Regex is supposedly great"

var result = string.match(regex) // checks if the word "is" is located in the string variable
// possible with regular JS but as usual it's easier with jQuery

console.log(result);
