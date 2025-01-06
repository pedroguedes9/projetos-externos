// initial data
const inputElement = document.querySelector("#inputValue")
const resultElement = document.querySelector("#result")

//events
document.querySelector("#formRadio").addEventListener("change", () => {
    inputElement.value = ""
})
document.querySelector("#convertButton").addEventListener("click", event => { 
    const value = inputElement.value
    const conversion = document.querySelector("input[name='opChoice']:checked").value
    conversionChoice(conversion, value)
})

//functions
function conversionChoice(choice, value) {
    if(choice == "decToBin") {
        decToBin(value)
    }
    else{
        binToDec(value)
    }
    resultElement.textContent = `Resultado: ${bin.join("")}`
}

function decToBin(value) {
    let bin = [];
    
    while(value > 0){
        bin.unshift(value % 2);
        value = Math.floor(value / 2); 
    }

    
}

function binToDec(value){
    console.log(value.split())
}

