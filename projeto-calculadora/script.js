
let number1 = 0
let number2 = 0
let op = "+"
let resultado = 0
const botaoResultado = document.querySelector("#resultado") //pegando o botão de resultado para mostrar o resultado

//o código abaixo para pegar qual é o valor do primeiro digito
document.querySelector('#digitos1 > #number1').addEventListener('click', function() {
    number1 = 1
    return number1
})
document.querySelector('#digitos1 > #number2').addEventListener('click', function() {
    number1 = 2
    return number1
})
document.querySelector('#digitos1 > #number3').addEventListener('click', function() {
    number1 = 3
    return number1
})
document.querySelector('#digitos1 > #number4').addEventListener('click', function() {
    number1 = 4
    return number1
})
document.querySelector('#digitos1 > #number5').addEventListener('click', function() {
    number1 = 5
    return number1
})
document.querySelector('#digitos1 > #number6').addEventListener('click', function() {
    number1 = 6
    return number1
})
document.querySelector('#digitos1 > #number7').addEventListener('click', function() {
    number1 = 7
    return number1
})
document.querySelector('#digitos1 > #number8').addEventListener('click', function() {
    number1 = 8
    return number1
})
document.querySelector('#digitos1 > #number9').addEventListener('click', function() {    
    number1 = 9
    return number1
})
document.querySelector('#digitos1 > #number0').addEventListener('click', function() {
    number1 = 0
    return number1
})


//o código abaixo serve para pegar o valor do segundo digito
document.querySelector('#digitos2 > #number1').addEventListener('click', function() {
    number2 = 1
    return number2
})
document.querySelector('#digitos2 > #number2').addEventListener('click', function() {
    number2 = 2
    return number2

})
document.querySelector('#digitos2 > #number3').addEventListener('click', function() {
    number2 = 3
    return number2
})
document.querySelector('#digitos2 > #number4').addEventListener('click', function() {
    number2 = 4
    return number2
})
document.querySelector('#digitos2 > #number5').addEventListener('click', function() {
    number2 = 5
    return number2
})
document.querySelector('#digitos2 > #number6').addEventListener('click', function() {
    number2 = 6
    return number2
})
document.querySelector('#digitos2 > #number7').addEventListener('click', function() {
    number2 = 7
    return number2
})
document.querySelector('#digitos2 > #number8').addEventListener('click', function() {
    number2 = 8
    return number2
})
document.querySelector('#digitos2 > #number9').addEventListener('click', function() {    
    number2 = 9
    return number2
})
document.querySelector('#digitos2 > #number0').addEventListener('click', function() {
    number2 = 0
    return number2
})


//o código abaixo serve para pegar qual é o operador
document.querySelector("#operadores > #multiplicar").addEventListener('click', function() {
    op = "*"
    return op 
})
document.querySelector("#operadores > #div").addEventListener('click', function() {
    op = "/"
    return op 
})
document.querySelector("#operadores > #minus").addEventListener('click', function() {
    op = "-"
    return op 
})
document.querySelector("#operadores > #plus").addEventListener('click', function() {
    op = "+"
    return op 
})


function reset() { //função para resetar os valores após a operação
    number1 = 0
    number2 = 0
    op = "+"
    return number1, number2, op
}

//calculo que acontece depois do click no botão de calcular
document.querySelector("#operadores > #calcular").addEventListener('click', function() {
    switch (op) {
        case "*":
            resultado = number1 * number2
            console.log(resultado)
            botaoResultado.innerHTML = `Resultado: ${resultado}`
            reset()
            break;
        case "+":
            resultado = number1 + number2
            console.log(resultado)
            botaoResultado.innerHTML = `Resultado: ${resultado}`
            reset()
            break;
        case "-":
            resultado = number1 - number2
            console.log(resultado)
            botaoResultado.innerHTML = `Resultado: ${resultado}`
            reset()
            break;
        case "/":
            resultado = number1 / number2
            console.log(resultado)
            botaoResultado.innerHTML = `Resultado: ${resultado}`
            reset()
            break
        default:
            
            break;
    }
    
})

//botão de reset
document.querySelector("#operadores > #reset").addEventListener('click', reset)


