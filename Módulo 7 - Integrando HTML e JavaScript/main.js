console.log('Olá Mundo');

// 1- Criou uma constante que pega todos os elementos da classe 'form-deposito'
const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formEValido = false;

//3- Criar uma função de validação de nome;//
function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    console.log(nomeComoArray);
    return nomeComoArray.length >= 2;

} 



//2- Remover o comportamento do formulário de recarregar a página, após o seu envio: //

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // 4- Criou uma validação de nome 
    
    const numeroConta = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemDeSucesso = `A transação cujo montante no valor de R$  <b>${valorDeposito.value}</b> foi depositado para o cliente <b>${nomeBeneficiario.value}</b> que possui a conta <b>${numeroConta.value}</b> registrada nesse banco.`



    console.log(nomeBeneficiario.value);
    formEValido = validaNome(nomeBeneficiario.value);
    console.log(formEValido);

    if(formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemDeSucesso;
        containerMensagemSucesso.style.display = 'block';
        //alert(mensagemDeSucesso)

        nomeBeneficiario.value = '';
        numeroConta.value = '';
        valorDeposito.value = '';

    } else {
        containerMensagemSucesso.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})
    
    nomeBeneficiario.addEventListener('keyup', function(e) {
        console.log(e.target.value);
        formEValido = validaNome(e.target.value);

        if(!formEValido) {
            nomeBeneficiario.classList.add('error');
            document.querySelector('.error-message').style.display = 'block';
        } else {
            nomeBeneficiario.classList.remove('error');
            document.querySelector('.error-message').style.display = 'none';
        }
    })
    
    




console.log(form);