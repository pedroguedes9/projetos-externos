const tripDate = new Date(2025, 11, 5)
const totalWaitingTime = 295
const tripTimestamp = tripDate.getTime()
const daysLeftDisplay = document.querySelector(".days-left")
const pctCountdownDisplay = document.querySelector(".pct-countdown")
const progressBar = document.querySelector(".progress-bar")
const msPerDay = 24 * 60 * 60 * 1000 // 86400000
let daysLeft
let pctCountdown

function updateCountdown () {
    let currentDate = new Date()
    let currentTimestamp = currentDate.getTime()
    daysLeftDisplay.textContent = `Calculando...`

    // Converte milissegundos para dias e arredonda para cima
    daysLeft = Math.ceil(((tripTimestamp - currentTimestamp) / msPerDay)) 

    // Garante que a porcentagem fique entre 0% e 100% 
    pctCountdown = (((totalWaitingTime - daysLeft) / totalWaitingTime) * 100).toFixed(1)
    
    if (daysLeft <= 0) {
        daysLeft = 0
        daysLeftDisplay.textContent = `A viagem chegou! \u{1F389}`
        pctCountdown = 100
    } else if (daysLeft === 1) {
        daysLeftDisplay.textContent = `Falta ${daysLeft} dia para a viagem \u{1F389}`
    } else {
        daysLeftDisplay.textContent = `Faltam ${daysLeft} dias para a viagem`
    }
    pctCountdownDisplay.textContent = `${pctCountdown}% concluído`
    progressBar.style.width = `${pctCountdown}%`

    console.log(`📅 Dias restantes: ${daysLeft}`)
    console.log(`📊 Progresso: ${pctCountdown}%`)
    console.log(`🎯 Data da viagem: ${tripDate.toLocaleDateString('pt-BR')}`)
}

updateCountdown()
setInterval(updateCountdown, 3600000)

// Scroll suave forçado para as setas
document.addEventListener('DOMContentLoaded', function() {
    const arrowLinks = document.querySelectorAll('.arrow-wrapper a')
    
    arrowLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault() // Impede o comportamento padrão
            
            const targetId = this.getAttribute('href').substring(1) // Remove o #
            const targetElement = document.getElementById(targetId)
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                })
            }
        })
    })
})




