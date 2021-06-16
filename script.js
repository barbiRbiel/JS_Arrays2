//Desafio : Game: Piedra papel o tijera
const herramientas = [
    { id: 1, type: "Piedra", skill:"Le gana a tijera",  pointsValue: 1},
    { id: 2, type: "Papel", skill:"Le gana a piedra",  pointsValue: 1},
    { id: 3, type: "Tijera", skill:"Le gana a papel",  pointsValue: 1},
];

const pointsTotal = herramientas.reduce((acc, p)=> acc + p.pointsValue, 0);
console.log("Las herramientas del juego en total suman " + pointsTotal +" puntos");
