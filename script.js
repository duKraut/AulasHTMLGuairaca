let arrayRickandmorty;

function getRickandmorty() {
    fetch('https://rickandmortyapi.com/api/character/?page=19')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('character-container');
        data.results.forEach(character => {
            const characterCard = document.createElement('div');
            characterCard.classList.add('character-card');
            
            characterCard.innerHTML = `
                <img src="${character.image}" alt="${character.name}">
                <h2>${character.name}</h2>
                <p>Status: ${character.status}</p>
                <p>Species: ${character.species} ${character.type ? `- ${character.type}` : ''}</p>
                <p>Origin: ${character.origin.name}</p>
                <p>Location: ${character.location.name}</p>
            `;
            container.appendChild(characterCard);
        });
    })
    .catch(error => console.error('Error:', error));
}

document.addEventListener('DOMContentLoaded', getRickandmorty);