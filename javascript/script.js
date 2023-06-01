const input = document.getElementById("display");

const digitar = (tecla) =>{
display.value = display.value + tecla
}
const apagar = () =>{  
  let num = display.value
  display.value = num.substring(0, num.length -1)
}
const definirOperacao = (operador) =>{
operacao = operador
valor = input.value
input.value = ""
console.log(valor,operacao)

}
let valor = ""
let operacao = ""

const calcular = () => {
switch (operacao) {
  case "+":
    input.value = Number(valor) + Number(input.value)
    break
  case "-": 
  input.value = Number(valor) - Number(input.value)
    break;
   case "x":input.value = Number(valor) * Number(input.value)
    break;
    case ":":input.value = Number(valor) / Number(input.value)
    break;
  default:
    break;
}}