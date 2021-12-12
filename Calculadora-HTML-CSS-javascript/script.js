document.querySelector("body").style.backgroundColor = "#f00";

//capiturar teclas do teclado

var obtendoTecla = document.querySelectorAll(".teclaCalculadora");
var teclaIgual = document.querySelector(".teclaIgual");

//mostrar resultado

function mostrarResultado(){
    document.querySelector(".display-calculadora").textContent = eval(
        document.querySelector(".display-calculadora").textContent
        );
}

//preencher display

    teclaIgual.onclick = mostrarResultado;

for(let c = 0; c < obtendoTecla.length; c++) {

    function preencherDisplay(){
    var tecla_num1 = document.querySelectorAll(".teclaCalculadora")[c].textContent;
    document.querySelector(".display-calculadora").textContent = 
    document.querySelector(".display-calculadora").textContent.concat(tecla_num1);
    }

    document.querySelectorAll(".teclaCalculadora")[c].onclick = preencherDisplay;
};
