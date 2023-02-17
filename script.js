// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var length = Number(prompt("Enter the length of the password"));
  var password = "";
  var passwordChars = "";
  var password = "";

  // length validation
  if (!length || length < 8 || length > 128) {
    alert("Invalid length. Length must be between the range 8 and 128");
    return "";
  };

  //character validation
  var characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    special: "!@#$%^&*()",
  }

  // add criteria to select
  if (confirm("Click OK to include lowercase letters")) {
    passwordChars += characters.lowercase;
  }
  if (confirm("Click OK to include uppercase letters")) {
    passwordChars += characters.uppercase;
  }
  if (confirm("Click OK to include numbers")) {
    passwordChars += characters.numbers;
  }
  if (confirm("Click OK to include special characters")) {
    passwordChars += characters.special;
  }

  var passCharLength = passwordChars.length;

  // If no criteria is selected, return an empty
  if (passCharLength <= 0) 
  return "";

  // loops `length` times and pick a random char from passwordChars
  for (let i = 0; i < length; i++) {
    var randInt = Math.floor(Math.random() * passCharLength);
    password += passwordChars[randInt];
  }
  return password;
}

// password input
function writePassword() {
  var password = generatePassword();
  console.log (password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// event listener to generate button
generateBtn.addEventListener("click", writePassword);

