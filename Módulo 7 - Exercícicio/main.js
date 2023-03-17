//formulário
const formBlock = document.getElementById('form-block');
console.log(formBlock);

const numeroA = document.getElementById('numero-a');
console.log(numeroA)

formBlock.addEventListener('submit', function(e) {
    //remove o comportamento do formulário de recarregar a página
    e.preventDefault();
})

