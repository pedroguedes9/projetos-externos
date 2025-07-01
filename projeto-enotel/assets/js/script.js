const tripDate = new Date(2025, 11, 5)
const totalWaitingTime = 295
const totalWaitingTimeHours = totalWaitingTime * 24 //número de horas
const tripTimestamp = tripDate.getTime()
const daysLeftDisplay = document.querySelector(".days-left")
const pctCountdownDisplay = document.querySelector(".pct-countdown")
const progressBar = document.querySelector(".progress-bar")
const msPerHour = 60 * 60 * 1000 // 3600000
let daysLeft
let pctCountdown
let hoursLeft

function updateCountdown () {
    let currentDate = new Date()
    let currentTimestamp = currentDate.getTime()
    daysLeftDisplay.textContent = `Calculando...`

    // Converte milissegundos para horas e arredonda para cima
    hoursLeft = Math.ceil((tripTimestamp - currentTimestamp) / msPerHour)
    // Converte horas para dias e arredonda para baixo (mais preciso)
    daysLeft = Math.ceil(hoursLeft / 24)


    // Garante que a porcentagem fique entre 0% e 100% 
pctCountdown = Math.max(0, Math.min(100, 
    ((totalWaitingTimeHours - hoursLeft) / totalWaitingTimeHours * 100)
)).toFixed(2) // 2 casas decimais para ver mudanças menores
    
    if (daysLeft <= 0) {
        daysLeft = 0
        daysLeftDisplay.innerHTML = `<i class="fa-solid fa-suitcase-rolling"></i> A viagem chegou! \u{1F389}`
        pctCountdown = 100
    } else if (daysLeft === 1) {
        daysLeftDisplay.innerHTML = `<i class="fa-solid fa-suitcase-rolling"></i> Falta ${daysLeft} dia para a viagem \u{1F389}`
    } else {
        daysLeftDisplay.innerHTML = `<i class="fa-solid fa-suitcase-rolling"></i> Faltam ${daysLeft} dias para a viagem`
    }
    pctCountdownDisplay.innerHTML = `${pctCountdown}% concluído <i class="fa-solid fa-circle-notch fa-spin"></i>`
    progressBar.style.width = `${pctCountdown}%`

    console.log(`📅 Dias restantes: ${daysLeft}`)
    console.log(`📊 Progresso: ${pctCountdown}%`)
    console.log(`🎯 Data da viagem: ${tripDate.toLocaleDateString('pt-BR')}`)
    console.log(hoursLeft)
}

updateCountdown()
setInterval(updateCountdown, 3600000)






