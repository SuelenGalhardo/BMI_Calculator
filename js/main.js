
import { Modal } from "./modal.js";
import { AlertError } from "./alert_error.js";
import { calculateIMC, notNumber } from "./utils.js";

const form = document.querySelector(".js__form");
const inputWeight = document.querySelector(".js__input__weight");
const inputHeight = document.querySelector(".js__input__height");

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightNotNumber = notNumber(weight) || notNumber(height);

  if (weightOrHeightNotNumber) {
    AlertError.open();

    return;
  }

  AlertError.close();
  const result = calculateIMC(weight, height);
  displayResultMessage(result);
  };

function displayResultMessage(result) {

  const message = `Your BMI is ${result}`;
  Modal.message.innerText = message;
  Modal.open();
}



/* form.onsubmit = handleSubmit;
    
    function handleSubmit (event) {
        event.preventDefault()
        
        const weight = inputWeight.value;
        const height = inputHeight.value;
        
        console.log(weight,height)
        
        }
        
form.onsubmit =  function (event) {
    event.preventDefault()
    
    const weight = inputWeight.value;
    const height = inputHeight.value;
    
    console.log(weight,height)
    
    }*/
