/*
**Consegna**
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

/*
Creare funzione per inserire X volte i quadrati e creare la griglia

Creare un numero randomico da 1 a 100 che non si ripete

Identificare i numeri pari dai dispari e assegnare rispettive classi

Creare evento sul click che rivela il contenuto del quadrato

*/


const container = document.querySelector(".campo-container");

init();

function init (){

  for(let i = 0; i < 100; i++){

    const square = squareMaker(container)

    } 
}





function squareMaker(target) {

  const square = document.createElement("div");

  square.className = "square" + " " + "hard" ;
  
  target.append(square);

  return square;
}









// const numberList = [];
// function getNoRepeatNumber(min, max) {
  
//   let number, valid ;
//   console.log(number);
  
//   while(!valid){

//     number = getRandomNumber(min, max);

//     if(!numberList.includes(number)){

//       valid = true;

//       numberList.push(number)
//     }

//   }
//   return number;
// }


// function getRandomNumber(min, max){

//   return Math.floor(Math.random() * (max - min + 1)+ min);

// }
