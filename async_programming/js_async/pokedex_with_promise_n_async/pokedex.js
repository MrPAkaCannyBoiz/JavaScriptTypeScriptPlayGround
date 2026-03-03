// let getPokemonNameById = (id) =>{
//     const url = "https://pokeapi.co/api/v2/pokemon";
//     if (id === null || id === undefined || id === "") {
//         return;
//     };
//     fetch(url + "/" + id)
//         .then(response => {
//             if (!response.ok){
//                 throw new Error("Something wrong");
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log(data);
//         })
// }


async function getPokemonNameByIdAsync(id) {
    const url = "https://pokeapi.co/api/v2/pokemon/" + id;
    if (id === null || id === undefined || id === "") {
        return;
    };
    try {
        const response = await fetch(url);
        if (!response.ok){
            throw new Error("Something wrong")
        }
        let result = await response.json();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
    
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
        // getPokemonNameById(id)
        getPokemonNameByIdAsync(id)
    });
}