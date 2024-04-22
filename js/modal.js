//object literal- modal

export const Modal = {

    wrapper: document.querySelector(".js__modal__wrapper"),
    message: document.querySelector(".js_modal_span"),
    btnClose:  document.querySelector(".js__btn__close"),
  
    open() {
      Modal.wrapper.classList.add("open");
    },
    close(){
      Modal.wrapper.classList.remove('open')
    }
  
  }

  Modal.btnClose.onclick = () => {
    // modalWrapper.classList.remove('open')
    Modal.close()
   }