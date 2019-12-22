// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");



// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
 
}
// BONUS
function copyToClipboard() {
   
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
copyBtn.addEventListener("click", copyToClipboard);

// Generate password

function generatePassword () {
  
  var userLength = prompt("What should be a length of generated password? Please enter a number below: ");


// Checking the length

while (userLength < 8 || userLength >128) {
  alert("Please enter a length that is between 8 and 128 characters");
  var userLength = prompt("What should be a length of generated password? Please enter a number ");
}

alert("Your password will be " + userLength + " characters length.");


 // Checking the character type

var userCriteria = {
  specialCharacters :["!","#", "$", "%", "&","(",")","*","+","-", "/",":", ";","<","=", ">","?","@", "[","]","^","{","|","}","~"],
  numericCharacters : [0,1,2,3,4,5,6,7,8,9],
  lowercaseCharacters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  uppercaseCharacters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
}


var userSpecialCharacters = confirm("Should the generated password include any Special characters ?");
var userNumericCharacters = confirm("Should the generated password include any Numeric characters ?");
var userLowercaseCharacters = confirm("Should the generated password include any Lowercase characters?");
var userUppercaseCharacters = confirm("Should the generated password include any Uppercase characters ?");



 if (userSpecialCharacters === false && userNumericCharacters === false && userLowercaseCharacters === false && userUppercaseCharacters === false){
   alert("At least one character type should be selected.")
 }

//  Generating password

  var password  = [];

  for (i=0; i<userLength; i++){
    
    if (userSpecialCharacters === true){

     var res = userCriteria.specialCharacters[Math.floor(Math.random() * userCriteria.specialCharacters.length)];
       password.push(res); 
    }
    if (userNumericCharacters === true){

      var res =   userCriteria.numericCharacters[Math.floor(Math.random() * userCriteria.numericCharacters.length)];
      password.push(res);
    }
      
    if (userLowercaseCharacters === true){

      var res =   userCriteria.lowercaseCharacters[Math.floor(Math.random() * userCriteria.lowercaseCharacters.length)];
      password.push(res);
    }

    if (userUppercaseCharacters === true){

      var res =   userCriteria.uppercaseCharacters[Math.floor(Math.random() * userCriteria.uppercaseCharacters.length)];
      password.push(res);
    }
   
  }

  console.log("password", password);

 
  return password.join("").slice(0,userLength);

}


	