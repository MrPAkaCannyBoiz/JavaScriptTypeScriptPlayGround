let getPokemonNameById = (id) =>{
    const url = "https://pokeapi.co/api/v2/pokemon";
    if (id === null || id === undefined || id === "") return;
    const http = new XMLHttpRequest();
    http.open("GET", url + "/" + id, true);
    http.onload = () => {
        if (http.status == 200) {
            console.log(JSON.parse(http.responseText));
            return;
        }
        console.log("Request failed with status:", http.status);
    }
    // try - catch like this
    http.send()
}

const pokemonIdInput = document.getElementById("pokemon-id");
const fetchPokemonButton = document.getElementById("fetch-pokemon");

// trigger the event 
if (pokemonIdInput && fetchPokemonButton) {
    fetchPokemonButton.addEventListener("click", () => {
        const id = Number(pokemonIdInput.value);
        if (!Number.isInteger(id) || id < 1) {
            console.log("Please enter a valid Pokémon ID (number >= 1).");
            return;
        }
        getPokemonNameById(id);
    });
}