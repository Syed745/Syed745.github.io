 // /* _____________________________________________________________________
//                                 CHAPTER 01
// ________________________________________________________________________*/


// var names = prompt("Enter your name")
// alert("Welcome To My Website " + names)


// alert("Error! Please enter a valid password")


// alert("Welcome to JS Land..." + "\n" + "Happy Coding")


// alert("Welcome to JS Land ")
// alert("Happy Coding")




// alert("Hello... I can run JS through my web browser's console")




// Alerts are very easy to use. We have used alerts many times above and below the assignment




// In this question it is so easy for me to place the script in different sections in HTML


// /* _____________________________________________________________________
//                                 CHAPTER 02
// ________________________________________________________________________*/


// var userName;


// var myName = "Syed Bilal Ali";
// var message = "Hello World";
// alert(message);



// var studentName = " Jhone Doe ";
// var studentAge = " 15 Years Old ";
// var certified = " Certified Mobile Application Development "
// alert(studentName);
// alert(studentAge);
// alert(certified);



// var pizza = ("PIZZA" + "\n" + "PIZZ"  + "\n" + "PIZ"  + "\n" + "PI"  + "\n" + "P");
// alert(pizza);


// var email = "syedb1997@gmail.com";

// alert('My Email Address Is ' + email)


// var book = 'A smarter way to learn JavaScript';
// alert("I'm Trying To Learn From The Book " + book)


// document.write('Yah! I can Write HTML Content through JavaScript');


// alert('▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬')


// /* _____________________________________________________________________
//                                 CHAPTER 03
// ________________________________________________________________________*/


// var age = 24;
// alert("I'm " + age + " Years Old");


// var num = 14
// alert("You have visited this site " + num + " times");


// var birthYear = 1997;
// document.write('My birthyear is' + birthYear + "<br>");
// document.write('Data Type of my declared variable is ' + typeof(birthYear));


// var visitorName = 'Syed Bilal Ali';
// var  productTitle = 'T-Shirt'
// var qty = 5;
// var store = "www.xyzclothing.com ";
// document.write("<b>" + visitorName + "</b>" + ' ordered ' +  "<b>" + qty + productTitle + "</b>" + ' on ' + store)


// /* _____________________________________________________________________
//                                 CHAPTER 04
// ________________________________________________________________________*/


// var variable1 = "Hello World1",
//     variable2 = "Hello World2...",
//     variable3 = 42;
   

/* ***** legal variable ***** */
// document.write(
//     "<b>Legal Variable Example</b> <br>" +
//     "var abc;" + " <br> " +
//     "var name1;" + " <br> " +
//     "var $hello;" + " <br> " +
//     "var _abc;" + " <br> " +
//     "var hello_world;" + " <br> "
// )

/* ***** illegal variable ***** */
// document.write(
//     "<b>Illegal Variable Example</b> <br>" +
//     "var 1ab " + " <br> " +
//     "var hello world;" + " <br> " +
//     "var .hek;" + " <br> " +
//     "var alert;" + " <br> " +
//     "var console;" + " <br> "
// )

// document.write("<b> RULES FOR NAMING J VARIABLE: </b> <br>")
// document.write("A variable can contain $ numbers  alphabets and _. For Example : $my_1stVariable <br> " +
//     "Variables must begin with a Letter $ _ . For example : $name _name or name <br>" +
//     "Variable names are case sensitive <br> " +
//     " Variable names should not be JS keyword")


// /* _____________________________________________________________________
//                                 CHAPTER 05
// ________________________________________________________________________*/





// // Question (01) //

var num1 = +prompt("Enter first number")
var num2 = +prompt("Enter second number")
var res = num1 + num2
alert("The Sum of " + num1 + " and " + num2 + " is " + res)



// // Question (02) //

/* ***** Subtraction ***** */

