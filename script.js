const historico = document.querySelector("#historico");
let valorAnt = "";
let operador = "";
// Seletor de 0 a 9
document.querySelector(".botoes").addEventListener("click", (event) => {
    const botao = event.target;
    if (botao.hasAttribute("data-valor")) {
        display.value += botao.getAttribute("data-valor");
    }
});
// Limpar tudo
document.querySelector("#CE").addEventListener("click", () => {
    display.value = "";
    valorAnt = "";
    operador = "";
    historico.value = "";
});
// Limpar o ultimo caracter
document.querySelector("#C").addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
});
// Ponto para calculos com valores racionais como 2.5+ 3.7
document.querySelector("#ponto").addEventListener("click", () => {
    if (!display.value.includes(".")) {
        display.value += ".";
    }
});
// Inverter sinal
document.querySelector("#sinal").addEventListener("click", () => {
    if (display.value.startsWith("-")) {
        display.value = display.value.slice(1);
    } else if (display.value !== "") {
        display.value = "-" + display.value;
    }
});
// Função para calcular resultado
function calcularResultado() {
    if (valorAnt === "" || operador === "" || display.value === "") return;
    let valorAtual = display.value;
    let resultado;
    let expressaoHist = valorAnt + " " + operador + " " + valorAtual;//armazena os valores para depois mostrar o historico
    if (operador === "+") resultado = Number(valorAnt) + Number(valorAtual);
    else if (operador === "-") resultado = Number(valorAnt) - Number(valorAtual);
    else if (operador === "x") resultado = Number(valorAnt) * Number(valorAtual);
    else if (operador === "÷") resultado = Number(valorAnt) / Number(valorAtual);
    else if (operador === "%") resultado = Number(valorAnt) / 100 * Number(valorAtual);
    historico.value = expressaoHist;
     resultado = parseFloat(resultado.toFixed(2));
    display.value = resultado;
    valorAnt = resultado;
    operador = "";
}
// Funcao para definir operador e encadear calculos
function setOperador(op) {
    if (display.value !== "" && valorAnt !== "" && operador !== "") {
        calcularResultado(); 
    } else if (display.value !== "" && valorAnt === "") {
        valorAnt = display.value;
    }
    operador = op;
    historico.value = valorAnt + " " + operador;
    display.value = "";
}
document.addEventListener("keydown", function(event) {
    if (event.key >= 0 && 9) {
        display.value += event.key; 
    }
    if(event.key === 'Backspace' ){
        display.value = display.value.slice(0,-1);
    }
    if(event.key === 'Enter'){
        calcularResultado();
    }
     if (event.key === "+") setOperador("+");
    if (event.key === "-") setOperador("-");
    if (event.key === "x") setOperador("x");
    if (event.key === "*") setOperador("x");
    if (event.key === "/") setOperador("÷");
    if (event.key === "%") setOperador("%");
    if (event.key === ".") {
        if (!display.value.includes(".")) {
            display.value += ".";
        }
    }
});
// Seletor de tipo de operacao que vai ser feita
document.querySelector("#mais").addEventListener("click", () => setOperador("+"));
document.querySelector("#sub").addEventListener("click", () => setOperador("-"));
document.querySelector("#multi").addEventListener("click", () => setOperador("x"));
document.querySelector("#div").addEventListener("click", () => setOperador("÷"));
document.querySelector("#porcent").addEventListener("click", () => setOperador("%"));
//Calcula e Mostra o resultado
document.querySelector("#result").addEventListener("click", () => {
    calcularResultado();
});
