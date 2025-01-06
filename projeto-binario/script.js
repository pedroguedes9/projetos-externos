// initial data
let conversion
let inputValue
const inputElement = document.querySelector("#inputValue")
const resultElement = document.querySelector("#result")

//events
document.querySelector("#formRadio").addEventListener("change", () => {
    inputElement.value = ""
})
document.querySelector("#convertButton").addEventListener("click", event => { 
    inputValue = inputElement.value
    conversion = document.querySelector("input[name='opChoice']:checked").value
    conversionChoice(conversion, inputValue)
})

//functions
function conversionChoice(choice, value) {
    if(choice == "decToBin") {
        decToBin(value)
    }
    else{
        binToDec(value)
    }
}

function decToBin(value) {
    let bin = [];
    
    while(value > 0){
        bin.unshift(value % 2);
        value = Math.floor(value / 2); 
    }

    resultElement.textContent = `Resultado: ${bin.join("")}`
}

function binToDec(value){
    console.log(value.split())
}

