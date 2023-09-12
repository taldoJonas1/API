
async function buscaTitulo(){
    let titulo = document.getElementById('titulo').value

    let resposta = await fetch(`https://www.omdbapi.com/?apikey=37449d10&t=${titulo}`) // fetch é a função que chama a API

    let dados = await resposta.json()

    document.getElementById('lancamento').value = dados.Released
    document.getElementById('duracao').value = dados.Runtime
    document.getElementById('genero').value = dados.Genre
    document.getElementById('sinopse').value = dados.Plot
    document.getElementById('atores').value = dados.Actors
}