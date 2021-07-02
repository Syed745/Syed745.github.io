// // alert('Hello World');

// // // // // Data Types

// // // // // 1. String
// // // // // "1000"

// // // // // 2. Number
// // // // // 123

// // // // // 3. Boolean
// // // // // true

// // // // // 4. undefined
// // // // // undefined

// // // // // 5. null
// // // // // null

// // // // // 6. Object
// // // // /* {
// // // //   leafColor: "Green",
// // // //   branches: 4
// // // // } */

// // // // var two=true;
// // // // var jkl='1000';
// // // // var xyz=5;

// // // // // var a=4;
// // // // // var b=9;
// // // // // var c=8;
// // // // // var k=false;
// // // // // var d=a+b+c-k;

// // // // alert(d)


// // // var x = 5;
// // // var y = "Ali";
// // // var z = y+x;
// // // alert(z);


// // document.write("Saylani" + (5 + 5));

// // Pre -- Increment -- Post
// // Pre -- Decrement -- Post

// // var num = 8;
// // document.write(--num);
// // document.write('<br>');
// // document.write(num);

// // var num = 5;
// // console.log(num);
// // num /=5;
// // console.log(num);

// // var random =10 + Number('10.5') + 30;
// // console.log(random);


// var dahiAvailabe = false;
// var tomatoAvailable = true;

// if (dahiAvailable) {
//     console.log("1 pao dahi dedo!");
// } else if (tomatoAvailable) {
//     console.log("1 pao.timatar dedo!");
// } else {
//     console.log("1 pao doodh dedo!");
// }
// // // // // // //
// document.write("Hello world")      
// document.write("Saylani" + (5 + 5));               

// // Pre -- Increment -- Post
// // Pre -- Decrement -- Post

// var num = 8;
// document.write(--num);
// document.write('<br>');
// document.write(num);

// var num = 5;
// console.log(num);
// num /= 5;
// console.log(num);

// var random = 10 + Number('10.5') + 30;
// console.log(random);

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

// var arr = ["Mango", "Apple", "Banana"];
// var userAsked =prompt("Enter fruit name");
// var isAvailable = false;

// for (var i = 0; i < arr.length; i++) {
//     if (userAsked.toLowerCase() === arr[i].toLowerCase()) {
//         isAvailable = true;
//         break;
//     }
// }

// if (isAvailable){
//     console.log("This fruit is available");
// } else {
//     console.log ("This fruit is not available");
// }

// var notAllowed = "Salay";
// var para = prompt("Enter Anything");

// if (para.indexOf(notAllowed) !== -1) {
//     alert("This word is not allowed");
// } else {
//     console.log("All clear");
// }

// var date = new Date ();
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// console.log(dayNames[date.getDay()]);

// function abc (x) {
//     return function (y) {
//         return x + y;
//     }
// }

// var called = abc(5);
// console.log(called(3))

function abc (current, end) {
    console.log(current);
    if (current >= end) {
        return "Done";
    }
    return abc(++current, end);
}
console.log(abc(1, 5));
















