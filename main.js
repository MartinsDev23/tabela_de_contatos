
let botaoCadastro = document.getElementById('buttonCadastro');
let nomeValor = document.getElementById('nome-valor');
let contatoValor = document.getElementById('contato-valor');
let listaContato = [];
let linhas = ('');
let corpoTabela = document.getElementById('corpoTabela');



botaoCadastro.addEventListener('click', function(e) {

    e.preventDefault();

    let nome = document.getElementById('nome').value;
    let contato = parseFloat(document.getElementById('contato').value);

    
    
    salvaContato(nome, contato);
    atualizaLista();
    atualizaTabela();
});

function salvaContato(nome, contato) {
        listaContato.push({nome: nome, contato: contato});
        
}

function atualizaTabela () {
    corpoTabela.innerHTML = '';
    

    listaContato.forEach(contato => {
        let linha = `<tr>
        <td>${contato.nome}</td>
        <td>${contato.contato}</td>
        </tr>`;

        corpoTabela.innerHTML += linha;
    });
}

function atualizaLista(){
    let ultimoContato = listaContato[listaContato.length -1];

    nomeValor.innerHTML = ultimoContato.nome;
    contatoValor.innerHTML = ultimoContato.contato;
}