var num1 = +prompt("Enter first number")
var num2 = +prompt("Enter second number")
var res1 = num1 - num2
alert("The subtraction of two number " + num1 + " and " + num2 + " is " + res1)

/* ***** Multiplication ***** */

var num1 = +prompt("Enter first number")
var num2 = +prompt("Enter second number")
var res1 = num1 * num2
alert("The multiplication of two number " + num1 + " and " + num2 + " is " + res1)

/* ***** Division ***** */

var num1 = +prompt("Enter first number")
var num2 = +prompt("Enter second number")
var res1 = num1 / num2
alert("The division of two number " + num1 + " and " + num2 + " is " + res1)

/* ***** Modulus ***** */

var num1 = +prompt("Enter first number")
var num2 = +prompt("Enter second number")
var res1 = num1 % num2
alert("The modulus of two number " + num1 + " and " + num2 + " is " + res1)



// // Question  (03) //


var variable =
    console.log("The value of the declared variable is " + variable)
var variable = 5
console.log("The initial value is " + variable)

console.log("The value after the increment is " + ++variable)

var variable = variable + 7
console.log("The value after addition is " + variable)

console.log("The value after decreament is " + --variable)
console.log("The remainder is " + variable % 3)



// // Question (04) //

var ticketPrice = 600
console.log("Total cost to buy 5 tickets to a movie is " + ticketPrice * 5 + "PKR")



// // Question (05) //

var num = +prompt("Enter the number to generate it's table: ")
document.write("<h1>Table Of " + num + "</h1>")
document.write(num + " x 1 = " + num * 1 + "<br>")
document.write(num + " x 2 = " + num * 2 + "<br>")
document.write(num + " x 3 = " + num * 3 + "<br>")
document.write(num + " x 4 = " + num * 4 + "<br>")
document.write(num + " x 5 = " + num * 5 + "<br>")
document.write(num + " x 6 = " + num * 6 + "<br>")
document.write(num + " x 7 = " + num * 7 + "<br>")
document.write(num + " x 8 = " + num * 8 + "<br>")
document.write(num + " x 9 = " + num * 9 + "<br>")
document.write(num + " x 10 = " + num * 10 + "<br>")



// // Question (06) //

var celcius = prompt("Enter the temperature in celcius:")
var fahrenheit = (celcius * 9 / 5) + 32
document.write(celcius + "°C is " + fahrenheit + "°F")

var f = prompt("Enter the temperature in farhenheit")
var c = (f - 32) * (5 / 9)
document.write(f + "°F is " + c + "°C")



// // Question (07) //

document.write("<h1><b>SHOPPING CART</b></h1><br>")


/* *****  Price and quantity Of Item 1 ***** */

var p1 = +prompt("Pice of item 1:")
document.write("Price of item 1 is " + p1 + "<br>")
var q1 = +prompt("Quantity of item 1:")
document.write("Quantity of item 1 is " + q1 + "<br>")

/* *****  Price and quantity Of Item 2 ***** */

var p2 = +prompt("Pice of item 2:")
document.write("Price of item 2 is " + p2 + "<br>")
var q2 = +prompt("Quantity of item 2:")
document.write("Quantity of item 2 is " + q2 + "<br>")

/* *****  Shipping Charges ***** */

var ship = +prompt("Enter Shipping Charges Here")

/* *****  Show The Result ***** */

var total = +(p1 * q1) + (p2 * q2) + ship
document.write("Shipping charges are " + ship + "<br>")
document.write("Total cost of your order is " + total + "<br>")



// // Question (08) //

/* *****  User Marks ***** */

var sub1 = +prompt("write marks of subject 1")
var sub2 = +prompt("write marks of subject 2")
var sub3 = +prompt("write marks of subject 3")
var sub4 = +prompt("write marks of subject 4")
var obtain = (sub1 + sub2 + sub3 + sub4)
var per = obtain / 400 * 100

/* *****  Show The Result ***** */

