// var a = prompt("JavaScript Alert","Welcome to JS Land...");
// var b = prompt("JavaScript Alert","Happy Coding!");
// console.log(a,b)

// var b = 5;
// var a = b++ + ++b + b + --b + b-- -b
// console.log(a)

// var x = document.getElementById("mein-content")
// document.childNodes[0].childNodes[1].childNodes[2].childNodes[3];

// function sum(x,y) {
//     return x+y;
//     console.log("hello")
// }''

// var btn = document.getElementById('btn');

// var data = ()  => {
//   var fname =  document.getElementById('first-name').value;
//     alert(fname);
// }

// btn.addEventListener('click', data)

// var arr = ["syed", "Bilal", "ali"];
//  arr.pop();
//  console.log(arr)
 function multiplyBy (){
     num1 = document.getElementById("firstNumber").value;
     num2 = document.getElementById("secondNumber").value;
     document.getElementById("result").innerHTML = num1 * num2;
 }

function divideBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 / num2;
 }
// function exam (totMarks,isExam){

// if(isExam ){
//     return totMarks >= 90;
// }
// return (totMarks >= 89 && totMarks <= 100);
// }
// console.log(exam(89));
// console.log(exam(11));
// console.log(exam(95));