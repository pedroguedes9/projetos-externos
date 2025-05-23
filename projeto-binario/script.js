// initial data
const inputElement = document.querySelector("#inputValue")
const resultElement = document.querySelector("#result")


let choice = document.querySelector("input[name='opChoice']:checked").value
let binaryArray = []
let stringResult 
let valueNumber 
let numberResult = 0


//events
document.querySelector("#formRadio").addEventListener("change", () => {
    inputElement.value = ""
    resultElement.value = ""
    if(inputElement.placeholder === "Digite o valor Binário") {
        inputElement.placeholder = "Digite o valor Decimal"
    }
    else{
        inputElement.placeholder = "Digite o valor Binário"
        
    }
    

})
document.querySelector("#convertButton").addEventListener("click", event => { 
    resultElement.value = ""
    const value = inputElement.value.replace(/\s+/g, "")
    choice = document.querySelector("input[name='opChoice']:checked").value
    stringResult = "";
    
    
    if(!errorTest(value)){
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
    let binaryArray = [];
    while(value > 0){
        binaryArray.unshift(value % 2);
        value = Math.floor(value / 2); 
    }
    console.log(binaryArray)
    return binaryArray
    
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
    if(choice === 'binToDec' && isBinary(value) == false){
        alert('Só aceita 0 e 1')
        inputElement.value = ""
        return false
    }
    

    return true
}
function isNumeric(value) {
    return !isNaN(value) && value.trim() !== ""; // Verifica se é um número válido
}