document.write("<h1><b> MARKS SHEET </b></h1><br>")
document.write("Total marks 400" + "<br>")
document.write("marks obtained " + obtain + "<br>")
document.write("percentage " + per + "% " + "<br>")



// // Question (09) //

var us = prompt("Write amount in Dollars($)")
var riyal = prompt("Write amount in Riyal")
var pkr = (us * 104) + (28 * riyal)

document.write("<b> Total Currency in PKR </b><br>")
document.write("PKR " + pkr)



// // Question (10) //


var digit = +prompt("write digit here")
var calculation = +((digit + 5) * (10)) / 2
alert(calculation)



// // Question (11) //


var currentYear = +prompt("write current year")
var birthYear = +prompt("your birth year")
var age = (currentYear - birthYear)

document.write("<b> Age Calculator </b><br>")
document.write("Current Year : " + currentYear + " <br> ")
document.write("Birth Year : " + birthYear + " <br> ")
document.write("your age is : " + age + " or " + (++age))



// // Question (12) //

var radius = +prompt("enter the radius of circle")
var pie = 3.142
var circum = 2 * pie * radius
var area = (radius * radius) * pie

document.write("<b> The Geometrizer </b><br>")
document.write("The radius of a circle is " + radius + "<br>")
document.write("The Circumference of circle is " + circum + "<br>")
document.write("Area of the cicle is " + area + "<br>")

// // Question (13) //

var snack = prompt("What is your favorite Snack:")
var old = +prompt("What is your current age:")
var max = +prompt("Enter the maximum age:")
var amount = +prompt("How many snacks you take per day")

var totalSnacks = (max - old) * 365 * amount

document.write("<b> The Lifetime Supply Calculator </b><br>")
document.write("Favorite Snack:" + snack + "<br>")
document.write("Current age:" + old + "<br>")
document.write("Maximum age:" + max + "<br>")
document.write("Amount of snack per day:" + amount + "<br>")
document.write("" + "<br>")
document.write("You will need " + totalSnacks + snack + " to last you until the ripe old age of " + max + "<br>")






// /* _____________________________________________________________________
//                             CHAPTER 06 ----- 09
// ________________________________________________________________________*/



// // Question (01) //

var a = 10
document.write("The value of a is " + a + "<br>")
var a = ++a
document.write("")
document.write("The value of ++a is " + a + "<br>")
document.write("Now the value of a is " + a + "<br>")
document.write("")

document.write("The value of a++ is " + a + "<br>")
var a = ++a
document.write("Now the value of a is " + a + "<br>")
document.write("")

var a = --a
document.write("The value of --a is " + a + "<br>")
document.write("Now the value of a is " + a + "<br>")
document.write("")

document.write("The value of a-- is " + a-- + "<br>")
document.write("Now the value of a is " + a + "<br>")



// // Question (02) //

var a = 2
var b = 1
var result = --a - --b + ++b + b--
    document.write("The initial result is " + result + "<br>")
document.write("" + "<br>")

document.write("--a;1" + "<br>")
document.write("--a - --b;1" + "<br>")
document.write("--a - --b + ++b;3" + "<br>")
document.write("--a --b + ++b + b--;3" + "<br>")
document.write("" + "<br>")

document.write("a is 1" + "<br>")
document.write("b is 2" + "<br>")
document.write("result is" + result + "<br>")
document.write("" + "<br>")



// Question (03) //

var nameUser = prompt("Enter Your Name...!")

alert("Hello ! " + nameUser)



// Quesiton (04) //

// Question Does not given



// Question (05) //


