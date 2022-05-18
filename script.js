// ABSOLUTES ----------------
// Maximum and minimum lengths
const MIN_LEN = 8;
const MAX_LEN = 128;

const UPPER_CHARS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const LOWER_CHARS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const NUMERIC_CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const SPECIAL_CHARS = [')', '!', '@', '#', '$', '%', '^', '&', '*', '(', '-', '_', '+', '=',
  '`', '~', '[', ']', '{', '}', '|', '<', '>', '?', ';', ':',];
// ----------------------------

// quick function to clean up the code a little when getting a random number
function randInt(range) {
  return Math.floor(Math.random()* (range))
}

function generatePassword() {

  // empty password, we will add to it later
  let password = "";

  // prompt to get length of password
  let passwordLength = prompt("Enter desired number of characters ( Minimum of 8 | Maximum of 128 )");
  
  // if it meets the criteria, confirm which character types
  if (passwordLength >= MIN_LEN && passwordLength <= MAX_LEN) {

    // confirm character types, store as boolean variables
    let includeLowercase = confirm("Include lowercase letters? ( 'OK' for yes | 'Cancel' for no )");
    let includeUppercase = confirm("Include uppercase letters? ( 'OK' for yes | 'Cancel' for no )");
    let includeNumeric = confirm("Include numeric characters? ( 'OK' for yes | 'Cancel' for no )");
    let includeSpecialChar = confirm("Include special characters? ( 'OK' for yes | 'Cancel' for no )");

    // make a new array to store selected characters
    let characters = [];

    // concatenate character sets into blank array based on selections made
    if (includeLowercase) {
      characters = characters.concat(LOWER_CHARS);
    }
    if (includeUppercase) {
      characters = characters.concat(UPPER_CHARS);
    }
    if (includeNumeric) {
      characters = characters.concat(NUMERIC_CHARS);
    }
    if (includeSpecialChar) {
      characters = characters.concat(SPECIAL_CHARS);
    }

    // if no selections were made, tell user entries were invalid
    if (characters.length === 0) {
      alert("No characters selected. Please try again.")
    }

    // add a random character to the blank password one at a time until the desired length is achieved
    for (let i = 0; i < passwordLength; i++) {
      password = password + (characters[randInt(characters.length)])
    }

    // else tell user entry was invalid
  } else {
    alert("Invalid entry. Please try again.");
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
