// // 'use strict';
// // console.log(document.querySelector('.message').textContent);
// // document.querySelector('.message').textContent = 'Correct Number';
// // document.querySelector('.number').textContent = 13;
// // document.querySelector('.score').textContent = 20;
// // document.querySelector('.guess').value = 23;
// // console.log(document.querySelector('.guess').value);
// let score =  20;
// let highScore = 0;   
//    const message = "Correct";

// //   const highscore = number(document.querySelector('.score'));
  


// let number = Math.trunc(Math.random() * 20) + 1;
// console.log(number);


// const x = function(){
//     document.querySelector(".score").textContent = score;
//    const guess = Number(document.querySelector('.guess').value);
//    console.log(guess);

//    if(!guess){
//     document.querySelector('.message').textContent  = 'No Number';
//    }

//    else if(guess === number){

//     document.querySelector('.message').textContent = "Congratulations you have won";
//     document.querySelector('.number').textContent = number;
//     document.querySelector('.number').style.width = '30rem';
//     document.querySelector('body').style.backgroundColor = '#60b347';

//     if(score > highScore){
//         highScore = score;
//         document.querySelector('.highscore').textContent = score;
//     }
//    }

   
   

//     if (score < 1){
//         document.querySelector('.message').textContent = "You Lost the game";
//     }
//     else{
//     document.querySelector('.message').textContent = guess > number  ? "too high" :  "too low";
//     score --;
//     document.querySelector('.score').textContent = score;
//     }


// //    else{
// //     if (score < 1){
// //         document.querySelector('.message').textContent = "You Lost the game";
// //     }
// //     else{
// //     document.querySelector('.message').textContent = 'Too High';
// //     score --;
// //     document.querySelector('.score').textContent = score;
// //     }
// //    }


// }

// const y = function() {
//     score = 20;
//     document.querySelector(".score").textContent = score;
//      number = Math.trunc(Math.random() * 20) + 1;
//      console.log(number);
//     document.querySelector('.message').textContent = "Start Guessing...";
//     document.querySelector('body').style.backgroundColor = '#222';
//     document.querySelector('.guess').value = ' ';
//     document.querySelector('.number').textContent = '?';
//     document.querySelector('.number').style.width = '15rem';
// }

// document.querySelector('.check').addEventListener('click', x);

// document.querySelector('.again').addEventListener('click', y);




function nameGetter(name){
    console.log(`my name is ${name}`);
}

nameGetter('Aji')
