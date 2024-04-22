export const AlertError = {
    element: document.querySelector('.js__alert__error'),
    open() {
        AlertError.element.classList.add('open')
    },

    close() {

        AlertError.element.classList.remove('open')
    }
}

