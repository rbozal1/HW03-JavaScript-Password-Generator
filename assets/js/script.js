// Assignment Code
document.querySelector("#generate").addEventListener("click", writePassword);

// set possible password values

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

//set variables for a later use
var values = "";
var randomPassword = "";
// function to generate a new randomly selected  password based on user input for different character types
function generatePassword() {
var passwordLength = (prompt("How many characters would you like to use for your password?"));
  //loop through the requirements of the password length
  while(passwordLength <= 7 || passwordLength >= 129) {
    alert("Password is invalid! Must be between 8 to 128 characters.Please try again");
    var passwordLength = (prompt("How many characters would you like to use for your password?"));
  } 
    
    alert("Your password will consist" + " " + passwordLength + " " + "characters");
  
// confirm whether the user wants to use special characters
var confirmSpecialChar = confirm("Would you like to use special characters?");
// confirm whether the user wants to use lowercase characters
var confirmNumeriChar = confirm("Would you like to use lower case characters ?");
// confirm whether the user wants to use uppercase characters    
var confirmLowerChar = confirm("Would you like to use upper case characters ?");
// confirm whether the user wants to use numeric characters
var confirmUpperChar = confirm("Would you like to use numeric characters ?"); 

while(confirmUpperChar === false && confirmLowerChar === false && confirmSpecialChar === false && confirmNumeriChar === false) {
alert("You must choose at least one parameter!");
var confirmSpecialChar = confirm("Would you like to use special characters?");
var confirmNumeriChar = confirm("Would you like to use lower case characters?");    
var confirmLowerChar = confirm("Would you like to use upper case characters?");
var confirmUpperChar = confirm("Would you like to use numeric characters?"); 
} 

//use the pre initialized var values to dynamically create the password based on user array choices
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

// console.log(values)

//loops through values selecting random characters for creating a password and displaying it on the page
for(var i = 0; i < passwordLength; i++) {
  randomPassword += values.charAt(Math.floor(Math.random() * values.length)
  );
}
return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

