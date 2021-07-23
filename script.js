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

// function abc (current, end) {
//     console.log(current);
//     if (current >= end) {
//         return "Done";
//     }
//     return abc(++current, end);
// }
// console.log(abc(1, 5));

// var dob = new Date(prompt ("Enter Your Date Of Birth","Jan 26, 1997" ));

// var dobmili = dob.getTime();
// var today = new Date();
// var todaymili = today.getTime()
// var diff = todaymili - dobmili ;
// var accurage = Math.floor(diff / (1000*60*60^24*30*12))

// console.log (accurage);

// var userAsked = prompt("Enter Your Fav Mobile Modle");

// console.log (userAsked.length);

// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// console.log("Full Name");
// console.log (firstName + lastName);

// var arr = ['Pakistani'];
// console.log(arr.slice(8, 9));
// console.log("pakistan".length);

// const data = [
//     {
//         name:
//     }
// ]

// function clickBtn(){
//     alert("Click")
// }

// function clickMe () {
//     document.getElementById("para").innerHTML="Thank you for taking this course"
// }




// clock

// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext('2d');

// var radius = canvas.height / 2;
// ctx.translate(radius, radius);
// radius = radius = 0.90
// setInterval(drawClock, 1000);

// function drawClock() {
//     drawFace(ctx, radius);
//     drawNumbers(ctx, radius);
//     drawTime(ctx, radius);
// }
// function drawFace(ctx, radius) {
//     var grad;
//     ctx.beginPath();
//     ctx.arc(0, 0, radius, 0, 2*Math.PI);
//     ctx.fillStyle = 'white';
//     ctx.fill();
//     grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
//     grad.addColorStop(0, '#333');
//     grad.addColorStop(0.5, 'white');
//     grad.addColorStop(1, '#333');
//     ctx.strokeStyle = grad;
//     ctx.lineWidth = radius*0.1;
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
//     ctx.fillStyle = '#333';
//     ctx.fill();
// }
//closed 

// var person = [{
//     name: "Bilal",
//     id: "19719",
//     email: "syedb1997",
//     phoneNo: "+92........",
// }, {
//     name: "usman",
//     id: "768",
//     email: "usman@..",
//     phoneNo: "+92.....dsd",
// }];

// for (var i = 0; i < person.length; i++) {
//     for (var key in person[i]) {
//         console.log(person[1][key]);
//     }
// }
var min = 0;
var sec = 0;
var msec = 0;

var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;

function timer() {
    msec++
    msecHeading.innerHTML = msec;
    if(msec >= 100){
        sec++
        secHeading.innerHTML = sec
        msec = 0;
    }else if(sec >= 60){
        min++
          minHeading.innerHTML = min
    sec = 0
    }
}    

function start (){
    interval = setInterval(timer, 10)
}

function pause (){
   clearInterval(interval)
}

function reset (){
   min = 0;
   sec = 0;
   msec = 0;
   minHeading.innerHTML = min
   secHeading.innerHTML = sec
   msecHeading.innerHTML = msec
   stop()
}



