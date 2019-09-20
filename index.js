//WEIGHT JAVASCRIPT//

//CONST VARIABLES
const userWeightInput = document.querySelector('#weightInput');
const w1 = document.querySelector('.w1');
const w2 = document.querySelector('.w2');
const w3 = document.querySelector('.w3');

//Function that converts user input into selected metric output for weight
const weightConversion = () => {
    let userInput = userWeightInput.value;
    if(selectWeight.value === 'KG'){
      w1.innerHTML = '<p>POUNDS: ' + (userInput * 2.205).toFixed(2) + '</p>';
      w2.innerHTML = '<p>STONE: ' + (userInput / 6.35).toFixed(2) + '</p>';
      w3.innerHTML = '<p>GRAMS: ' + userInput * 1000 + '</p>';
    }
    else if (selectWeight.value === 'POUNDS'){
        w1.innerHTML = '<p>KILOGRAM: ' + (userInput / 2.205).toFixed(2) + '</p>';
        w2.innerHTML = '<p>STONE: ' + (userInput / 14).toFixed(2) + '</p>';
        w3.innerHTML = '<p>GRAMS: ' + userInput * 453.592 + '</p>';
    } else if (selectWeight.value === 'STONES'){
        w1.innerHTML = '<p>KILOGRAM: ' + (userInput * 6.35).toFixed(2) + '</p>';
        w2.innerHTML = '<p>POUNDS: ' + (userInput * 14).toFixed(2) + '</p>';
        w3.innerHTML = '<p>GRAMS: ' + (userInput * 6350.293).toFixed(2) + '</p>';
    } else if(selectWeight.value === 'GRAMS'){
        w1.innerHTML = '<p>KILOGRAM: ' + (userInput / 1000).toFixed(2) + '</p>';
        w2.innerHTML = '<p>POUNDS: ' + (userInput / 453.592).toFixed(2) + '</p>';
        w3.innerHTML = '<p>STONES: ' + (userInput / 6350.293).toFixed(3) + '</p>';
    }
};
//END OF WEIGHT JAVASCRIPT//

//HEIGHT JAVASCRIPT//

//CONST VARIABLES
const userHeightInput = document.querySelector('#heightInput');
const h1 = document.querySelector('.h1');
const h2 = document.querySelector('.h2');
const h3 = document.querySelector('.h3');

//Function that converts user input into selected metric output for height

const heightConversion = () => {
  let userInput = userHeightInput.value;
  if(selectHeight.value === 'FT'){
    h1.innerHTML = '<p>METER: ' + (userInput / 3.281).toFixed(2) + '</p>';
    h2.innerHTML = '<p>CM: ' + (userInput * 30.48).toFixed(2) + '</p>';
    h3.innerHTML = '<p>INCH: ' + userInput * 12 + '</p>';
  }
  else if (selectHeight.value === 'METER'){
      h1.innerHTML = '<p>FT: ' + (userInput * 3.281).toFixed(2) + '</p>';
      h2.innerHTML = '<p>CM: ' + (userInput * 100).toFixed(2) + '</p>';
      h3.innerHTML = '<p>INCH: ' + (userInput * 39.37).toFixed(2) + '</p>';
  } else if (selectHeight.value === 'CM'){
      h1.innerHTML = '<p>INCH: ' + (userInput / 2.54).toFixed(2) + '</p>';
      h2.innerHTML = '<p>FT: ' + (userInput / 30.48).toFixed(2) + '</p>';
      h3.innerHTML = '<p>METER: ' + (userInput / 100).toFixed(2) + '</p>';
  } else if(selectHeight.value === 'INCH'){
      h1.innerHTML = '<p>FT: ' + (userInput / 12).toFixed(2) + '</p>';
      h2.innerHTML = '<p>METER: ' + (userInput / 39.37).toFixed(2) + '</p>';
      h3.innerHTML = '<p>CM: ' + (userInput / 2.54).toFixed(2) + '</p>';
  }
};
