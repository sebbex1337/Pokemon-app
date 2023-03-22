"use strict";

window.addEventListener("load", initApp);

function initApp() {
    const rayQuaza = {
        name: "Rayquaza",
        description: "Rayquaza is said to have lived for hundreds of millions of years. Legends remain of how it put to rest the clash between Kyogre and Groudon. ",
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

function fetchData() {}


function showPokemons(pokemon) {
    document.querySelector("#pokemon").insertAdjacentHTML("beforeend",
        /*html*/ `
            <article>
                <img src="${pokemon.image}">
                <h2>${pokemon.name}</h2>
                <p>Type: ${pokemon.type}</p>
                <p>Weaknesses: ${pokemon.weaknesses}</p>
            </article>
        `);
}

// function addPokemon(pokemon) {
//     const myHTML = /*html*/ `
//             <li>Name: <span>${pokemon.name}</span></li>
//             <li>Description: <span>${pokemon.description}</span></li>
//             <li>Image: <span><img src="${pokemon.image}"></span></li>
//             <li>Footprint: <span>${pokemon.footprint}</span></li>
//             <li>DexIndex: <span>${pokemon.dexIndex}</span></li>
//             <li>Type: <span>${pokemon.type}</span></li>
//             <li>Subtype: <span>${pokemon.subtype}</span></li>
//             <li>Weaknesses: <span>${pokemon.weaknesses}</span></li>
//             <li>Gender: <span>${pokemon.gender}</span></li>
//             <li>Weight: <span>${pokemon.weight}</span></li>
//             <li>Height: <span>${pokemon.height}</span></li>
//             <li>Generation: <span>${pokemon.generation}</span></li>
//             <li>GameVersion: <span>${pokemon.gameVersion}</span></li>
//             <li>CanEvolve: <span>${pokemon.canEvolve}</span></li>
//             <li>StatsHP: <span>${pokemon.statsHP}</span></li>
//             <li>StatsAttack: <span>${pokemon.statsAttack}</span></li>
//             <li>StatsDefence: <span>${pokemon.statsDefence}</span></li>
//             <li>StatsSpecialAttack: <span>${pokemon.statsSpecialAttack}</span></li>
//             <li>StatsSpecialDefence: <span>${pokemon.statsSpecialDefence}</span></li>
//             <li>StatsSpeed: <span>${pokemon.statsSpeed}</span></li>
//     `;

//     document.querySelector("#pokemons").insertAdjacentHTML("beforeend", myHTML);
// }

// addPokemon(rayQuaza);    


// const myHTML = /*html*/ `
//         <p>Name: <span>${pokemon.name}</span></p>
//         <p>Description: <span>${pokemon.description}</span></p>
//         <p>Image: <span><img src="${pokemon.image}"></span></p>
//         <p>Footprint: <span>${pokemon.footprint}</span></p>
//         <p>DexIndex: <span>${pokemon.dexIndex}</span></p>
//         <p>Type: <span>${pokemon.type}</span></p>
//         <p>Subtype: <span>${pokemon.subtype}</span></p>
//         <p>Weaknesses: <span>${pokemon.weaknesses}</span></p>
//         <p>Gender: <span>${pokemon.gender}</span></p>
//         <p>Weight: <span>${pokemon.weight}</span></p>
//         <p>Height: <span>${pokemon.height}</span></p>
//         <p>Generation: <span>${pokemon.generation}</span></p>
//         <p>GameVersion: <span>${pokemon.gameVersion}</span></p>
//         <p>CanEvolve: <span>${pokemon.canEvolve}</span></p>
//         <p>StatsHP: <span>${pokemon.statsHP}</span></p>
//         <p>StatsAttack: <span>${pokemon.statsAttack}</span></p>
//         <p>StatsDefence: <span>${pokemon.statsDefence}</span></p>
//         <p>StatsSpecialAttack: <span>${pokemon.statsSpecialAttack}</span></p>
//         <p>StatsSpecialDefence: <span>${pokemon.statsSpecialDefence}</span></p>
//         <p>StatsSpeed: <span>${pokemon.statsSpeed}</span></p>
// `;