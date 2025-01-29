const dataPedido = new Date(2025, 0, 4, 15, 0, 0)
let agora, tempoDecorrido, anos, meses, dias, horas, minutos, segundos
let display = Array.from(document.querySelectorAll(".display"))
let tempo = []
console.log(display)
console.log(dataPedido)


function atualizar() {
    agora = new Date()
    tempoDecorrido = agora - dataPedido
    console.log(tempoDecorrido)

    anos = Math.floor(tempoDecorrido / (1000 * 60 * 60 * 24 * 365))
    meses = Math.floor(tempoDecorrido / (1000 * 60 * 60 * 24 * (365/12)))
    dias = Math.floor(tempoDecorrido / (1000 * 60 * 60 * 24))
    horas = Math.floor((tempoDecorrido / (1000 * 60 * 60) )% 24)
    minutos = Math.floor((tempoDecorrido / (1000 * 60)) % 60)
    segundos = Math.floor((tempoDecorrido / 1000) % 60)
    
    

    tempo = [anos, meses, dias, horas, minutos, segundos]
    for (let i = 0; i < display.length; i++) {
        display[i].textContent = tempo[i]
        
        
    }
    
}
let intervalo = setInterval(atualizar, 1000)
atualizar()