//variables

const form = document.querySelector(".js__form");
const inputWeight = document.querySelector(".js__input__weight");
const inputHeight = document.querySelector(".js__input__weight");

const btnSubmit = document.querySelector(".js__btn__submit");

const modalWrapper = document.querySelector(".js__modal__wrapper");

const modalMessage = document.querySelector(".js_modal_span");

const modalBtnClose = document.querySelector(".js__btn__close");

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const result = IMC(weight, height);
  const message = `Your BMI is ${result}`;
  console.log(result);
  modalMessage.innerText = message;
  modalWrapper.classList.add("open");
};

modalBtnClose.onclick = () =>{modalWrapper.classList.remove('open')}



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
