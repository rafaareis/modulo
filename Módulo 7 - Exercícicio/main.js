const container = document.getElementById('container-id');
console.log(container);
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

const mensagemDeSucesso = document.querySelector('.success-message');
console.log(mensagemDeSucesso);

const mensagemDeErro = document.querySelector('.error-message');
console.log(mensagemDeErro);

container.addEventListener('click', function(e) {
    e.target.value;
    console.log(e.target.value);

    mensagemDeErro.style.display = 'none';
    mensagemDeSucesso.style.display = 'none';
})

formBlock.addEventListener('submit', function(e) {
    //remove o comportamento do formulário de recarregar a página
    e.preventDefault();

    comparision = comparisonValidation(numeroA, numeroB);
    console.log(comparision);


    if(comparision) {
     mensagemDeSucesso.style.display = 'block';
     mensagemDeErro.style.display = 'none';
     numeroA.value = '';
     numeroB.value = '';    
    } else {
        mensagemDeErro.style.display = 'block';
        mensagemDeSucesso.style.display = 'none';
        numeroA.value = '';
        numeroB.value = '';    
   
    }
    

})

numeroA.addEventListener('click', function(e) {
    e.target.value;
    console.log(e.target.value);

    mensagemDeErro.style.display = 'none';
    mensagemDeSucesso.style.display = 'none';
})

numeroB.addEventListener('click', function(e) {
    e.target.value;
    console.log(e.target.value);
})