var que5_1 = prompt("Enter a Number Here")
if (!que5_1) {
    que5_1 = 5
}
document.write(que5_1 + " X 1 = " + que5_1 * 1 + "<br>")
document.write(que5_1 + " X 2 = " + que5_1 * 2 + "<br>")
document.write(que5_1 + " X 3 = " + que5_1 * 3 + "<br>")
document.write(que5_1 + " X 4 = " + que5_1 * 4 + "<br>")
document.write(que5_1 + " X 5 = " + que5_1 * 5 + "<br>")
document.write(que5_1 + " X 6 = " + que5_1 * 6 + "<br>")
document.write(que5_1 + " X 7 = " + que5_1 * 7 + "<br>")
document.write(que5_1 + " X 8 = " + que5_1 * 8 + "<br>")
document.write(que5_1 + " X 9 = " + que5_1 * 9 + "<br>")
document.write(que5_1 + " X 10 = " + que5_1 * 10 + "<br>")

// Question (06) //

var subject1 = prompt("Enter first subject ")
var subject2 = prompt("Enter second Subject")
var subject3 = prompt("Enter 3rd subject")

var totalMark = 100

var obtain1 = +prompt("Enter " + subject1 + " marks here... out of " + totalMark)
var obtain2 = +prompt("Enter " + subject2 + " marks here... out of " + totalMark)
var obtain3 = +prompt("Enter " + subject3 + " marks here... out of " + totalMark)

var obtained = obtain1 + obtain2 + obtain3


var percent = obtained * 100 / 300

var percent1 = obtain1 * 100 / 100
var percent2 = obtain2 * 100 / 100
var percent3 = obtain3 * 100 / 100



document.write("<table> <tr> <th>Subject</th> <th>Total Marks </th> <th> Obtained Marks </th>  <th>Percentage</th> </tr> <tr> <td>" + subject1 + "</td> <td>" + totalMark + "</td> <td>" + obtain1 + "</td>  <td>" + percent1 + "%" + "</td> </tr> <tr> <td>" + subject2 + "</td> <td>" + totalMark + "</td> <td>" + obtain2 + "</td>  <td>" + percent2 + "%" + "</td> </tr> <tr> <td>" + subject3 + "</td> <td>" + totalMark + "</td> <td>" + obtain3 + "</td>  <td>" + percent3 + "%" + "</td> </tr>              <tr> <td> Total MArks of All subjects </td> <td>" + 300 + "</td> <td> " + obtained + "</td>  <td>" + percent + "%" + "</td> </tr> </table>")



// Question (07)  //

// Question does not given




// /* _____________________________________________________________________
//                             CHAPTER 09 ------ 11
// ________________________________________________________________________*/



// Question (01)  //

var city = prompt("Enter the name of city")
if (city == "karachi" || city == "Karachi") {
    alert("Welcome to the city of lights")
}



// Question (02)  //

var gender = prompt("Enter your gender")
if (gender == "male" || gender == "Male") {
    alert("Good Morning Sir")
} else if (gender == "female" || gender == "Female") {
    alert("Good Morning Ma’am")
}



// Question  (03)  //

var color = prompt("Enter the color")
color = color.toLowerCase()

if (color == "red") {
    alert("Vehicles must Stop")
} else if (color == "green") {
    alert("Vehicles move now")
} else if (color == "yellow") {
    alert("Vehicles should get ready to move")
} else {
    alert("Invalid color")
}



// Question (04)  //

var remFuel = +prompt("Enter the amount of remaining fuel in Litres")

if (remFuel < 0.25) {
    alert("Please Refill the fuel in your car")
}



// Question (05)  //


/* ***** "A" ***** */

var a = 4;
if (++a === 5) {
    alert("given condition for the variable is true");
}

/* ***** given consition is true because the value is equal to 5 ***** */


/* ***** "B" ***** */
var b = 82;
if (b++ === 83) {
    alert("given consdition for the variable is true")
}

// /* ***** condition is not true because the value is not equals to 83 at this point ***** */


/* ***** "C" ***** */
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true")
}
if (c === 13) {
    alert("condition 2 is true")
}
if (++c < 14) {
    alert("condition 3 is true")
}

if (c === 14) {
    alert("condition 4 is true")

}

/* ***** condition 2 is true ***** */


