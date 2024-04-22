//variables
import { Modal } from "./modal.js";
import  {AlertError} from "./alert_error.js"

const form = document.querySelector(".js__form");
const inputWeight = document.querySelector(".js__input__weight");
const inputHeight = document.querySelector(".js__input__height");
//const btnSubmit = document.querySelector(".js__btn__submit");

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const showAlertError = notNumber(weight) || notNumber(height)
  if(showAlertError) {

    AlertError.open()

    return;
  }

  AlertError.close()




  const result = IMC(weight, height);
  const message = `Your BMI is ${result}`;

  Modal.message.innerText = message;

  Modal.open();
};

//function validaçao de numeros

function notNumber(value){
  return isNaN(value) || value == "" 

}

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
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
