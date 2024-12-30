//declarations
let sequenceString = ""
let mainSequence = []
let sequenceNumber = []
let correctNumbers = 0
let correctPositions = 0
let times = 0

generateSequence()

//events
document.querySelector("#sequence-form").addEventListener("submit", event => {
    sequenceString = document.querySelectorAll(".sequence-number")


    for (let i = 0; i < 3; i++) {
        sequenceNumber[i] = parseInt(sequenceString[i].value)
    }

    const verification = sequenceNumber.every(item => {
        if(isNaN(item) || item === null || item === undefined || item === "" ){
            document.querySelector("#error").style.display = 'block';
            return false
        }
        else{
            return true
        }
    })

    event.preventDefault();

    
        document.querySelector("#error").style.display = 'none';

        if (verification) {

            times++
            correctNumbers = 0
            correctPositions = 0

            let historySequence = document.createElement("div");
            let resultSequence = document.createElement("div");

            historySequence.id = "history-sequence";
            resultSequence.id = "result-sequence";
            let historyContainer = document.createElement("div");
            document.querySelector("#history").prepend(historyContainer);

            historyContainer.appendChild(historySequence);
            historyContainer.appendChild(resultSequence);

            historySequence.innerHTML +=
                `
        <p class="history-title"> ${times}- </p>
        `

            for (let i = 0; i < 3; i++) {
                historySequence.innerHTML +=
                    `
        <p class="history-numbers">${sequenceString[i].value} </p>
        `
            }

            checkSequence();
            resultSequence.innerHTML += `
        <p class="history-result"> NÚMEROS CORRETOS: ${correctNumbers} POSIÇÕES CORRETAS: ${correctPositions} </p>
        <br>
        `
            console.log(sequenceNumber)
            console.log(correctNumbers, correctPositions)
        }else{
            document.querySelector("#error").style.display = 'block';
        }
    
});

//functions
function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function generateSequence() {
    for (let i = 0; i < 3; i++) {
        mainSequence[i] = randomNumberGenerator(0, 9)
    }
}

function checkSequence() {
    correctNumbers = 0
    correctPositions = 0
    let numberUsed = []
    numberUsed = [false, false, false]

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (numberUsed[j] == false) {
                if (mainSequence[i] == sequenceNumber[j]) {
                    correctNumbers++;
                    numberUsed[j] = true
                    break;
                }
            }
        }
    }
    for (let i = 0; i < 3; i++) {
        if (sequenceNumber[i] == mainSequence[i]) {
            correctPositions++
        }
    }
}

console.log(mainSequence)
