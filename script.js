// // // alert('Hello World');

// // // // // // Data Types

// // // // // // 1. String
// // // // // // "1000"

// // // // // // 2. Number
// // // // // // 123

// // // // // // 3. Boolean
// // // // // // true

// // // // // // 4. undefined
// // // // // // undefined

// // // // // // 5. null
// // // // // // null

// // // // // // 6. Object
// // // // // /* {
// // // // //   leafColor: "Green",
// // // // //   branches: 4
// // // // // } */

// // // // // var two=true;
// // // // // var jkl='1000';
// // // // // var xyz=5;

// // // // // // var a=4;
// // // // // // var b=9;
// // // // // // var c=8;
// // // // // // var k=false;
// // // // // // var d=a+b+c-k;

// // // // // alert(d)


// // // // var x = 5;
// // // // var y = "Ali";
// // // // var z = y+x;
// // // // alert(z);


// // // document.write("Saylani" + (5 + 5));

// // // Pre -- Increment -- Post
// // // Pre -- Decrement -- Post

// // // var num = 8;
// // // document.write(--num);
// // // document.write('<br>');
// // // document.write(num);

// // // var num = 5;
// // // console.log(num);
// // // num /=5;
// // // console.log(num);

// // // var random =10 + Number('10.5') + 30;
// // // console.log(random);


// // var dahiAvailabe = false;
// // var tomatoAvailable = true;

// // if (dahiAvailable) {
// //     console.log("1 pao dahi dedo!");
// // } else if (tomatoAvailable) {
// //     console.log("1 pao.timatar dedo!");
// // } else {
// //     console.log("1 pao doodh dedo!");
// // }
// // // // // // // //
// // document.write("Hello world")      
// // document.write("Saylani" + (5 + 5));               

// // // Pre -- Increment -- Post
// // // Pre -- Decrement -- Post

// // var num = 8;
// // document.write(--num);
// // document.write('<br>');
// // document.write(num);

// // var num = 5;
// // console.log(num);
// // num /= 5;
// // console.log(num);

// // var random = 10 + Number('10.5') + 30;
// // console.log(random);

//  var dahiAvailable = false;
//  var tomatoAvailable = true;

// if (dahiAvailable) {
//     console.log("1 Pao dahi dedo!");
// } else if (tomatoAvailable) {
//     console.log("1 Pao timatar dedo!");
// } else {
//     console.log("1 Pao doodh dedo!");
// }
// var random = Math.random();
// random = Math.round(random * 10);
// var askedNum = prompt('Write a number');
// askedNum = Number(askedNum);

// if (askedNum === random) {
//     console.log("You Win!");
// } else {
//     console.log("You Lose!");
// }
// console.log(random);
// console.log(askedNum);
// console.log(3 ** 3);


// var num = 2;
// num++;
// ++num;
// console.log(num--);
// console.log 

// var num = Number(prompt("Enter a number"));
// if (isNaN(num)) {
//     console.log("This is not a number");
// } else if (num % 2 === 0 ) {
//     console.log ("This number is Even");
// } else {
//     console.log("This number is Odd");
// }

// var num = Number(prompt("Enter a Number"));
// //  num = 6; if divisible by 3 print Fizz
// // num = 10; if divisible by 5 print Buzz
// // num = 15; if divisible by 3&5 print FizzBuzz
// // num = 8; Print num
// if (num % 3 === 0 && num % 5 === 0) {
//      console.log("FizzBuzz");

//  } else if (num % 5 === 0) {
//      console.log("Buzz");
//  } else if (num % 3 === 0) {
//     console.log("Fizz");
//  } else {
//      console.log(num);
//  }

// True: true,"a" , 1, 1-9, 
// False: false, "" , 0 , null , undefined


// console.log(false && false);

// 1. initialization
// 2. condition
// 3. Increment

// var num = 15;
// for (var i = 1; i <= 10; i++) {
//     console.log(num + " X " + i +" = " + num*i);
// }

// var x = 10;

// function createFunction1() {
//     var x = 20;
//     return new Function('return x;'); // this |x| refers global |x|
// }

// function createFunction2() {
//     var x = 20;
//     function f() {
//         return x; // this |x| refers local |x| above
//     }
//     return f;
// }

// var f1 = createFunction1();
// console.log(f1());          // 10
// var f2 = createFunction2();
// console.log(f2());          // 20s

// i = 8;
// i --
// i = 7
// i = i-2
// i = 5
// i -= 2

// for (var i = 10; i > 0; i-=2) {
//     console.log("hello user " + i);
// }

// Functions

//  function add (num1, num2) {
//     return num1  + num2;
//  }

//  function substract (num1, num2) {
//     return num1  - num2;
//  }   

// var result = add (17, 3);
// var result2 = substract (result, 5);
// console.log(result2);

// ARRAY 

// var months = [
//     "January",
//     "Feburary",
//     "March",
// ];
 
// console.log(months);

// var arr = [1,2,3,4];
//arr.splice(0, 1);
//arr.shift();
//console.log(arr.slice(1,3));

// var arr = ["Apple", "Mango", "Banana", "Orange" ];
// var found = false;
// for (var i = 0; i < arr.length; i++) {
//     console.log ("Finding in "  + i)
//     if (arr[i] === "Apple1"){
//         console.log("Found");
//         found = true;
//         break;
//     }
// }

// if (found){
//     console.log("Found");
// }

var date = prompt("Enter your birth date");
var date = Date() ;

console.log("num");


