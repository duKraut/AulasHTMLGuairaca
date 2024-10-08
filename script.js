// selecionar por ID
function puxarElementoPorId() {
    const subtitulo = document.getElementById('subtitulo');
    return console.log(subtitulo);
}

puxarElementoporId();

// selecionar por classe
function puxarElementoPorClasse() {
    const titulo = document.getElementsByClassName('titulo');
    return console.log(titulo);
}

puxarElementoPorClasse();

//selecionar por tag
function puxarElementoPorTag() {
    const tags = document.getElementsByTagName('p');
    return console.log(tags);
}

puxarElementoPorTag();

// função para modificar o texto
function setText() {
    const subtitulo = document.getElementById('meuTitulo');
    subtitulo.textContent = "Agora vai";
}