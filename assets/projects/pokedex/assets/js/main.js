const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");
const limit = 5;
let offset = 0;
const maxRecords = 151;

function loadPokemonsItens(offset, limit) {

    function convertPokemonToHtml(pokemon) {
        return `
             <a href="./assets/details/index.html?id=${pokemon.number}&type=${pokemon.type}">
             <li class="pokemon ${pokemon.type}">
                    <span class="number">${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
                        </ol>
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
                </li></a>
        `
    }

    pokeapi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonList.innerHTML += pokemons.map(convertPokemonToHtml).join('');
    });
}

loadPokemonsItens(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    const qtdRecord = offset + limit;
    if(qtdRecord >= maxRecords){
        const newLimit = maxRecords - offset;
        loadPokemonsItens(offset, newLimit);
        loadMoreButton.parentElement.removeChild(loadMoreButton);
        return ;
    } else {
        loadPokemonsItens(offset, limit);
    }
});

