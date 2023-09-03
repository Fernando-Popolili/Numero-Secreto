const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;

var recognition = new SpeechRecognition()
recognition.lang = 'pt-br'
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    const chute = e.results[0][0].transcript
    exibeNaTela(chute)
    verificaSeOChutePossuiUmValorValido(chute)
}

function exibeNaTela(chute){
    elementoChute.innerHTML =  
    `<div>Você disse:</div>
    <span class="box">${chute}</span>`
}

recognition.addEventListener('end', () => recognition.start())
