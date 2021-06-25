// var x = 10;

// function myFunc1 () {
//     var x = 20;
//     return new Function('return x;');
// }

// function myFunc2() {
//     var x = 20;
//     function f () {
//         return x; 
//     }
//     return f;
// }

// var f1 = myFunc1();
// console.log (f1());
// var f2 = myFunc2();
// console.log(f2());

// function myFunc (theObject) {
//     theObject.brand ="Toyota";
// }

// var mycar = {
//     brand: "Honda",
//     model: "Accord",
//     year: 1998
// };

// console.log(mycar.brand);

// myFunc (mycar);

// let array = [1, 2, 3];

// function removeFirst(arr) {
//     let array = [...arr];
//     let newArray = [];
//     for (let i = 0; i < array.length; i++)
//     {
//         array[i] = array[i+1]
//         if (array[i] || undefined) {
//             newArray.push(array[i])
//         }
//     }
//     return newArray;
// }
// console.log(removeFirst(array));
// var date = new Date();
// // console.log(date.toString());
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// console.log(dayNames[date.getDay()]);
// console.log(date.getDate());
// var monthsNames = [];
// console.log(date.getMonth());
// console.log(date.getFullYear());
// console.log(date.getHours());


// function agecalc(){
// var dob = new Date(prompt("Enter your date of birth", "Jan 26, 1997"));
// var dobmili = dob.getTime();
// var today = new Date ();
// var todaymili = today.getTime();
// var diff = todaymili - dobmili;
// var accuage = Math.floor(diff/(1000*60*60*24*30*12));
// alert(accuage);
// }
// agecalc();
// function add(a,b,c){
//     var z = a+b+c
//     return z;
// }

// var g = add(2,5,1);
// alert(g);


let userDate = prompt("Enter your date of birth");
let userMonth = prompt("Enter your month of birth").toLowerCase();
let userYear = prompt("Enter your year of birth");

let DOB = new Date();
DOB.setDate(userDate);
DOB.setFullYear(userYear);
let currentDate = new Date ();

if ( userMonth === "1" || userMonth === "jan" || userMonth === "january") {
    DOB.setMonth(0);
}

else if ( userMonth === "2" || userMonth === "feb" || userMonth === "february") {
    DOB.setMonth(1);
}

else if ( userMonth === "3" || userMonth === "mar" || userMonth === "march") {
    DOB.setMonth(2);
}

else if ( userMonth === "4" || userMonth === "apr" || userMonth === "april") {
    DOB.setMonth(3);
}

else if ( userMonth === "5" || userMonth === "may" || userMonth === "may") {
    DOB.setMonth(4);
}

else if ( userMonth === "6" || userMonth === "jun" || userMonth === "june") {
    DOB.setMonth(5);
}

else if ( userMonth === "7" || userMonth === "jul" || userMonth === "july") {
    DOB.setMonth(6);
}

else if ( userMonth === "8" || userMonth === "aug" || userMonth === "august") {
    DOB.setMonth(7);
}

else if ( userMonth === "9" || userMonth === "sep" || userMonth === "september") {
    DOB.setMonth(8);
}

else if ( userMonth === "10" || userMonth === "oct" || userMonth === "octuber") {
    DOB.setMonth(9);
}

else if ( userMonth === "11" || userMonth === "nov" || userMonth === "november") {
    DOB.setMonth(10);
}

else if ( userMonth === "12" || userMonth === "dec" || userMonth === "december") {
    DOB.setMonth(11);
}

else {
    alert("please enter right date of birth ")
}

let diffMonth = currentDate.getMonth() - DOB.getMonth;

let diffYear = currentDate.getFullYear() - DOB.getFullYear;

if (DOB.getMonth() < currentDate.getMonth()) {
    diffYear ++;
}

if (currentDate.getDate() === DOB.getDate() && currentDate.getMonth() === DOB.getMonth()) {
    alert(diffYear + "years")
} else if (currentDate.getMonth() === DOB.getMonth() && currentDate.getDate() < DOB.getDate()) {
    document.write(diffYear + "years")
}

else {
    document.write(diffYear -1 + "years")
}

if (currentDate.getMonth() < DOB.getMonth()) {
    document.write(12 + diffMonth + " month & ")
}

else {
    document.write(diffMonth + "month & ")
}


let diffDate = currentDate.getDate() - DOB.getDate();

if (currentDate.getDate() > DOB.getDate()) {
    document.write(diffDate + "days")
} else {
    document.write(DOB.getDate() - currentDate.getDate() + "days")
}