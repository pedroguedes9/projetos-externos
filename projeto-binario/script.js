// initial data
const inputElement = document.querySelector("#inputValue")
const resultElement = document.querySelector("#result")


let choice = document.querySelector("input[name='opChoice']:checked").value
let bin = []
let stringResult 
let valueNumber 
let numberResult = 0


//events
document.querySelector("#formRadio").addEventListener("change", () => {
    inputElement.value = ""
    resultElement.value = ""
    inputElement.placeholder = inputElement.placeholder === "Digite o valor Binário" ? "Digite o valor Decimal" : "Digite o valor Binário"
})


document.querySelector("#convertButton").addEventListener("click", event => { 
    resultElement.value = ""
    const value = inputElement.value
    choice = document.querySelector("input[name='opChoice']:checked").value
    stringResult = "";
    errorTest(value)
    if(!errorTest){
        return
    }
    
    for (let i = 0; i < value.length; i++) {
        if (value[i] !== " ") {
            stringResult += value[i];
        }
    }

    conversionChoice(choice, stringResult)
    
})
document.querySelector("#copyButton").addEventListener("click", event => {
    event.preventDefault()
    const resultText = resultElement.value
    if(resultText.trim() === "") {
        alert("Nada para copiar")
        return
    }
    else {
        navigator.clipboard.writeText(resultText)
            .then(() => {
                alert("Texto copiado com sucesso!")
            })
            .catch(err => {
                console.error("Erro ao copiar o texto: ", err);
            })
        
    }
})

//functions
function conversionChoice(choice, stringResult) { 
    resultElement.value = choice === "decToBin" ? `${decToBin(stringResult).join("")}` : `${binToDec(stringResult)}`
}


function decToBin(value) {
    valueNumber = Number(value)
    let bin = [];
    while(value > 0){
        bin.unshift(value % 2);
        value = Math.floor(value / 2); 
    }
    console.log(bin)
    return bin
    
}

function binToDec(value){ //FALTA COLOCAR O TRATAMENTO PARA ESPAÇOS EM BRANCO
    numberResult = 0
    valueArray = value.split('')
    valueArray.reverse()
    
    for(let i=0; i<valueArray.length;i++){
        if(valueArray[i] === '1'){
            numberResult += 2**i
        }
    }
    
    console.log(numberResult)
    return numberResult
}

function isBinary(input){
    for(let char of input){
        if(char !== '0' && char !== '1'){
            return false
        }
    }
    return true
}


function errorTest (value) {
    if(!isNumeric(value)) {
        alert('Só aceita números');
        inputElement.value = "";
        return false
    }
    else if(choice === 'binToDec' && isBinary(value) == false){
        alert('Só aceita 0 e 1')
        inputElement.value = ""
        return false
    }

    return true
}
function isNumeric(value) {
    return !isNaN(value) && value.trim() !== ""; // Verifica se é um número válido
}
