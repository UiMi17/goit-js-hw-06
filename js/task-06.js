const validationInput = document.querySelector('#validation-input')

validationInput.addEventListener('blur', (ev) => {
    const symbolsCount = [...ev.target.value].length

    if (symbolsCount !== Number(validationInput.getAttribute('data-length'))) {
        validationInput.classList.add('invalid')
        validationInput.classList.remove('valid')
    } else {
        validationInput.classList.add('valid')
        validationInput.classList.remove('invalid')
    }
})

