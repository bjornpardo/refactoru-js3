// var phonenum = prompt("What is your phone number?");
// if (phonenum.charAt(3)==="-" && phonenum.charAt(7)==="-"){
// 	console.log("Your phone number is valid"); 
// }
// else {
// 	console.log("Your phone number is not valid");
// }

// Bday

// var bday = prompt("What is your birthday?");
var isNumber = function(n) {
 return !isNaN(parseFloat(n)) && isFinite(n);
};
// var month = bday.substring(0,2);
// var day = bday.substring(3,5);
// var year = bday.substring(6,8);

// if ((bday.charAt(2,5)==="/" && isNumber(month, day, year)) && bday.length < 9) {
// 	console.log("Your birthday is valid"); 
// }

// else {
// 	console.log("Your birthday is not valid");
// }


// Class Example
// var weatherPatterns = ['sunny', 'cloudy', 'snowy'];

// for(var i=0; i<weatherPatterns.length; i++){
//   if (weatherPatterns[i] === 'sunny'){
//     alert("Go Outside");
//   }

//   else {
//     alert("Stay Inside");
//   }
// }

// Popular array methods

// Pop
// push
// shift 
// unshift
// slice
// join

// Postal Code

// var pcode = prompt("What is your postal code?");
// var pcode1 = pcode.substring(0,5);
// var pcode2 = pcode.substring(6,10);

// if ((pcode.length < 6 && isNumber(pcode)) || (pcode.length < 11 && isNumber(pcode1)) && (isNumber(pcode2) && pcode.charAt(5)==="-")){
// 	console.log ("You have a valid postal code.")
// }

// else {
// 	console.log ("You do not have a valid postal code.")
// }


// State Abbreviation

// var state = prompt("What is your state?");

// if (state.length===2 && (state===state.toUpperCase())){
// 	console.log ("This is a valid state");
// }

// else {
// 	console.log("Please enter a valid 2 character state code in all caps.")
// }

// Married

var married = prompt("Are you married?");

if (married ==="yes" || married ==="no"){
	console.log ("Thank you");
}

else {
	console.log("Please answer yes or no only.")
}



