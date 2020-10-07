// Capital letters in array 26
var capitalLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// Lowercase letters in array 26
var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// Special characters in array
var specialCharacters = ["~","`","!","@","#","$","%","^","&","*","(",")","<",">","/","\\","?",".",",","{","}","\[","\]","+","=","-","_",";",":","'","|"];
// Numbers in array 10
var numbers = [0,1,2,3,4,5,6,7,8,9];

// Used parseInt function to turn string into number and prompted user for password length
var userLength = parseInt(prompt("Enter password length. Must be between 1-128 characters"));

// Recalls user to re-enter password length if it does not meet perameters (creates while loop unitl condition is false)
// Used logical 'or' operator for password being within 8-128 requirement
while (isNaN(userLength)===true || userLength < 8 || 128 < userLength) {
  alert ("Invalid selection. Please enter a number between 8 and 128");
  userLength = parseInt (prompt("Enter password length"));
}

// Displays dialog boxes for user to input needed characters (uppercase, lowercase, special characcters, and numbers)
var confirmCapital= confirm("Would you like capital letters in your password?");

var confirmLowercase= confirm("Would you like lowercase letters in your password?");

var confirmSymbols= confirm("Would you like special characters in your password?");

var confirmNumbers= confirm("Would you like numbers in your password?");

// another while statement to ensure user is selecting at least one character option
while (!confirmCapital && !confirmLowercase && !confirmSymbols && !confirmNumbers) {
  alert ("Select at least one of the character options");
  var confirmCapital= confirm("Would you like capital letters in your password?");
  var confirmLowercase= confirm("Would you like lowercase letters in your password?");
  var confirmSymbols= confirm("Would you like special characters in your password?");
  var confirmNumbers= confirm("Would you like numbers in your password?");
}

// Alert box, indicating to generate password
alert("Select the red 'Generate Password' button");

// generate button variable
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var result = "";

  // while loop statement selecting random characters from each array selected
  while (result.length !== userLength) {

    if (confirmCapital === true && result.length !== userLength) {
      result = result + capitalLetters[Math.floor(Math.random()*26)]
    }

    if (confirmLowercase === true && result.length !== userLength) {
      result = result + lowercaseLetters[Math.floor(Math.random()*26)]
    }

    if (confirmSymbols === true && result.length !== userLength) {
      result = result + specialCharacters[Math.floor(Math.random()*26)]
    }

    if (confirmNumbers === true && result.length !== userLength) {
      result = result + numbers[Math.floor(Math.random()*10)]
    }
  }
  return result
}