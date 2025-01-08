// initial data
const inputElement = document.querySelector("#inputValue")
const resultElement = document.querySelector("#result")


let bin = []
let resultBin = []
let resultDec 
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
    const value = inputElement.value
    let conversion = document.querySelector("input[name='opChoice']:checked").value
    conversionChoice(conversion, value)
    
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
function conversionChoice(choice, valueString) { //função concat
    stringResult = ""
    for (let i = 0; i < valueString.length; i++) {
        if(valueString[i] !== " ") {
            stringResult += valueString[i]
        }
    }

    console.log(stringResult)
    if(choice == "decToBin") {
        resultBin = decToBin(stringResult)
        console.log(resultBin)
        resultElement.textContent = `${resultBin.join("").toString()}`;
        console.log(typeof resultBin.toString())
        
    }
    else{
        resultDec = binToDec(stringResult)
        resultElement.textContent = `${resultDec}`;
    }
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

function binToDec(value){
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

