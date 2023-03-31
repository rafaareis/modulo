const form = document.getElementById('form-contato')
console.log(form)
const linhaContato = document.querySelector('.id-contato');
console.log(linhaContato);

const inputNomeContato = document.querySelector('#nome-contato');
const inputDdi = document.querySelector('#ddi-contato');
const inputDdd = document.querySelector('#ddd-contato');
const inputNumeroContato = document.querySelector('#numero-contato');
const tabelaContato = document.querySelector("#tabela-contato");

const contatos = [];
const ddis = [];
const ddds = [];
const numeros = [];

const numerosRemovidos = 0;


console.log(numeros.length);

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    contatosCadastrados();
    adicionaLinha();
    atualizaTabela();
});



function contatosCadastrados() {
    const h2ContatosCadastrados = document.querySelector('#numeros-cadastrados');
    numeros.push(inputNumeroContato.value);
    h2ContatosCadastrados.innerHTML = `<h2 id="numeros-cadastrados">Total de contatos cadastrados: ${numeros.length}</h2>`
}

function adicionaLinha() {


    contatos.push(inputNomeContato.value);
    ddis.push(parseFloat(inputDdi.value));
    ddds.push(parseFloat(inputDdd.value));
    // numeros.push(inputNumeroContato.value);




    console.log(numeros.length);
    console.log(numeros);

    let linha = `<tr class=${inputNumeroContato.value} >`;
    linha += `<td>${numeros.length}</td>`;
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>+${inputDdi.value}</td>`;
    linha += `<td>${inputDdd.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += `<td>`;
    linha += `<a class="whatsapp-link" href=`+`https://web.whatsapp.com/send?phone=${inputDdi.value}${inputDdd.value}${inputNumeroContato.value} >`;
    linha += `<img src="images/whatsapp.png" alt="Link do WhatsApp" />`;
    linha += `</a>`;
    linha += `</td>`;
    linha += `<td>`;
    linha += `<button class="deletaLinha">x</button>`;
    linha += `</td>`;
    linha += `</tr>`;

    linhas += linha;

    inputNomeContato.value = '';
    inputDdi.value = '';
    inputDdd.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

tabelaContato.addEventListener('click', function(e) {
    //console.log('fui clicado');
    let elementoClicado = e.target
    console.log(elementoClicado);

    if(elementoClicado.classList.contains("deletaLinha")) {
        let linhaRemovida = elementoClicado.parentNode.parentNode.remove();
        
        
    }
    let rem = 0;
    rem++;
    console.log(rem);


    
});


