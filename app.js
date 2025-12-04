                    //  chapter--5
    
    // Quection-1
    document.write("&nbsp &nbspAnswer-1<br>")
 let num1 = 1
 let  num2 = 3
 let total = num1+num2
 document.write("Toyal-Amount = "+total+"<br><hr>")

        // Quection-2
   document.write("&nbsp &nbspAnswer-2<br>")
let Num1 = 11
let Num2 = 52
let Total = Num1-Num2
document.write("substraction = "+Total+"<br><br>")

 document.write("&nbsp &nbsp Multiply<br>")
let Num = 11
let Nu = 52
let Tota = Num*Nu
document.write("Multiplication = "+Tota+"<br><br>")
document.write("Division: " + (num1 / num2) + "<br><br>");
document.write("Modulus: " + (num1 % num2) + "<br><br>");

         // QUECTION--3
let value
document.write("Declair a value "+value +"<br><br>" )

value=5
document.write("Declair a value "+value +"<br><br>")

value++
document.write("Declair a value "+value +"<br><br>" )

value+=7
document.write("Declair a value "+value +"<br><br>" )

value--;
document.write("Value after decrement is: " + value + "<br>");

var remainder = value % 3;
document.write("The remainder is: " + remainder + "<br>");

// QUECTION--4

var ticketPrice = 600;
var totalTickets = 5;
var totalCost = ticketPrice * totalTickets;
document.write("Total cost to buy " + totalTickets + " tickets is: " + totalCost + " PKR<br>");
// 5. QUECTION
var num = 7;
for(var i = 1; i <= 10; i++){
    document.write(num + " x " + i + " = " + (num*i) + "<br>");
}

// 6. QUECTION
var celsius = 25;
var fahrenheit = (celsius * 9/5) + 32;
document.write(celsius + "°C is " + fahrenheit + "°F<br>");

var fahrenheit2 = 77;
var celsius2 = (fahrenheit2 - 32) * 5/9;
document.write(fahrenheit2 + "°F is " + celsius2 + "°C<br>");

// 7. QUECTION
var price1 = 650;
var price2 = 100;
var quantity1 = 3;
var quantity2 = 7;
var shipping = 100;

var RATE = (price1*quantity1) + (price2*quantity2) + shipping;
document.write("Total cost of your order is: " + total + " PKR<br>");

// 8. QUECTION
var totalMarks = 500;
var obtainedMarks = 420;
var percentage = (obtainedMarks / totalMarks) * 100;
document.write("Percentage: " + percentage + "%<br>");

// 9. QUECTION
var usd = 10;
var riyal = 25;
var totalPKR = (usd*104.80) + (riyal*28);
document.write("Total Currency in PKR: " + totalPKR + "<br>");

// 10.QUECTION
var number = 5;
var result = ((number + 5) * 10) / 2;
document.write("Result: " + result + "<br>");

// 11. QUECTION
var currentYear = 2025;
var birthYear = 2000;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
document.write("They are either " + age2 + " or " + age1 + " years old<br>");

// 12. QUECTION
var radius = 5;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;

document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area + "<br>");

// 13. QUECTIONr
var snack = "Chocolate Chips";
var currentAge = 25;
var maxAge = 65;
var perDay = 3;

var totalNeeded = (maxAge - currentAge) * 365 * perDay;
document.write("You will need " + totalNeeded + " " + snack + " to last you until the ripe old age of " + maxAge + "<br>");
// 1. Take a number in a variable & do arithmetic
var num = 5;
var result = num + 7 - 3 * 2;  // Example arithmetic
alert("The result is: " + result);


// Explanation: Humne ek variable me number store kiya aur basic arithmetic operations kiye, fir alert ke through browser me show kiya.

// 2. let  --a - --b + ++b + b--
var a = 2, b = 1;
var result = --a - --b + ++b + b--;

alert("a: " + a + "\nb: " + b + "\nresult: " + result);

// Step by Step Explanation:

// --a  a = 2  a = 1 (pre-decrement)

// --b → b = 1 → b = 0 (pre-decrement)

// --a - --b → 1 - 0 = 1

// ++b → b = 0 → b = 1 (pre-increment)

// --a - --b + ++b → 1 + 1 = 2

// b-- → b = 1, but post-decrement, so use 1 now, then b = 0

// Total --a - --b + ++b + b-- → 1 - 0 + 1 + 1 = 3

//  Values:

// a = 1

// b = 0

// result = 3

// 3. Greet user by taking input
var userName = prompt("Enter your name:");
alert("Welcome, " + userName + "!");

// 4. Multiplication Table with default 5
var num = prompt("Enter a number for multiplication table:");
if(num === "" || num === null){
    num = 5;
}

document.write("<h3>Multiplication Table of " + num + "</h3>");
for(var i = 1; i <= 10; i++){
    document.write(num + " x " + i + " = " + (num * i) + "<br>");
}


// Explanation: Agar user number nahi deta, default table 5 show hoti hai.

// 5 & 6. Marks & Percentage Table
// Subjects
var subject1 = prompt("Enter first subject name:");
var subject2 = prompt("Enter second subject name:");
var subject3 = prompt("Enter third subject name:");

// Total marks
var totalMarksPerSubject = 100;

// Obtained marks
var marks1 = +prompt("Enter obtained marks for " + subject1 + ":");
var marks2 = +prompt("Enter obtained marks for " + subject2 + ":");
var marks3 = +prompt("Enter obtained marks for " + subject3 + ":");

// Calculations
var totalMarks = totalMarksPerSubject * 3;
var obtainedMarks = marks1 + marks2 + marks3;
var percentage = (obtainedMarks / totalMarks) * 100;

// Display Table
document.write("<h2>Marks Sheet</h2>");
document.write("<table border='1' cellpadding='5'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marks1 + "</td><td>" + (marks1/totalMarksPerSubject*100) + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marks2 + "</td><td>" + (marks2/totalMarksPerSubject*100) + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marks3 + "</td><td>" + (marks3/totalMarksPerSubject*100) + "%</td></tr>");
document.write("<tr><th>Total</th><th>" + totalMarks + "</th><th>" + obtainedMarks + "</th><th>" + percentage + "%</th></tr>");
document.write("</table>");