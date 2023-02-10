// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

//Prompts  
  var digits = prompt("how many digits do you want you password");
  var lower = confirm("Do you want lower case?");
  var upper = confirm("Do you want upper case?");
  var numeric = confirm("Do you want numeric characters?");
  var sym = confirm("Do you want symbol?");

  //requirements
  if (digits < 8 || digits > 128) {
    window.alert("yourpassword Must be between 8 and 128");
  }

  //library
  const alphabetlower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const alphabetupper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const specialchar = ["!", "@", "#", "$", "%", "^", "*"];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
  //If statement(filter)
  var passwordContainer = [];

  if (lower === true) {
    passwordContainer = passwordContainer.concat(alphabetlower);
  }
  if (upper === true) {
    passwordContainer = passwordContainer.concat(alphabetupper);
  }
  if (numeric === true) {
    passwordContainer = passwordContainer.concat(numbers);
  }
  if (sym === true) {
    passwordContainer = passwordContainer.concat(specialchar);
  }
  console.log(passwordContainer[4]);

  var password = [];
  //loop
  for (var i = 0; i < digits; i++) {
    var randomIndex = Math.floor(Math.random() * passwordContainer.length);
    password[i] = passwordContainer[randomIndex];
  }
 
  //logs
  console.log(password)
  console.log(digits, lower, upper, numeric, sym);

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
