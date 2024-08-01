
let number1 = 0
let number2 = 0
let op = "+"
let resultado = 0
const displayResultado = document.querySelector("#resultado") //pegando o botão de resultado para mostrar o resultado
const displayDigito1 = document.querySelector("#digito1")
const displayDigito2 = document.querySelector("#digito2")
const displayOperador = document.querySelector("#operador")
const displayCalculo = document.querySelector("#calculo")





//o código abaixo para pegar qual é o valor do primeiro digito
document.querySelector('#digitos1 > #number1').addEventListener('click', function() {
    number1 = 1
    displayDigito1.innerHTML = `Digito 1: ${number1}`
    Calculo()
    return number1
})
document.querySelector('#digitos1 > #number2').addEventListener('click', function() {
    number1 = 2
    displayDigito1.innerHTML = `Digito 1: ${number1}`
    return number1
})
document.querySelector('#digitos1 > #number3').addEventListener('click', function() {
    number1 = 3
    displayDigito1.innerHTML = `Digito 1: ${number1}`
    Calculo()
    return number1
})
document.querySelector('#digitos1 > #number4').addEventListener('click', function() {
    number1 = 4
    displayDigito1.innerHTML = `Digito 1: ${number1}`
    return number1
})
document.querySelector('#digitos1 > #number5').addEventListener('click', function() {
    number1 = 5
    displayDigito1.innerHTML = `Digito 1: ${number1}`
    Calculo()
    return number1
})
document.querySelector('#digitos1 > #number6').addEventListener('click', function() {
    number1 = 6
    displayDigito1.innerHTML = `Digito 1: ${number1}`
    Calculo()
    return number1
})
document.querySelector('#digitos1 > #number7').addEventListener('click', function() {
    number1 = 7
    displayDigito1.innerHTML = `Digito 1: ${number1}`
    Calculo()
    return number1
})
document.querySelector('#digitos1 > #number8').addEventListener('click', function() {
    number1 = 8
    displayDigito1.innerHTML = `Digito 1: ${number1}`
    Calculo()
    return number1
})
document.querySelector('#digitos1 > #number9').addEventListener('click', function() {    
    number1 = 9
    displayDigito1.innerHTML = `Digito 1: ${number1}`
    Calculo()
    return number1
})
document.querySelector('#digitos1 > #number0').addEventListener('click', function() {
    number1 = 0
    displayDigito1.innerHTML = `Digito 1: ${number1}`
    return number1
})


//o código abaixo serve para pegar o valor do segundo digito
document.querySelector('#digitos2 > #number1').addEventListener('click', function() {
    number2 = 1
    displayDigito2.innerHTML = `Digito 2: ${number2}`
    Calculo()
    return number2
})
document.querySelector('#digitos2 > #number2').addEventListener('click', function() {
    number2 = 2
    displayDigito2.innerHTML = `Digito 2: ${number2}`
    Calculo()
    return number2

})
document.querySelector('#digitos2 > #number3').addEventListener('click', function() {
    number2 = 3
    displayDigito2.innerHTML = `Digito 2: ${number2}`
    Calculo()
    return number2
})
document.querySelector('#digitos2 > #number4').addEventListener('click', function() {
    number2 = 4
    displayDigito2.innerHTML = `Digito 2: ${number2}`
    Calculo()
    return number2
})
document.querySelector('#digitos2 > #number5').addEventListener('click', function() {
    number2 = 5
    displayDigito2.innerHTML = `Digito 2: ${number2}`
    Calculo()
    return number2
})
document.querySelector('#digitos2 > #number6').addEventListener('click', function() {
    number2 = 6
    displayDigito2.innerHTML = `Digito 2: ${number2}`
    Calculo()
    return number2
})
document.querySelector('#digitos2 > #number7').addEventListener('click', function() {
    number2 = 7
    displayDigito2.innerHTML = `Digito 2: ${number2}`
    return number2
})
document.querySelector('#digitos2 > #number8').addEventListener('click', function() {
    number2 = 8
    displayDigito2.innerHTML = `Digito 2: ${number2}`
    Calculo()
    return number2
})
document.querySelector('#digitos2 > #number9').addEventListener('click', function() {    
    number2 = 9
    displayDigito2.innerHTML = `Digito 2: ${number2}`
    Calculo()
    return number2
})
document.querySelector('#digitos2 > #number0').addEventListener('click', function() {
    number2 = 0
    displayDigito2.innerHTML = `Digito 2: ${number2}`
    Calculo()
    return number2
})


//o código abaixo serve para pegar qual é o operador
document.querySelector("#operadores > #multiplicar").addEventListener('click', function() {
    op = "*"
    displayOperador.innerHTML = `Operador: X`
    Calculo()
    return op 
})
document.querySelector("#operadores > #div").addEventListener('click', function() {
    op = "/"
    displayOperador.innerHTML = `Operador: ÷`
    Calculo()
    return op 
})
document.querySelector("#operadores > #minus").addEventListener('click', function() {
    op = "-"
    displayOperador.innerHTML = `Operador: -`
    Calculo()
    return op 
})
document.querySelector("#operadores > #plus").addEventListener('click', function() {
    op = "+"
    displayOperador.innerHTML = `Operador: +`
    Calculo()
    return op 
    
})


function reset() { //função para resetar os valores após a operação
    number1 = 0
    number2 = 0
    op = "+"
    displayDigito1.innerHTML = `Digito 1: 0`
    displayDigito2.innerHTML = `Digito 2: 0`
    displayOperador.innerHTML = `Operador: +`
    displayResultado.innerHTML = `Resultado: 0`
    Calculo()
    return number1, number2, op
}

//calculo que acontece depois do click no botão de calcular
document.querySelector("#operadores > #calcular").addEventListener('click', function() {
    switch (op) {
        case "*":
            resultado = number1 * number2
            console.log(resultado)
            displayResultado.innerHTML = `Resultado: ${resultado}`
            novoDigito1()
            Calculo()
            break;
        case "+":
            resultado = number1 + number2
            console.log(resultado)
            displayResultado.innerHTML = `Resultado: ${resultado}`
            novoDigito1()
            Calculo()
            break;
        case "-":
            resultado = number1 - number2
            console.log(resultado)
            displayResultado.innerHTML = `Resultado: ${resultado}`
            novoDigito1()
            Calculo()
            break;
        case "/":
            resultado = number1 / number2
            console.log(resultado)
            displayResultado.innerHTML = `Resultado: ${resultado}`
            novoDigito1()
            Calculo()
            break
        default:
            
            break;
    }
    
})

//botão de reset
document.querySelector("#operadores > #reset").addEventListener('click', reset)

function novoDigito1() { //quando fizer a operação, o resultado dessa operação vai ser o novo digito1
    number1 = resultado
    displayDigito1.innerHTML = `Digito 1: ${number1}`
}

function Calculo() {
    if (op === "*") {
        displayCalculo.innerHTML = `${number1} x ${number2}`
    }
    else if (op === "/") {
        displayCalculo.innerHTML = `${number1} ÷ ${number2}`
    }
    else {
        displayCalculo.innerHTML = `${number1} ${op} ${number2}`
    }
}
