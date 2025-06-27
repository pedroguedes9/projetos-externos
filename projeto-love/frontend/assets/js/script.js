const dataPedido = new Date(2025, 0, 4, 15, 0, 0)
let agora, tempoDecorrido, anos, meses, dias, horas, minutos, segundos
let display = Array.from(document.querySelectorAll(".display"))
let tempo = []
let opacity 
let recado = document.querySelector("#recado")
const body = document.querySelector("body")
const audio = document.querySelector(".audio") 
const nav = document.querySelector(".nav")
console.log(display)
console.log(dataPedido)
document.querySelector(".hamburger").addEventListener("click", () => {
    nav.classList.toggle("active"); // Alterna a classe 'active' na navegação

    // Verifica se a navegação AGORA tem a classe 'active'
    if (nav.classList.contains("active")) {
        // Se a navegação está ativa (aberta)
        body.style.overflow = "hidden"; // Impede a rolagem do corpo
        audio.style.transition = "z-index 0s"
        audio.style.zIndex = -1;       // Coloca o áudio atrás de outros elementos
    } else {
        // Se a navegação não está ativa (fechada)
        body.style.overflow = "auto";  // Permite a rolagem do corpo
        audio.style.transition = "z-index 3s"
        audio.style.zIndex = 1;        // Traz o áudio para a frente novamente
    }
});
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

    opacity = ((meses - 2) * 0.1)

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
        console.log(display[0].parentNode.style.opacity)
    }


    tempo = [anos, meses, dias, horas, minutos, segundos]
    tempo.forEach((valor, i) => {
        display[i].textContent = valor
    })
}

let intervalo = setInterval(atualizar, 1000)
atualizar()