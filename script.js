"use strict";

window.addEventListener("load", initApp);

async function initApp() {
    const pokemons = await getPokemon("pokemons.json");
    
    for (const pokemon of pokemons) {
        showPokemons(pokemon);
    }
}

async function getPokemon(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data
}

function showPokemons(pokemon) {
    document.querySelector("#pokemon").insertAdjacentHTML("beforeend",
        /*html*/ `
            <article class="grid-item">
                <img src="${pokemon.image}">
                <h2>${pokemon.name}</h2>
                <p>#${pokemon.dexindex}</p>
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
    document.querySelector("#dialog-dexIndex").textContent = pokemon.dexindex;
    document.querySelector("#dialog-name").textContent = pokemon.name;
    document.querySelector("#dialog-type").textContent = pokemon.type;
    document.querySelector("#dialog-ability").textContent = pokemon.ability;
    document.querySelector("#dialog-description").textContent = pokemon.description;
    document.querySelector("#dialog-weakness").textContent = pokemon.weaknesses;
    document.querySelector("#dialog-weight").textContent = pokemon.weight;
    document.querySelector("#dialog-height").textContent = pokemon.height;
    document.querySelector("#dialog-gender").textContent = getGender(pokemon);
    document.querySelector("#dialog-generation").textContent = pokemon.generation;
    document.querySelector("#dialog-gameVersion").textContent = pokemon.spilversion;
    document.querySelector("#dialog-canEvolve").textContent = canEvolve(pokemon);
    document.querySelector("#dialog-statsHP").textContent = pokemon.statsHP;
    document.querySelector("#dialog-statsAttack").textContent = pokemon.statsAttack;
    document.querySelector("#dialog-statsDefence").textContent = pokemon.statsDefence;
    document.querySelector("#dialog-statsSpecialAttack").textContent = pokemon.statsSpecialAttack;
    document.querySelector("#dialog-statsSpecialDefence").textContent = pokemon.statsSpecialDefence;
    document.querySelector("#dialog-statsSpeed").textContent = pokemon.statsSpeed;
    
    document.querySelector("#dialog-pokemon").showModal();
}

function canEvolve(pokemon) {
    let evolve = "";
    if (!pokemon.canEvolve) {
        evolve = `${pokemon.name} cannot evolve`;
    } else {
        evolve = `${pokemon.name} can evolve`;
    }
    return evolve;
}

function getGender(pokemon) {
    let gender = "";
    if (pokemon.gender == null) {
        gender = `Genderless`
    } else {
        gender = pokemon.gender;
    }
    return gender;
}