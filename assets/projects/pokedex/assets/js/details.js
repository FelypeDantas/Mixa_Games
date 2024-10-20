const urlParams = new URLSearchParams(window.location.search);
const pokemonId = urlParams.get('id');
const pokemonType = urlParams.get('type');

if (pokemonId) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na resposta da rede');
            }
            return response.json();
        })
        .then(pokemon => {
            const pokemonName = document.getElementById('pokemonName');
            const pokemonPhoto = document.getElementById('pokemonPhoto');
            const pokemonDetails = document.getElementById('pokemonDetails');

            pokemonName.textContent = pokemon.name;
            pokemonPhoto.src = pokemon.sprites.other.dream_world.front_default;
            pokemonPhoto.alt = pokemon.name;

            const types = pokemon.types.map(typeSlot => typeSlot.type.name).join('');
            pokemonDetails.innerHTML = `
                <p><strong>Tipo(s):</strong> ${types}</p>
                <p><strong>Número:</strong> #${pokemon.id}</p>
                <p><strong>Altura:</strong> ${pokemon.height / 10} m</p>
                <p><strong>Peso:</strong> ${pokemon.weight / 10} kg</p>
            `;

            if (pokemonType) {
                document.body.classList.add(pokemonType);
            }
        })
        .catch(error => console.error('Erro ao carregar os detalhes do Pokémon:', error));
}

function convertPokemon(pokemon) {
    return `
        <a href="./details/index.html?id=${pokemon.number}&type=${pokemon.type}">
            <li class="pokemon ${pokemon.type}">
                <span class="number">${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>
        </a>
    `;
}
