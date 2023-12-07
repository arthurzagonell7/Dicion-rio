

const palavra = document.querySelectorAll('.palavra')
const box = document.querySelectorAll('.box')
const fechar = document.querySelectorAll('.fechar')
const botaoAudio = document.querySelectorAll('.audioPalavras')

palavra[0].addEventListener('click', ()=>{
    box[0].style.display = 'block'
    audio = new Audio("./Audios/colonel.ogg")
})

fechar[0].addEventListener('click', ()=>{
    box[0].style.display = 'none'
})

// ---------------------------------------------------------

palavra[1].addEventListener('click', ()=>{
    box[1].style.display = 'block'
    audio = new Audio("./Audios/squirrel.ogg")
})

fechar[1].addEventListener('click', ()=>{
    box[1].style.display = 'none'
})

// -------------------------------------------------------------------

palavra[2].addEventListener('click', ()=>{
    box[2].style.display = 'block'
    audio = new Audio("./Audios/vacation.ogg")
})

fechar[2].addEventListener('click', ()=>{
    box[2].style.display = 'none'
})

palavra[3].addEventListener('click', ()=>{
    box[3].style.display = 'block'
    audio = new Audio("./Audios/branch.ogg")
})

fechar[3].addEventListener('click', ()=>{
    box[3].style.display = 'none'
})

palavra[4].addEventListener('click', ()=>{
    box[4].style.display = 'block'
    audio = new Audio("./Audios/cheerful.ogg")
})

fechar[4].addEventListener('click', ()=>{
    box[4].style.display = 'none'
})

palavra[5].addEventListener('click', ()=>{
    box[5].style.display = 'block'
    audio = new Audio("./Audios/kale.ogg")
})

fechar[5].addEventListener('click', ()=>{
    box[5].style.display = 'none'
})

palavra[6].addEventListener('click', ()=>{
    box[6].style.display = 'block'
    audio = new Audio("./Audios/half.ogg")
})

fechar[6].addEventListener('click', ()=>{
    box[6].style.display = 'none'
})

palavra[7].addEventListener('click', ()=>{
    box[7].style.display = 'block'
    audio = new Audio("./Audios/olives.ogg")
})

fechar[7].addEventListener('click', ()=>{
    box[7].style.display = 'none'
})

palavra[8].addEventListener('click', ()=>{
    box[8].style.display = 'block'
    audio = new Audio("./Audios/mascara.ogg")
})

fechar[8].addEventListener('click', ()=>{
    box[8].style.display = 'none'
})

palavra[9].addEventListener('click', ()=>{
    box[9].style.display = 'block'
    audio = new Audio("./Audios/flood.ogg")
})

fechar[9].addEventListener('click', ()=>{
    box[9].style.display = 'none'
})


botaoAudio.forEach((palavra) => {
    palavra.addEventListener('click', () => {
        audio.play()
    })
})


