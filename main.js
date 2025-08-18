const display = document.querySelector("#display");
const botoes = document.querySelectorAll(".botoes button");
let valorAnt="";
let operador="";

document.querySelector(".botoes").addEventListener("click", (event) => {
    const botao = event.target;
    if (botao.hasAttribute("data-valor")) {
        display.value += botao.getAttribute("data-valor");
    }
});

function cleanAll(){
    display.value="";
    valorAnt="";
    operador="";
}

function clean1carac(){
    display.value = display.value.slice(0, -1);
}
document.querySelector("#multi").addEventListener("click", () => {
    valorAnterior = display.value;   
    operador = "x";                  
    display.value="";
});

document.querySelector("#div").addEventListener("click", () => {
    valorAnterior= display.value;
    operador= "÷";
    display.value="";
});

document.querySelector("#sub").addEventListener("click", () => {
    valorAnterior= display.value;
    operador= "-";
    display.value="";
});

document.querySelector("#mais").addEventListener("click", () => {
    valorAnterior= display.value;
    operador= "+";
    display.value="";
});

function porcent(){

}

document.querySelector("#result").addEventListener("click", () => {
    let valorAtual = display.value;
    let resultado;

    if (operador === "x") {
        resultado = Number(valorAnterior) * Number(valorAtual);
    } else if (operador === "+") {
        resultado = Number(valorAnterior) + Number(valorAtual);
    } else if (operador === "-") {
        resultado = Number(valorAnterior) - Number(valorAtual);
    } else if (operador === "÷") {
        resultado = Number(valorAnterior) / Number(valorAtual);
    }

    display.value = resultado;
});

