let inputSensVal = document.getElementById("sensVal")
let inputSensCs = document.getElementById("sensCs")

function calcularValCs(){
    let sensi = inputSensVal.value
    let calculo = sensi * 3.18
    let resultado = calculo.toFixed(3)
    
    let ResultHtm = document.getElementById("resposta1")
    ResultHtm.style.color = "white"
    ResultHtm.innerHTML = resultado

}

function calcularCsVal(){
    let sensi = inputSensCs.value
    let calculo = sensi / 3.18
    let resultado = calculo.toFixed(3)
    
    let ResultHtm = document.getElementById("resposta2")
    ResultHtm.style.color = "white"
    ResultHtm.innerHTML = resultado

}
    
