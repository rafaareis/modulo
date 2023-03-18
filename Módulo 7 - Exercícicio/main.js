//formulário
const formBlock = document.getElementById('form-block');
console.log(formBlock);
//Seleciona input: primeiro número;
const numeroA = document.getElementById('numero-a');
////Seleciona input: segundo número;
const numeroB = document.getElementById('numero-b');
//Comparação
let comparision = false;

//Formula de validação de comparação
function comparisonValidation(numeroA, numeroB) {
    const a = numeroA.value;
    const b = numeroB.value;
    
    return b > a;
}

console.log(comparisonValidation(2, 1));

console.log(comparisonValidation(2, 5));

formBlock.addEventListener('submit', function(e) {
    //remove o comportamento do formulário de recarregar a página
    e.preventDefault();

    comparision = comparisonValidation(numeroA, numeroB);
    console.log(comparision);
})

numeroA.addEventListener('click', function(e) {
    e.target.value;
    console.log(e.target.value);
})

numeroB.addEventListener('click', function(e) {
    e.target.value;
    console.log(e.target.value);
})







