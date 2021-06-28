// let direction = {x: 0, y: 0};
// const foodSound = new Audio{'food.mp3'};
// const gameOverSound = new Audio('gameover.mp3');
// const moveSound = new Audio('move.mp3');
// const musicSound = new Audio('music.mp3');
// let speed = 2;
// let lastPaintTime = 0;
// let snakeArr = [
//     {x: 13, y: 15}
// ]

// // game function
// function main(ctime) {
//     window.requestAnimationFrame(main);
//     console.log(ctime)
//     if((ctime - lastPaintTime)/1000 < 1/speed){
//         return;
//     }
//     lastPaintTime = ctime;
//     gameEngine();
// }

// function gameEngine(){
//     // Part 1: Updating the snake array & Food

//     // Part 2: Display the snake and food 
//     board.innerHTML = "";
//     snakeArr.forEach((e, index)=>{
//         snakeElement = document.createElement('div');
//         snakeElement.style.grideRowStart = e.y;
//         snakeElement.sttyle.grideColumnStart = e.x;
//         snakeElement.classList.add('food')
//         board.apppendClind(snakeElement);
//     })

// }




// // main logic start her
// window.requestAnimationFrame(main);




var num = Number(prompt("Enter a number"));
num = 9

if (isNaN(num)) {
    console.log("Please enter a number");
} else if (num % 2 === 0) {
    console.log("This number is Even");
} else {
    console.log("This number is Odd");
}

// var num = Number(prompt("Enter a Number"));
// // num = 15; FizzBuzz
// // num = 9; Fizz
// // num = 10; Buzz 
// // num = 17; num

// if (num % 3 === 0 && num % 5 === 0){
//         console.log("FizzBuzz");
//     } else if (num % 3 === 0) {
//         console.log("Fizz");
//     } else if (num % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(num);
//     }

