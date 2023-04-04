const form = document.getElementById('form-contato')
//console.log(form)
const linhaContato = document.querySelector('.id-contato');
//console.log(linhaContato);


const inputNomeContato = document.querySelector('#nome-contato');
const inputDdi = document.querySelector('#ddi-contato');
const inputDdd = document.querySelector('#ddd-contato');
const inputNumeroContato = document.querySelector('#numero-contato');

const ddis = [];
const ddds = [];
const numeros = [];

const tabelaContato = document.querySelector("#tabela-contato");
const h2ContatosCadastrados = document.querySelector('#numeros-cadastrados');
const quant = 0;
//console.log(quant);

const contatos = [];




console.log(numeros.length);

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    contatosCadastrados();
    adicionaLinha();
    atualizaTabela();
    totalDeLinhas();
});



function contatosCadastrados() {
    
    
    h2ContatosCadastrados.innerHTML = `<h2 id="numeros-cadastrados">Total de contatos cadastrados: ${quant}</h2>`
}

function adicionaLinha() {



    if (numeros.includes((inputDdi.value)+(inputDdd.value)+(inputNumeroContato.value))) {
        alert(`O número de telefone ${inputDdi.value}${inputDdd.value}${inputNumeroContato.value} já foi inserido`);

        inputDdi.value = '';
        inputDdd.value = '';
        inputNumeroContato.value = '';

    } else {
        numeros.push(inputDdi.value + inputDdd.value + inputNumeroContato.value);
        contatos.push(inputNomeContato.value);
        ddis.push(parseFloat(inputDdi.value));
        ddds.push(parseFloat(inputDdd.value));
    
        console.log(numeros.length);
        console.log(numeros);
    
        let linha = `<tr class="linha-contato" >`;
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
        linha += `<button class="${inputNumeroContato.value} deletaLinha">x</button>`;
        linha += `</td>`;
        linha += `</tr>`;
    
        linhas += linha;
    
        inputNomeContato.value = '';
        inputDdi.value = '';
        inputDdd.value = '';
        inputNumeroContato.value = '';
    
    }
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

tabelaContato.addEventListener('click', function(e) {
    let elementoClicado = e.target
    console.log(elementoClicado);
    //let telefone = elementoClicado.classList[0];
    //console.log(telefone);

    //numeros.splice(numeros.indexOf(telefone), 1)
    //console.log(numeros);


    if(elementoClicado.classList.contains("deletaLinha")) {
        let linhaRemovida = elementoClicado.parentNode.parentNode.remove();
        totalDeLinhas();
    }
});


function totalDeLinhas(quant) {
    const linhaContatoAll = document.querySelectorAll(".linha-contato");
    console.log(linhaContatoAll);
    quant = linhaContatoAll.length;
    h2ContatosCadastrados.innerHTML = `<h2 id="numeros-cadastrados">Total de contatos cadastrados: ${quant}</h2>`
    console.log(quant);
}



