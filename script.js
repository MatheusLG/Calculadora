const historico = document.querySelector("#historico");
let valorAnt="";
let operador="";

// Seletor de 0 a 9
document.querySelector(".botoes").addEventListener("click", (event) => {
    const botao = event.target;
    if (botao.hasAttribute("data-valor")) {
        display.value += botao.getAttribute("data-valor");
    }
});

//Limpar tudo, inclusive valores anteriores
function cleanAll(){
    display.value="";
    valorAnt="";
    operador="";
    historico.value= "";
}
//limpa somente 1 caracter
function clean1carac(){
    display.value = display.value.slice(0, -1);
}
/*Seletor que armazena o tipo multiplicacao quando tem click,
armazenando valor anterior, o tipo do operador e limpando a tela
*/
document.querySelector("#multi").addEventListener("click", () => {
    valorAnt = display.value;   
    operador = "x";                  
    display.value="";
    historico.value= valorAnt + " " + operador + " ";
});
/*Seletor que armazena o tipo divisao quando tem click,
armazenando valor anterior, o tipo do operador e limpando a tela
*/
document.querySelector("#div").addEventListener("click", () => {
    valorAnt= display.value;
    operador= "÷";
    display.value="";
    historico.value= valorAnt + " " + operador + " ";
});
/*Seletor que armazena o tipo subtracao quando tem click,
armazenando valor anterior, o tipo do operador e limpando a tela
*/
document.querySelector("#sub").addEventListener("click", () => {
    valorAnt= display.value;
    operador= "-";
    display.value="";
    historico.value= valorAnt + " " + operador + " ";
});
/*Seletor que armazena o tipo soma quando tem click,
armazenando valor anterior, o tipo do operador e limpando a tela
*/
document.querySelector("#mais").addEventListener("click", () => {
    valorAnt= display.value;
    operador= "+";
    display.value="";
    historico.value= valorAnt + " " + operador + " ";
});
/*Seletor que armazena o tipo porcentagem quando tem click,
armazenando valor anterior, o tipo do operador e limpando a tela
*/
document.querySelector("#porcent").addEventListener("click", () => {
    valorAnt= display.value;
    operador= "%";
    display.value="";
    historico.value= valorAnt + " " + operador + " ";
});

function ponto(){
    display.value=display.value + ".";
}

function inverteSinal(){    
    if(display.value===""){ display.value="-"}
    if(display.value>0){
        display.value="-" + display.value;
    }
}
/*Seletor da operacao resultado, quando possui click identifica o operador
selecionado e devolve o valor na tela da calculadora
*/
document.querySelector("#result").addEventListener("click", () => {
    let valorAtual = display.value;
    let resultado;

    if (operador === "x") {
        resultado = Number(valorAnt) * Number(valorAtual);
    } else if (operador === "+") {
        resultado = Number(valorAnt) + Number(valorAtual);
    } else if (operador === "-") {
        resultado = Number(valorAnt) - Number(valorAtual);
    } else if (operador === "÷") {
        resultado = Number(valorAnt) / Number(valorAtual);
    } else if (operador === "%") {
        resultado = Number(valorAnt) /100 * Number(valorAtual);
    }
    historico.value = valorAnt + " " + operador + " " + valorAtual
    display.value = resultado;
});

