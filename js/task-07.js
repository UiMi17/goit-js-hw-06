const fontSizeControlInput = document.querySelector('#font-size-control')
const text = document.querySelector('#text')
const input = document.querySelector('#font-size-control')

text.style.fontSize = `${input.value}px`

fontSizeControlInput.addEventListener('input', (ev) => {
    text.style.fontSize = `${ev.target.value}px`
})
