// initial data
const inputElement = document.querySelector("#inputValue")
const resultElement = document.querySelector("#result")


let bin = []
let result = []

//events
document.querySelector("#formRadio").addEventListener("change", () => {
    inputElement.value = ""
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
    console.log(valueString)
    let valueTrim = valueString.trim()
    console.log(valueTrim)
    let valueNumber = Number(valueTrim)
    if(choice == "decToBin") {
        result = decToBin(valueNumber)
        
    }
    else{
        result = binToDec(valueNumber)
        
    }
    resultElement.textContent = `${result.join("")}`;
}


function decToBin(value) {
    let bin = [];
    while(value > 0){
        bin.unshift(value % 2);
        value = Math.floor(value / 2); 
    }
    return bin
    
}

function binToDec(value){
    
}

