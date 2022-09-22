const pokemon = [
    {
        name: "Pikachu",
        type: "electric",
        attackPoints: 55,
        defensePoints: 40,
    },
    {
        name: "Bulbasaur",
        type: "grass",
        attackPoints: 49,
        defensePoints: 49,
    },
    {
        name: "Charmander",
        type: "fire",
        attackPoints: 52,
        defensePoints: 43,
    },
    {
        name: "Squirtle",
        type: "water",
        attackPoints: 48,
        defensePoints: 65,
    },
];

// 1. Conocer si existe un pokemon tipo fuego
const existFireType = pokemon.some((item) => item.type === "fire");
existFireType 
    ? console.log("Existe un pokemon tipo fuego")
    : console.log("No existe un pokemon tipo fuego");

console.log("\n------------------\n");

// 2. Crear un arreglo donde estén sus dos primeros pokemon.
const firstTwoPokemon = pokemon.slice(0, 2);
console.log("Los primeros dos pokemons son: ");
console.log(firstTwoPokemon);
console.log("\n------------------\n");

// 3. Agregar un pokemon Mewtwo en la posición 2 de tu arreglo
const mewtwoṔokemon = {
    name: "Mewtwo",
    type: "psychic",
    attackPoints: 110,
    defensePoints: 90,
}
pokemon.splice(2, 0, mewtwoṔokemon);

// 4. Remover el pokemon del equipo se encuentra en la posición 1.
pokemon.splice(1, 1);

// 5. Mostrar a información de todos los pokemon con un metodo map
const pokemonInfo = pokemon.map( (pokemon) => {
    return `The pokemon ${pokemon.name} is a ${pokemon.type} type with ${pokemon.attackPoints} attack points and ${pokemon.defensePoints} defense points`;
});
console.log(pokemonInfo);
console.log("\n------------------\n");

// 6. Saber si posee más puntos de ataque o más puntos de defensa.
const totalAttackPoints = pokemon.reduce( (total, pokemonPoints) => {
    return total + pokemonPoints.attackPoints;
}, 0);

const totalDefensePoints = pokemon.reduce( (total, pokemonPoints) => {
    return total + pokemonPoints.defensePoints;
}, 0);

if (totalAttackPoints === totalDefensePoints) {
    console.log("Contiene la misma cantidad de puntos en defensa y en ataque.")
} else {
    (totalAttackPoints > totalDefensePoints)
        ? console.log("Tiene más puntos de ataque.")
        : console.log("Tiene más puntos de defensa.");
}
console.log("\n------------------\n"); 