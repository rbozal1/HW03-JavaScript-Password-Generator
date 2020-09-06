// Assignment Code
document.querySelector("#generate").addEventListener("click", writePassword);

//possible password values
// array of special characters 
var specialChar = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'
];
// array of uppercase characters to be used in password
var upperCasedChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// Array of lowercase characters to be included in password
var lowerCasedChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
  'o','p','q','r','s','t','u','v','w','x','y','z'];
//array of numeric characters
var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// variable declaration

var passwordLength = "";
var confirmSpecialChar = "";
var confirmLowerChar = "";
var confirmUpperChar = "";
var confirmNumeriChar = "";

function generatePassword() {
var passwordLength = (prompt("How many characters would you like to use for your password?"));
  //check if it meets the condition
  while(passwordLength <= 7 || passwordLength >= 129) {
    alert("Password is invalid! Must be between 8 to 128 characters.Please try again");
    var passwordLength = (prompt("How many characters would you like to use for your password?"));
  } 
    
    alert("Your password will consist" + " " + passwordLength + " " + "characters");
  

var confirmSpecialChar = confirm("Would you like to use special characters?");
var confirmNumeriChar = confirm("Would you like to use lower case characters ?");    
var confirmLowerChar = confirm("Would you like to use upper case characters ?");
var confirmUpperChar = confirm("Would you like to use numeric characters ?"); 

while(confirmUpperChar === false && confirmLowerChar === false && confirmSpecialChar === false && confirmNumeriChar === false) {
alert("You must choose at least one parameter!");
var confirmSpecialChar = confirm("Would you like to use special characters?");
var confirmNumeriChar = confirm("Would you like to use lower case characters?");    
var confirmLowerChar = confirm("Would you like to use upper case characters?");
var confirmUpperChar = confirm("Would you like to use numeric characters?"); 
} 


var values = [
  // specialChar,
  // upperCasedChar,
  // lowerCasedChar,
  // numericChar
]

if (confirmSpecialChar) {
  values = values.concat(specialChar)
}

if (confirmUpperChar) {
  values = values.concat(upperCasedChar)
}

if (confirmLowerChar) {
 values = values.concat(lowerCasedChar)
}

if (confirmNumeriChar) {
  values = values.concat(numericChar)
}
console.log(values)

var RandomPassword = ""

for(var i = 0; i < passwordLength; i++) {
  RandomPassword = RandomPassword + values[Math.floor(Math.random() * values.length)];
}
return RandomPassword;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