/* ***** "D" ***** */
var materialCost = 2000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {
    alert("The cost equals")
}

/* ***** the consition is true ***** */


/* ***** "E" ***** */
if (true) {
    alert("True")
}
if (false) {
    alert("False")
}

/* ***** the condition is true ***** */


/* ***** "F" ***** */


if ("car" < "cat") {
    alert("car is smaller than cat");
}

/* ***** the condition is true ***** */



// Question (06)  //

var marksObtain = +prompt("Enter the marks obtained in 3 subject")
var totalMarks = +prompt("Enter the total marks")
var percentage = marksObtain / totalMarks * 100

document.write("<b> MARKS SHEET </b><br>")
document.write("Marks obtained: " + marksObtain + "<br>")
document.write("Total marks: " + totalMarks + "<br>")
document.write("Percentage: " + percentage + "%" + "<br>")


if (percentage >= 80) {
    document.write("Grade: A-one" + "<br>")
    document.write("Remarks: Excellent" + "<br>")
} else if (percentage >= 70) {
    document.write("Grade: A" + "<br>")
    document.write("Remarks: Good" + "<br>")
} else if (percentage >= 60) {
    document.write("Grade: B" + "<br>")
    document.write("Remarks: You need to improve" + "<br>")
} else if (percentage < 60) {
    document.write("Grade: Fail" + "<br>")
    document.write("Remarks: Sorry" + "<br>")
}



// Question (07)  //

var secretNumber = 5
var guess = +prompt("Enter the Secret number ranging 1-10")

if (guess === secretNumber) {
    alert("Bingo! Correct Answer")

} else if (guess === ++secretNumber) {
    alert("Close enough to the correct answer")

} else if (guess = --secretNumber) {
    console.log("Close enough to the correct answer")
}



// Question (08)  //


var number = +prompt("Enter the number")
if (number % 3 === 0) {
    alert(number + "is divisible by 3")

} else {
    alert("The given number does not divisible by 3")
}



// Question (09)  //


var num = +prompt("Enter the number")

if (num % 2 === 0) {
    alert(num + " is an Even number")
} else if (num % 2 != 0) {
    alert(num + " is an Odd number")
}


// Question (10) //


var temp = +prompt("Enter the temperature in Celcius")

if (temp >= 40) {
    alert("It's very hot")
} else if (temp > 30) {
    alert("Weather is normal")
} else if (temp > 20) {
    alert("Weather is Cool today")
} else if (temp > 10) {
    alert("OMG! Weather today is very cool")
}



// Question (11) //

var firstNumber = +prompt("Enter the first number")
var secondNumber = +prompt("Enter the second number")
var operation = prompt("Enter the operation to perform +,-.*,/")

if (operation == "+") {
    console.log("The sum of two numbers is " + firstNumber + secondNumber)
} else if (operation == "-") {
    console.log("The difference of two numbers is " + firstNumber - secondNumber)
} else if (operation == "*") {
    console.log("The product of two numbers is " + firstNumber * secondNumber)
} else if (operation == "/") {
    console.log("The division of two numbers is " + firstNumber / secondNumber)
}







// /* _____________________________________________________________________
//                             CHAPTER 12 ----- 13
// ________________________________________________________________________*/



// Question (01)  //


var numb = prompt("Enter Number or String")
if (numb === "A") {
    alert("A = 65 & this is Upercase")
} else if (numb === "a") {
    alert("a = 97 & this is lowercase")
} else if (numb === "Z") {
    alert("Z = 90 & this is upercase")
} else if (numb === "z") {
    alert("z = 122 & this is lowercase")
}



// Question (02)  //

var ab = +prompt("enter 1st number")
var ac = +prompt("enter 2nd num")
if (ab > ac) {
    console.log(ab + " is larger number")
} else(ac + " is larger")



// Question (03)  //

var numeric = +prompt("enter a number")
if (numeric > 0) {
    console.log("number is Positive")
} else {
    console.log("number is Negative")
}



