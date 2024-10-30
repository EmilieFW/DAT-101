"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
function checkBusCatch(wakeUpTime) {
  let message ="";

if (wakeUpTime ===7) {
  message = "If I wake up at exactly 7 o'clock, I can catch the bus to school.";
}
else {
  message = "If I wake up at " + wakeUpTime + " o'clock, I cannot catch the bus to school. ";
}
printOut(message);
}

checkBusCatch(6);
checkBusCatch(7);
checkBusCatch(8);

printOut("--- Part 2 -------------------------------------------------------------------------------------------");
function checkTransport(wakeUpTime) {
  let message;

  if (wakeUpTime === 7) {
    message = "If I wake up at exactly 7 o'clock, I can take the bus to school.";
  } else {
    message = "If I wake up at " + wakeUpTime + " o'clock, I have to take the car to school.";
  }
  printOut(message);
}
checkTransport(6);
checkTransport(7);
checkTransport(8);



printOut("--- Part 3 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function checkTransport2(wakeUpTime) {
  let message;

  if (wakeUpTime ===7) {
    message = "If I wake up at exactly 7 o'clock, I can take the bus to school.";
  } else if (wakeUpTime ===8) {
    message = "If I wake up at exactly 8 o'clock, I can take the train to school.";
  } else {
    message = "If I wake up at " + wakeUpTime + " o'clock, I have to take the car to school";
  }
  printOut(message);
}
checkTransport2(6);
checkTransport2(7);
checkTransport2(8);
checkTransport2(9);


printOut("--- Part 4 ---------------------------------------------------------------------------------------------");
function checkSign(number) {
if (number > 0) {
  printOut("Positive");
} else {
  printOut("Negative");
}
}

checkSign(10);
checkSign(-5);
checkSign(0);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function checkSign2(number) {
  if (number > 0) {
    printOut("Positive");
  } else if (number < 0) {
    printOut("Negative");
  } else {
    printOut("Zero");
  }
}
checkSign2(10);
checkSign2(-5);
checkSign2(0);

printOut("--- Part 6 and 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let imageSize = Math.floor(Math.random() * 8) + 1;
printOut("Image Size:", imageSize, "MP");

let minimumSize = 4;
if (imageSize <= minimumSize) {
  printOut("Thank You");
} else {
  printOut("The image is too small");
}
if (imageSize >= 6) {
  printOut("Image is to large");
}

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList = ["January", "February", "March", "April", "Mai", "June", "July", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
console.log(monthName)
if (monthName.includes("r")) {
  printOut("Month is: " + monthName);
  printOut("You must take vitamin D");
} else {
  printOut("You don't need to take vitamin D");
}

printOut("--- Part 9 --------------------------------------------------------------------------------------------");
let daysInMonth;
switch (monthName) {
  case "January":
  case "March":
  case "May":
  case "July":
  case "August":
  case "October":
  case "December":
    daysInMonth = 31;
    break;
  case "April":
  case "June":
  case "September":
  case "November":
    daysInMonth = 30;
    break;
  case "February":
    daysInMonth = 28
    break;
}
printOut("The month of " + monthName + " has " + daysInMonth + " days.");


printOut("--- Part 10 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList1 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const noOfMonth2 = monthList1.length;
const monthName2 = [Math.floor(Math.random() * noOfMonth2)];

let status;

if (monthName2 === "March" || monthName2 ===  "May") {
  status = "The gallery is closed for refurbishment.";
} else if (monthName2 === "April") {
  status = "The gallery is temporarily open next door."
} else {
  status = "The gallery is open."
}
console.log("Month: " + monthName2);
console.log(status);
