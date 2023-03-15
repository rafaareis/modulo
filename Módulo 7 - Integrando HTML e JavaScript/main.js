console.log('Olá Mundo');

//3- Criar uma função de validação de nome;//
function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    console.log(nomeComoArray);
    return nomeComoArray.length >= 2;

} 

// 1- Criou uma constante que pega todos os elementos da classe 'form-deposito'
const form = document.getElementById('form-deposito');

//2- Remover o comportamento do formulário de recarregar a página, após o seu envio: //

form.addEventListener('submit', function (e) {
    let formEValido = false;
    e.preventDefault();

    // 4- Criou uma validação de nome 
    const nomeBeneficiario = document.getElementById('nome-beneficiario');
    const numeroConta = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemDeSucesso = `A transação cujo montante no valor de R$ ${valorDeposito.value} foi depositado para o cliente ${nomeBeneficiario.value} que possui a conta ${numeroConta.value} registrada nesse banco.`



    console.log(nomeBeneficiario.value);
    formEValido = validaNome(nomeBeneficiario.value);
    console.log(formEValido);
    if(formEValido) {
        alert(mensagemDeSucesso)

        nomeBeneficiario.value = '';
        numeroConta.value = '';
        valorDeposito.value = '';

    } else {
        alert('O nome não está completo')
    }
    
    
    
})



console.log(form);