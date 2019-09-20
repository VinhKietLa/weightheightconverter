//CONST VARIABLES
const userWeightInput = document.querySelector('#weightInput');
const w1 = document.querySelector('.w1');
const w2 = document.querySelector('.w2');
const w3 = document.querySelector('.w3');

//Function that converts user input into selected metric output
const weightConversion = () => {
    let userInput = userWeightInput.value;
    if(selectMetric.value === 'KG'){
      w1.innerHTML = '<p>POUNDS: ' + (userInput * 2.205).toFixed(3) + '</p>';
      w2.innerHTML = '<p>STONE: ' + (userInput / 6.35).toFixed(3) + '</p>';
      w3.innerHTML = '<p>GRAMS: ' + userInput * 1000 + '</p>';
    }
    else if (selectMetric.value === 'POUNDS'){
        w1.innerHTML = '<p>KILOGRAM: ' + (userInput / 2.205).toFixed(3) + '</p>';
        w2.innerHTML = '<p>STONE: ' + (userInput / 14).toFixed(3) + '</p>';
        w3.innerHTML = '<p>GRAMS: ' + userInput * 453.592 + '</p>';
    } else if (selectMetric.value === 'STONES'){
        w1.innerHTML = '<p>KILOGRAM: ' + (userInput * 6.35).toFixed(2) + '</p>';
        w2.innerHTML = '<p>POUNDS: ' + (userInput * 14).toFixed(2) + '</p>';
        w3.innerHTML = '<p>GRAMS: ' + (userInput * 6350.293).toFixed(2) + '</p>';
    } else if(selectMetric.value === 'GRAMS'){

        w1.innerHTML = '<p>KILOGRAM: ' + (userInput / 1000).toFixed(3) + '</p>';
        w2.innerHTML = '<p>POUNDS: ' + (userInput / 453.592).toFixed(3) + '</p>';
        w3.innerHTML = '<p>STONES: ' + (userInput / 6350.293).toFixed(3) + '</p>';
    }
};
