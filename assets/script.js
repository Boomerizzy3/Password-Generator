var password = ["a", "B", 1, "%", "a", "B", "c", "D", "e", "F", "g", "H", "i", "J", "k", "L", "m", "N", "o", "P", "q", "R", "s", "T", "u", "V", "w", "X", "y", "Z", "A", "b", "C", "d", "E", "f", "G", "h", "I", "j", "K", "l", "M", "n", "O", "p", "Q", "r", "S", "t", "U", "v", "W", "x", "Y", "z", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "!", "@", "#", "$", "%", "&", "*", "^", "(", ")", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "!", "@", "#", "$", "%", "&", "*", "^", "(", ")", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "!", "@", "#", "$", "%", "&", "*", "^", "(", ")", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "!", "@",];
var passwordlength = 10
var lowercase = false
var uppercase = true
var numbers = true
var sepcialchar = true

console.log(password.length);

function generate() {
  password.length = passwordlength
  console.log(password);
  if (lowercase = false) {
    newpassword = password.map(element => {
      return element.toUpperCase();
    })
  }
  for (let i = password.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * i)
    let k = password[i]
    password[i] = password[j]
    password[j] = k
  }
  console.log(password);
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