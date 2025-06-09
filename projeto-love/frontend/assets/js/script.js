const dataPedido = new Date(2025, 0, 4, 15, 0, 0)
let agora, tempoDecorrido, anos, meses, dias, horas, minutos, segundos
let display = Array.from(document.querySelectorAll(".display"))
let tempo = []
let opacity = 0
let recado = document.querySelector("#recado")
console.log(display)
console.log(dataPedido)
document.querySelector("#clique").addEventListener("click", clique => {
    if(getComputedStyle(recado).display === "none") {
        recado.style.display = "block"
    } else {
        recado.style.display = "none"
    }
})
function atualizar() {
    agora = new Date()
    tempoDecorrido = agora - dataPedido
    console.log(tempoDecorrido)
    console.log(agora, agora.getDate(), dataPedido.getDate())

    anos = agora.getFullYear() - dataPedido.getFullYear()
    meses = agora.getMonth() - dataPedido.getMonth()
    dias = agora.getDate() - dataPedido.getDate()
    horas = agora.getHours() - dataPedido.getHours()
    minutos = agora.getMinutes() - dataPedido.getMinutes()
    segundos = agora.getSeconds() - dataPedido.getSeconds()

    opacity += ((meses - 2) * 0.1)

    if (segundos < 0) {
        segundos += 60;
        minutos--;
    }
    if (minutos < 0) {
        minutos += 60;
        horas--;
    }
    if (horas < 0) {
        horas += 24;
        dias--;
    }
    if (dias < 0) {
        let ultimoDiaMesPassado = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
        dias += ultimoDiaMesPassado;
        meses--;
    }
    if (meses < 0) {
        meses += 12;
        anos--;
    }
    if (anos === 0) {
        display[0].parentNode.style.opacity = opacity
        //teste
    }

    tempo = [anos, meses, dias, horas, minutos, segundos]
    tempo.forEach((valor, i) => {
        display[i].textContent = valor
    })
}

let intervalo = setInterval(atualizar, 1000)
atualizar()