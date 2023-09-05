async function buscaCep(){
    let cep = document.getElementById('cep').value

    let resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`) // fetch é a função que chama a API

    let dados = await resposta.json()

    document.getElementById('logradouro').value = dados.logradouro
    document.getElementById('bairro').value = dados.bairro
    document.getElementById('localidade').value = dados.localidade
    document.getElementById('uf').value = dados.uf
    document.getElementById('ddd').value = dados.ddd
}
