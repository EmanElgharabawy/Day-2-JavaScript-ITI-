let userAge;
// ask user to enter his age
while ((userAge = prompt(`Please Enter Your Age`)) !== null) {
  // while not equal null to handel user enter age

  // check age is positive number
  if (userAge > 0 && userAge !== isNaN) {
    document.write(`The Entered Age is ${userAge} \n \n`);

    // switch case to handel 5 cases of ages categories
    switch (true) {
      case userAge > 0 && userAge <= 10:
        document.write(`You are a Child ${userAge}`);
        break;
      case userAge >= 11 && userAge <= 18:
        document.write(`\n \n The user is a Teenager ${userAge}`);
        break;
      case userAge >= 19 && userAge <= 50:
        document.write(`\n The user is a Grown up ${userAge}`);
        break;
      default:
        document.write(`\n You are older ${userAge}`);
        break;
    }
    // End the loop after getting valid input
    break;

    // incase the user enter invalid age
  } else {
    alert(` Please enter a valid number`);
  }
}

if (userAge === null) {
  alert(`You canceled`);
}

//===============================================================================//

EX - 2;

let userString = prompt(`Please Enter string `);
var suma = 0;
var sume = 0;
var sumo = 0;
var sumu = 0;
var sumi = 0;
for (let i = 0; i < userString.length; i++) {
  userString.toLowerCase();
  if (userString[i] === `a`) suma++;
  if (userString[i] === `e`) sume++;
  if (userString[i] === `o`) sumo++;
  if (userString[i] === `u`) sumu++;
  if (userString[i] === `i`) sumi++;
}
document.write(
  `a = ${suma}  , e = ${sume} ,  o = ${sumo} ,  u = ${sumu} , i = ${sumi}`
);

//==================================================================================//

//  Ex - 3
//get current date
const customDate = new Date(2023, 11, 4, 20, 30, 0, 0); //

let currentdate = customDate.getHours();

document.write(
  `Your current Time ${
    currentdate > 12 ? currentdate - 12 + "  pm" : currentdate + "Am"
  }  `
);

//==================================================================================//

//Ex-4
// ask user to enter first num and second and third
let firstNum = prompt(`Please Enter First Number`);
let secondNum = prompt(`Please Enter Second Number`);
let ThirdNum = prompt(`Please Enter Third Number`);

// get the max number of the enter 3 numbers

let maxNum = Math.max(firstNum, secondNum, ThirdNum);

// print the max number
document.write(`The Max Number is `, maxNum);