// Question (04)  //


var input = prompt("Enter a character:");
if (input == 'a' || input == 'A' || input == 'e' || input == 'E' || input == 'i' || input == 'I' || input == 'o' || input == 'O' || input == 'u' || input == 'U') {
    alert("Its a vowel");
} else if ((input >= 'a' && input <= 'z') || (input >= 'A' && input <= 'Z')) {
    alert("Its a consonant");
} else {
    alert("Invalid input please enter an alphabet");
}


// Question (05)  //

var password = "abc123"
var confrimPass = prompt("enter your password")
if (confrimPass.toLowerCase() == password) {
    console.log("password is right")
} else {
    console.log("password is incorrect")
}



// Question (06)  //

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day"
} else {
    greeting = "Good evening";
}



// Question (07)  //

var time1 = prompt("Enter time like this 12:00 pm")

if (time1 >= 0000 && time1 <= 1200) {
    alert("Good Morning")
} else if (time1 >= 1200 && time1 <= 1700) {
    alert("Good Afternoon")
} else if (time1 >= 1700 && time1 <= 2100) {
    alert("Good Evening")
} else if (time1 >= 2100 && time1 <= 2359) {
    alert("Good Night")
}




// /* __________________________________________________________________
//                             CHAPTER 14 ----- 16
// ______________________________________________________________________*/



// Question (01)  //

var student_name = []
student_name.push("Muhammad Ameen")


// Question (02)  //

var student = [{}]
student.push({
    student_Name: "Muhammad Ameen"
})




// Question (03)  //

var str = ["Hello World"]
console.log(str)



// Question (04)  //

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(number)



// Question (05)  //

var boolean = [true, false]
console.log(boolean)



// Question (06)  //

var mix = ["Pakistan", 3227, true]
console.log(mix)



// Question (07)  //

var quali1 = ["SSC", "HSC", "BCS", "B.COM", "BBA", "MSC", "M.Phil", "PhD"]
document.write("<b> Qualification </b><br>")
document.write("1)" + quali1[0] + " <br>")
document.write("2)" + quali1[1] + " <br>")
document.write("3)" + quali1[2] + " <br>")
document.write("4)" + quali1[3] + " <br>")
document.write("5)" + quali1[4] + " <br>")
document.write("6)" + quali1[5] + " <br>")
document.write("7)" + quali1[6] + " <br>")
document.write("8)" + quali1[7] + " <br>")


// Question (08)  //

var student = ["Ameen", "Ahsan", "Umair"]

for (var i = 0; i < student.length; i++) {
    var studentMarks = [320, 420, 470]
    for (var j = 0; j < studentMarks.length; j++) {
        var percentage = studentMarks[i] * 100 / 500
    }
    document.write("Score of " + student[i] + " is " + studentMarks[i] + ". Percentage Is " + percentage + "% <br>")
}





//  Question (09)  //

var colors = ["Red", "White", "blue", "grey"]
console.log(colors)

//  (A)  //


var add_Color_start = prompt("what color he/she wants to add to the beginning")
colors.unshift(add_Color_start)

//  (B)  //


var add_Color_End = prompt("what color he/she wants to add to the End")
colors.push(add_Color_End)

//  (C)  //


colors.push("Pink", "Black")
console.log(colors)

//  (D)  //


colors.shift()

//  (E)  //


colors.pop()

//  (F)  //


var del_Color_start = prompt("what color he/she wants to delete to the beginning")
colors.shift(del_Color_start)

//  (G)  //


var del_Color_End = prompt("what color he/she wants to delete to the End")
colors.pop(del_Color_End)



// Question (10)  //

var score = [320, 230, 420, 180]
document.write("Score of Students: " + score)
var ascending = score.sort()
document.write("Ordered Score of students: " + ascending)



// Question (11)  //


// method (01)  //

