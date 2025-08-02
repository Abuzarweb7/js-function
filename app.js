// Q1
// Write a function that takes two numbers and returns their sum.
// function sum(a ,b){
//     return a + b;
// }
// let result = sum(10,20);
// console.log(result);
//Q2
// Create a function that takes two numbers and returns the result of the first number
// minus the second.
// function minus(a,b){
//     return a - b;
// }
// let minusResult =minus(40,20);
// console.log(minusResult);
//Q3
// Write a function that multiplies two numbers and returns the result.
// function multiply(a,b){
//     return a * b;
// }
// let multiplyResult = multiply(10,5);
// console.log(multiplyResult);

//Q4
// Create a function that takes two numbers and returns the result of dividing the first by
// the second.
// function divide(a,b){
//     return a /b;
// }
// let divideResult =divide(200,50);
// console.log(divideResult);
// Q5
// Write a function that takes two numbers and returns the remainder when the first
// number is divided by the second.
// function remaider(a,b){
//     return a % b;
// }
// let remaniderResult = remaider(20,3);
// console.log(remaniderResult);
//Q6
// Write a function that checks if a number is positive. If it is, return "Positive",
// otherwise return "Not Positive".
// function abcd(number){
//     if(number > 0){
//         return "Positive";
//     }
//     else{
//         return "Not Positive";
//     }
// }
// console.log(abcd(10));
//Q7
// Create a function that checks if a number is negative. If it is, return "Negative", else
// return "Not Negative".
//  function add(num){
// if(num < 0){
//     return "Negative"
// }
// else{
//     return"Not Negative";
// }
//  }
//  console.log(add(-10));
//Q8
// Write a function that takes a number and returns "Even" if the number is even,
// otherwise "Odd".
// function isEvenorOdd(num){
//     if(num%2 === 0){
//         return "Even";
//     }
//     else{
//         return"Odd";
//     }
// }
// console.log(isEvenorOdd(2));
//Q9


// Write a function that takes two numbers and returns "Equal" if they are the same,
// otherwise "Not Equal".
// function isEqual(num1,num2){
// if(num1 === num2){
//     return"Equal"
// }
// else{
//     return "Not Equal";
// }
// }
// console.log(isEqual(20,20));

  //Q10
// Create a function that returns "Greater" if the first number is greater than the second,
// else return "Smaller".
// function isGreater(num1,num2){
//     if(num1 > num2){
//         return "Greater";
//     }
//     else{
//         return "Smaller";
//     }
// }
// console.log(isGreater(20,10));



// /Q11
// Write a function that takes a first name and last name, and returns the full name.
// function userName(fullName, lastName){
//     return "Hello!" +  fullName + " " + lastName 
// }
// console.log(userName("Abu zar" , "M shahi"));



// Q12
// Write a function that takes a first name and last name, and returns the full name.
// function userResult (marks){
//     if(marks >=40){
//         return "Pass";
//     }
//     else{
//         return "Fail"
//     }
// }
// console.log(userResult(50));
//Q13 
// Write a function that takes an age and returns "Teenager" if the age is between 13
// and 19, otherwise return "Not a Teenager".
// function isTeenager(age){
//     if(age >=13 && age<=19){
//         return "Teenager"
//     }
//     else {
//         return "Not a teenager";
//     }
// }
// console.log(isTeenager(19));
// Q14
// Write a function that takes a name and returns a greeting like "Hello, Ahmed!".
// function greetUser(name){
//     return "Hello " + name + "!";
// }
// console.log(greetUser("Ali"));
// console.log(greetUser("faiz"));
// Q15
// Create a function that takes age and returns "Eligible" if age is 18 or above,
// otherwise "Not Eligible".
// function checkEligible(age){
// if(age>=18){
//     return "Eligible";
// }
// else{
//     return "Not Eligible";
// }
// }
// console.log(checkEligible(20));
//Q16
// Write a function that returns the absolute value of a number (no Math.abs, use if-else
// only).

// function absultevalnum(num){
//   if(num<0){
//     return -num;
//   }
//   else{
//     return num;
//   }
// }
// console.log(absultevalnum(-10));;












//Q17
// Write a function that takes a temperature and returns:
// function temprature(temp){
//     if(temp>=30){
//         return "Hot";
//     }
//     else if(temp<=10){
// return "Cold";
//     }
//     else{
//         return "Normal";
//     }
// }
// console.log(temprature(10));



// /Q18

// Create a function that takes 3 sides and returns:

// function threeSides(a,b,c){
//     if(a === b && b === c){
//         return "Equilateral";
//     }
//     else if (a === b || b === c || a === c){
// return "Isosceles"
//     }
//     else{
// return "Scalene";
//     }
// } 
// console.log(threeSides(10,10,11));

//Q19
// Write a function that takes a price and discount percentage, and returns the discounted
// price.

// function calculate(price,dicount){
//    let amount = price *(dicount /100);
//    let dicountedPrice =price - amount;
//    return dicountedPrice;
// }
// console.log(calculate(1000,40));





// Q20

// Write a function that takes a password and checks if its length is 8 characters or more.
// Return "Valid Password" or "Too Short".
// function passwordCheck(password){
// if(password.length >= 8){
//     return "Valid Password";
// } 
// else{
//     return "Too Short";
// }
// }
// console.log(passwordCheck("12345679"));