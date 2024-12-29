//declarations
let sequenceString = []
let mainSequence = []
let sequenceNumber = []
generateSequence()


//events
document.querySelector("#sequence-form").addEventListener("submit", event => {
    event.preventDefault();
    sequenceString = document.querySelectorAll(".sequence-number")

    
    let historySequence = document.createElement("div");
    historySequence.id = "history-sequence";
    document.querySelector("#history").appendChild(historySequence);
    for(let i=0; i<3;i++){
        historySequence.innerHTML += 
    `
    <p class="history-numbers">${sequenceString[i].value} </p>
    `
    for(let i=0; i<3;i++) {
        sequenceNumber[i] = parseInt(sequenceString[i].value)
    }
    console.log(sequenceNumber)
    console.log(sequenceString)
}
    
});

//functions
function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


function generateSequence() {
    for (let i = 0; i < 3; i++) {
        mainSequence[i].push(randomNumberGenerator(0, 9))
    }
    
}
console.log(mainSequence)
function checkSequence() {
    
}