var citiesList = ["Karachi", "Lahore", "Peshawar", "Quetta"]
console.log("Cities list: " + citiesList)
var selectedCities = [citiesList[1] + " and " + citiesList[2]]
console.log("Selected Cities: " + selectedCities)

// method (02)  //

var cityName = ["Karachi", "Lahore", "Islamabad", "Quetta", "peshawar"]
var new_1 = cityName.slice(1, 3)


// Question (12)  //


var arr = ['This', 'is', 'my', 'cat']
arr.join(" ")


//  Question (13)  //

var fifo = []
fifo.push("Keyboard")
fifo.push("Mouse")
fifo.push("Joystick")
fifo.push("C.P.U")
fifo.push("Speaker")


//  Question (14)  //

var fifo_end = []
fifo_end.unshift("Keyboard")
fifo_end.unshift("Mouse")
fifo_end.unshift("Joystick")
fifo_end.unshift("C.P.U")
fifo_end.unshift("Speaker")



//  Question (15)  //

var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]

document.write("<select> <option>" + phone[0] + "</option> <option>" + phone[1] + "</option> <option>" + phone[2] + "</option> <option>" + phone[3] + "</option> <option>" + phone[4] + "</option>  <option>" + phone[5] + "</option>   </select>  ")


// /* _________________________________________________________________________
//                             CHAPTER 17 ----- 20
// _____________________________________________________________________________*/



// Question (01)  //


var multiArrEmpty = [
    [],
    []
]

//  Question (02)  //

var multiArr = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
]

//  Question (03)  //


for (var i = 1; i <= 10; i++) {
    document.write(i + " <br>")
}


//  Question (04)  //


var table = +prompt("Please enter table number")
var length = +prompt("Please enter length of table")

for (var i = 1; i <= length; i++) {
    document.write(table + " x " + i + " = " + table * i + "<br>")
}

//  Question (05)  //


var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

for (var i = 0; i < fruits.length; i++) {
    console.log("Element at index " + i + " is " + fruits[i])
}


//  Question (06)  //


// Section (A)  //

document.write(" <h2>a. Counting: </h2>")
for (var i = 1; i <= 15; i++) {
    document.write(i + ",")

}


// Section (B)  //

document.write(" <h2>b. Reverse Counting: </h2> ")
for (var i = 10; i >= 1; i--) {
    document.write(i + ",")
}


// Section (C)  //

document.write(" <h2>c. Even</h2>")
for (var i = 0; i <= 20; i = i + 2) {
    document.write(i + ",")
}

// Section (D)  //

document.write(" <h2>d. odd </h2>")
for (var i = 1; i <= 20; i = i + 2) {
    document.write(i + ",")
}

// Section (D)  //

document.write("<h2>e. Series </h2>")
for (var i = 0; i <= 20; i = i + 2) {
    document.write(i + "K,")
}


//  Question (07)  //


alert("Welcome to our bakery")
var itemBakery = ["cake", "apple pie", "cookie", "chips", "patties"]
var inputCart = prompt("Welcom! What you want?")
var isFound = false //this is called flag

for (i = 0; i < itemBakery.length; i++) {
    if (inputCart === itemBakery[i]) {
        alert(inputCart + " is available at index " + i + " in our bakery")
        isFound = true
        break
    }
}
if (isFound === false) {
    alert("We are sorry. " + inputCart + " is not availabale")
}
//  Question (08)  //

var A = [24, 53, 78, 91, 12]

console.log("Array items: " + A)
A = A.sort()
console.log("The largest number is: " + A[A.length - 1])


//  Question (09)  //


var b = [24, 53, 78, 91, 12]

console.log("Array items: " + b)
b = b.sort().reverse()
console.log("The smallest number is: " + b[b.length - 1])


//  Question (10) //

document.write("<h2>5 Ranging</h2>")
for (var i = 5; i <= 100; i = i + 5) {
    document.write(i + ",")
}