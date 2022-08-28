var lowerpassword = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f"];
var upperpassword = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", ", Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F"];
var numberpassword = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8];
var specialpassword = [ "!", "@", "#", "$", "%", "&", "*", "^", "(", ")", "!", "@", "#", "$", "%", "&", "*", "^", "(", ")", "!", "@", "#", "$", "%", "&", "*", "^", "(", ")", "!", "@", "#", "$", "%", "&", "*", "^", "(", ")", "!", "@", "#", "$", "%", "&", "*", "^", "(", ")", "!", "@", "#", "$", "%", "&", "*", "^", "(", ")", "!", "@", "#", "$", "%", "&", "*", "^", "(", ")", "!", "@", "#", "$", "%", "&", "*", "^", "(", ")", "!", "@", "#", "$", "%", "&", "*", "^", "(", ")", "!", "@", "#", "$", "%", "&", "*", "^", "(", ")", "!", "@", "#", "$", "%", "&", "*", "^", "(", ")", "!","$", "%", "&", "*", "^", "(", ")", "!", "@", "#", "$", "%", "&", "*", "^", "(", ")"];
var passwordlength = 10
var lowercase = true
var uppercase = true
var numbers = true
var specialchar = true

function paramaters() {
  var promptlength = prompt("Please enter how long you want your password to be.");
  console.log(promptlength);
}

function generate() {
  if (lowercase == false) {
    lowerpassword.splice(0, 128,);
  }
  if (uppercase == false) {
    upperpassword.splice(0, 128,);
  }
  if (numbers == false) {
    numberpassword.splice(0, 128,);
  }
  if (specialchar == false) {
    specialpassword.splice(0, 128,);
  }
  var newpassword = lowerpassword.concat(upperpassword, numberpassword, specialpassword);
  for (let i = newpassword.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * i)
    let k = newpassword[i]
    newpassword[i] = newpassword[j]
    newpassword[j] = k
  }
  
  newpassword.length = passwordlength;

  if (lowercase == true) {
    newpassword.splice(0, 1, "a");
  }
  if (uppercase == true) {
    newpassword.splice(2, 1, "A");
  }
  if (numbers == true) {
    newpassword.splice(4, 1, 1);
  }
  if (specialchar == true) {
    newpassword.splice(6, 1, "%");
  }

  console.log(newpassword);
}










/*
// Assignment code here


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
*/