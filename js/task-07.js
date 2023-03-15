const fontSizeControlInput = document.querySelector('#font-size-control')
const text = document.querySelector('#text')

fontSizeControlInput.addEventListener('input', (ev) => {
    text.style.fontSize = `${ev.target.value}px`
})
