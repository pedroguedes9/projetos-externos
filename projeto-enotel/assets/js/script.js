const tripDate = new Date("2025-12-5")
let currentDate = new Date()
const totalWaitingTime = 295

let currentDateMilsec = currentDate.getTime()
let tripDateMilsec = tripDate.getTime()
let daysLeft = ((tripDateMilsec - currentDateMilsec) / 86400000).toFixed()

const daysLeftDisplay = document.querySelector(".days-left")
daysLeftDisplay.textContent = `Faltam ${daysLeft} dias para a viagem`


let pctCountdown = ((daysLeft / totalWaitingTime ) * 100).toFixed()
const pctCountdownDisplay = document.querySelector(".pct-countdown")
pctCountdownDisplay.textContent = `${pctCountdown}% concluído`
const progressBar = document.querySelector(".progress-bar")
progressBar.style.width = `${pctCountdown}%`

console.log(pctCountdown)
console.log(currentDateMilsec)
console.log(tripDateMilsec)


