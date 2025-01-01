//declarations
let sequenceString = ""
let keySequence = []
let inputSequence = []
let correctNumbers = 0
let correctPositions = 0
let times = 0

generateSequence()
debug()
//events
document.querySelector("#sequence-form").addEventListener("submit", event => {
    sequenceString = document.querySelectorAll(".input-sequence")
    event.preventDefault();

    for (let i = 0; i < 3; i++) {
        inputSequence[i] = parseInt(sequenceString[i].value)
    }

    const verification = inputSequence.every(item => {
        if(isNaN(item) || item === null || item === undefined || item === "" ){
            document.querySelector("#error").style.display = 'block';
            return false
        }
        else{
            return true
        }
    })
    
    document.querySelector("#error").style.display = 'none';

    if (verification) {
        times++
        correctNumbers = 0
        correctPositions = 0

        let historyContainer = document.createElement("div");
        let historySequence = document.createElement("div");
        let resultSequence = document.createElement("div");

        historyContainer.id = "history-container";
        historySequence.id = "history-sequence";
        resultSequence.id = "result-sequence";
        
        document.querySelector("#history").prepend(historyContainer);

        historyContainer.appendChild(historySequence);
        historyContainer.appendChild(resultSequence);

        historySequence.innerHTML += ` <p class="history-title"> ${times}- </p> `

        for (let i = 0; i < 3; i++) {
            historySequence.innerHTML += `<p class="history-numbers">${sequenceString[i].value} </p>`
        }

        checkSequence();
        debug()
        resultSequence.innerHTML += `<p class="history-result"> NÚMEROS CORRETOS: <strong>${correctNumbers}</strong> POSIÇÕES CORRETAS:<strong> ${correctPositions}</strong> </p>`
    }  
    else {
        document.querySelector("#error").style.display = 'block';
    }
    winVerify()
});
document.querySelectorAll("#reset-button").forEach(button => {
    button.addEventListener("click", () => {
        location.reload()
    })
})
document.querySelector("#rules-button").addEventListener("click", event => {
    event.preventDefault()
    
    if(document.querySelector("#rules").style.display == "block"){
        document.querySelector("#rules").style.display = "none"
        document.querySelector("#rules-button").textContent = "Mostrar regras"  
    } else {
        document.querySelector("#rules").style.display = "block"
        document.querySelector("#rules-button").textContent = "Esconder regras"
    }

    
})


//functions
function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function generateSequence() {
    for (let i = 0; i < 3; i++) {
        keySequence[i] = randomNumberGenerator(0, 9)
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
                if (keySequence[i] == inputSequence[j]) {
                    correctNumbers++;
                    numberUsed[j] = true
                    break;
                }
            }
        }
    }
    for (let i = 0; i < 3; i++) {
        if (inputSequence[i] == keySequence[i]) {
            correctPositions++
        }
    }
}

function debug() {
    console.log(`inputSequence: ${inputSequence}`)
    console.log(`keySequence: ${keySequence}`)
    console.log(`correctNumbers: ${correctNumbers}`)
    console.log(`correctPositions: ${correctPositions}`) 
}

function winVerify() {
    if (correctPositions === 3 && correctNumbers === 3 && times <=13) {
        document.querySelector("#win").style.display = 'block';
        document.querySelectorAll(".input-sequence").forEach(input => {
            input.style.backgroundColor = "green" 
        })
        document.querySelector("#submit").style.display = "none"
        document.querySelector("#history-container").style.backgroundColor = "green"

        
    }

    else if(correctPositions == 0 && correctNumbers==0 && times < 13){
        document.querySelectorAll(".input-sequence").forEach(input => {
            input.style.backgroundColor = "red" 
        })
        
    }

    else if(correctNumbers > 0 && correctNumbers <=3 && correctPositions >= 0 && correctPositions <3 && times < 13){
        document.querySelectorAll(".input-sequence").forEach(input => {
            input.style.backgroundColor = "yellow" 
        })
        
    }

    else{
        document.querySelector("#submit").style.display = "none" 
        document.querySelector("#defeat").style.display = "block"
    }

}

