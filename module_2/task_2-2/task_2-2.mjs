"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const originalExpression = "2 + 3 * 2 - 4 * 6";
const originalResult = 2 + 3 * 2 - 4 * 6;

const modifiedExpression = "2 + (3 * 2 - 4) * 6";
const modifiedResult = 2 + (3 * 2 - 4) * 6;

printOut("Original Expression: " + originalExpression + " = " + originalResult);
printOut("Modified Expression: " + modifiedExpression + " = " + modifiedResult);


printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
// Convert 25 metres and 34 centimetres to inches. An inch is 25.4 millimetres. Maximum 2 decimal places in the answer.
const meters = 25;
const centimeters = 34;
const mmInInch = 25.4;
const meterToMm = 1000;

const totalMillimeters = (meters * meterToMm) + centimeters * 10;
const answer = totalMillimeters / mmInInch;
const exactAnswer = answer.toFixed(2);
printOut("Svaret er " + exactAnswer);


printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
// Convert 3 days, 12 hours, 14 minutes, and 45 seconds to minutes. (Not allowed to use date objects). The task must be solved with primitives
const days = 3;
const hours = 12;
const minutes = 14;
const seconds = 45;

const minutesInDays = days * 24 * 60;
const minutesInHours = hours * 60;
const minutesInSeconds = seconds / 60;

const totalMinutes = minutesInDays + minutesInHours + minutes + minutesInSeconds;
printOut("Svaret er " + totalMinutes.toFixed(2));


printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
// Convert 6,322.52 minutes to days, hours, minutes, and seconds. (Not allowed to use date objects). The task must be solved with primitives.
const totalMinutes2 = 6322.52;

const days2 = Math.floor(totalMinutes2 / (24 * 60));
let remainingMinutes = totalMinutes2 % (24 * 60)

const hours2 = Math.floor(remainingMinutes / 60);
remainingMinutes = remainingMinutes % 60; 

const minutes2 = Math.floor(remainingMinutes);
const seconds2 = Math.round((remainingMinutes - minutes2) * 60);

printOut(" Svaret er " + days2 + " days, " + hours2 + " hours, " + minutes2 + " minutes, and " + seconds2 + " seconds.");


printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
// Convert 54 dollars to Norwegian kroner, and print the price for both.
const nokPerUsdRate = 76 / 8.6;
const usdPerNokRate = 8.6 / 76;

const usdAmount = 54;
const nokAmount = Math.round(usdAmount * nokPerUsdRate);

const nokAmountForConversion = 477;
const usdConvertedAmount = Math.round(nokAmountForConversion * usdPerNokRate);

printOut(usdAmount + " USD er " + nokAmount + " NOK.")
printOut(nokAmountForConversion + " NOK er " + usdConvertedAmount + " USD.");


printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
// Create a variable that contains the following text: "There is much between heaven and earth that we do not understand."
let text = "There is much between heaven and earth that we do not understand.";
printOut("Number of characters: " + text.length);
printOut("Character at position 19: " + text.charAt(19));
printOut("Characters from position 35: " + text.substring(35, 35 + 8));
printOut(" Index of 'earth': " + text.indexOf("earth"));


printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
// Comparison, print the values for the following expressions (evaluate whether the statements are true)
printOut("5 > 3 is " + (5>3));
printOut("7 >= 7 is " + (7 >= 7));
printOut("'a' > than 'b' is " + ("a" > "b"));
printOut("'1' < than 'a' is " + ("1" < "a"));
printOut("'2500' < 'abcd' is " + ("2500" < "abcd"));
printOut("'arne' = 'thomas' is " + ("arne" !== "thomas"));
printOut("(2 equals 5) is " + (2 === 5));
printOut("('abcd' is greater than 'bcd') is this statement false? " + ("abcd" > "bcd"));


printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
// Convert and print the following expressions
let text1 = "254";
let number1 = Number(text1);
printOut("Tekst '254' = " + number1);

let text2 = "57.23"
let number2 = parseFloat(text2);
printOut("Tekst '57.23' = " + number2);

let text3 = "25 kroner"
let number3 = parseInt(text3);
printOut("Tekst '25 kroner' = " + number3);


printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
// Create a variable "r" and randomly generate a number from 1 to 360 (1 >= r <= 360).
let r = Math.floor(Math.random() * 360) + 1;
printOut("R randomly generated: " + r);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
//Use modulus (%) to calculate how many weeks and days are in 131 days.
let totalDays = 131;
let weeks = Math.floor(totalDays / 7);
let days3 = totalDays % 7; 
printOut(weeks + " uker og " + days3 + "dager.");
