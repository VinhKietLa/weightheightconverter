//CONST VARIABLES

const userWeightInput = document.querySelector('#weightInput');
const numberOnlyError = document.querySelector('#numberOnlyError');
const w1 = document.querySelector('.w1');
const w2 = document.querySelector('.w2');
const w3 = document.querySelector('.w3');



//CONVERTS USER INPUT TO GRAMS,STONES AND POUNDS FROM **KG**//
// userWeightInput.addEventListener('input',(event) => {
//   event.preventDefault();
//   if (isNaN(event.target.value) ){
//     numberOnlyError.innerHTML ='Please enter a number only';
//     setTimeout(function(){numberOnlyError.style.display = 'none';}, 2500);
//   }
//   let userInput = event.target.value;
//   pounds.innerHTML = '<p>POUNDS: ' + (userInput * 2.205).toFixed(3) + '</p>';
//   stones.innerHTML = '<p>STONE: ' + (userInput / 6.35).toFixed(3) + '</p>';
//   grams.innerHTML = '<p>GRAMS: ' + userInput * 1000 + '</p>';
//
// });

//CONVERTS USER INPUT TO KG, STONES AND GRAMS FROM **POUNDS**//
// userWeightInput.addEventListener('input',(event) => {
//   event.preventDefault();
//   if (isNaN(event.target.value) ){
//     numberOnlyError.innerHTML ='Please enter a number only';
//     setTimeout(function(){numberOnlyError.style.display = 'none';}, 2500);
//   }
//   let userInput = event.target.value;
//   w1.innerHTML = '<p>KILOGRAM: ' + (userInput / 2.205).toFixed(3) + '</p>';
//   w2.innerHTML = '<p>STONE: ' + (userInput / 14).toFixed(3) + '</p>';
//   w3.innerHTML = '<p>GRAMS: ' + userInput * 453.592 + '</p>';
//
// });

// //CONVERTS USER INPUT TO KG, POUNDS AND GRAMS FROM **STONES**//
// userWeightInput.addEventListener('input',(event) => {
//   event.preventDefault();
//   if (isNaN(event.target.value) ){
//     numberOnlyError.innerHTML ='Please enter a number only';
//     setTimeout(function(){numberOnlyError.style.display = 'none';}, 2500);
//   }
//   let userInput = event.target.value;
//   w1.innerHTML = '<p>KILOGRAM: ' + (userInput * 6.35).toFixed(2) + '</p>';
//   w2.innerHTML = '<p>POUNDS: ' + (userInput * 14).toFixed(2) + '</p>';
//   w3.innerHTML = '<p>GRAMS: ' + (userInput * 6350.293).toFixed(2) + '</p>';
//
// });

//CONVERTS USER INPUT TO KG, POUNDS AND STONES FROM **GRAMS**//
// userWeightInput.addEventListener('input',(event) => {
//   event.preventDefault();
//   if (isNaN(event.target.value) ){
//     numberOnlyError.innerHTML ='Please enter a number only';
//     setTimeout(function(){numberOnlyError.style.display = 'none';}, 2500);
//   }
//   let userInput = event.target.value;
//   w1.innerHTML = '<p>KILOGRAM: ' + (userInput / 1000).toFixed(3) + '</p>';
//   w2.innerHTML = '<p>POUNDS: ' + (userInput / 453.592).toFixed(3) + '</p>';
//   w3.innerHTML = '<p>STONES: ' + (userInput / 6350.293).toFixed(3) + '</p>';
//
// });

//SELECTION OPTION DROPDOWN//
const selectMetric = document.querySelector('#selectMetric');

selectMetric.addEventListener('change',() => {
  alert(selectMetric.value);
});
