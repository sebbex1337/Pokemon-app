"use strict";

window.addEventListener("load", initApp);

function initApp() {
    const rayQuaza = {
        name: "Rayquaza",
        description: "Rayquaza is said to have lived for hundreds of millions of years. Legends remain of how it put to rest the clash between Kyogre and Groudon. ",
        ability: "Air Lock",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/384.png",
        footprint: null,
        dexIndex: 384,
        type: "Dragon, Flying",
        subtype: undefined,
        weaknesses: "Fairy, Dragon, Ice, Rock",
        gender: undefined,
        weight: 20065,
        height: 700,
        generation: "Gen. III-IV",
        gameVersion: "Emerald, Ruby, Sapphire",
        canEvolve: false,
        statsHP: 7,
        statsAttack: 9, 
        statsDefence: 6,
        statsSpecialAttack: 9, 
        statsSpecialDefence: 6,
        statsSpeed: 6,
    }

    showPokemons(rayQuaza);
    showPokemons(rayQuaza);
}

function showPokemons(pokemon) {
    document.querySelector("#pokemon").insertAdjacentHTML("beforeend",
        /*html*/ `
            <article class="grid-item">
                <img src="${pokemon.image}">
                <h2>${pokemon.name}</h2>
                <p>#${pokemon.dexIndex}</p>
                <p>Type: ${pokemon.type}</p>
                <p>Weaknesses: ${pokemon.weaknesses}</p>
            </article>
        `);

    document.querySelector("#pokemon article:last-child").addEventListener("click", pokemonClicked);

    function pokemonClicked() {
        showPokemonModal(pokemon);
    }
}

function showPokemonModal(pokemon) {
    document.querySelector("#dialog-image").src = pokemon.image;
    document.querySelector("#dialog-dexIndex").textContent = pokemon.dexIndex;
    document.querySelector("#dialog-name").textContent = pokemon.name;
    document.querySelector("#dialog-type").textContent = pokemon.type;
    document.querySelector("#dialog-ability").textContent = pokemon.ability;
    document.querySelector("#dialog-description").textContent = pokemon.description;
    document.querySelector("#dialog-weakness").textContent = pokemon.weaknesses;
    document.querySelector("#dialog-weight").textContent = pokemon.weight;
    document.querySelector("#dialog-height").textContent = pokemon.height;
    document.querySelector("#dialog-generation").textContent = pokemon.generation;
    document.querySelector("#dialog-gameVersion").textContent = pokemon.gameVersion;
    document.querySelector("#dialog-canEvolve").textContent = pokemon.canEvolve;
    document.querySelector("#dialog-statsHP").textContent = pokemon.statsHP;
    document.querySelector("#dialog-statsAttack").textContent = pokemon.statsAttack;
    document.querySelector("#dialog-statsDefence").textContent = pokemon.statsDefence;
    document.querySelector("#dialog-statsSpecialAttack").textContent = pokemon.statsSpecialAttack;
    document.querySelector("#dialog-statsSpecialDefence").textContent = pokemon.statsSpecialDefence;
    document.querySelector("#dialog-statsSpeed").textContent = pokemon.statsSpeed;
    
    document.querySelector("#dialog-pokemon").showModal();
}