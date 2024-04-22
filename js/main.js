//variables
import {Modal} from './modal.js'

const form = document.querySelector(".js__form");
const inputWeight = document.querySelector(".js__input__weight");
const inputHeight = document.querySelector(".js__input__height");
//const btnSubmit = document.querySelector(".js__btn__submit");



form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const result = IMC(weight, height);
  const message = `Your BMI is ${result}`;
  //console.log(result);
  Modal.message.innerText = message;

  //modalWrapper.classList.add("open");
  Modal.open()
};





function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
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
    
