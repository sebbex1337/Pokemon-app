"use strict";

const rayQuaza = {
    name: "Rayquaza",
    description: "",
    image: "url",
    footprint: "url",
    dexIndex: "",
    type: "",
    subtype: "",
    weaknesses: "",
    gender: "",
    weight: "",
    height: "",

}

function showPokemon(pokemon) {
    const myHTML = /*html*/ `
            <p>Name: <span>${pokemon.name}</span></p>
            <p>Name: <span>${pokemon.name}</span></p>
            <p>Name: <span>${pokemon.name}</span></p>
    `;

    document.querySelector("#student").insertAdjacentHTML("beforeend", myHTML);
}