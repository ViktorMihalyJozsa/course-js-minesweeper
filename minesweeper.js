const image = document.getElementById('hidden'); // A kép, amit megjelenítünk.
const canvas = document.getElementById('myCanvas'); // A canvas, amire rajzolunk.
const c = canvas.getContext('2d'); // A canvas context-je, amivel rajzolunk.

const size = 50; // A képek mérete.
const columns = canvas.width / size; // A képek száma.
const rows = canvas.height / size; // A képek száma.
const mine = 'mine'; 

let map = createMap(); // Létrehozzuk a pályát.
map[0][0] = mine; // Elhelyezünk egy aknát a pályán.


console.log(map); // Kiírjuk a konzolra a pályát.

drawMap(); // Kirajzoljuk a pályát.

function createMap() {
    let map = []; // A pálya.
    for (let j = 0; j < rows; j++) { // Végigmegyünk a sorokon.
        let row = []; // Egy sor.
        for (let i = 0; i < columns; i++) {
            row [i] = 0;
        }
        map[j] = row;
    }
    return map;
}

function drawMap() {
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {

            drawImage(i * size, j * size); // Kirajzoljuk a képet.
        }
    }
}

function drawImage(x, y) {
    c.drawImage(image, x, y, size, size); // Kirajzoljuk a képet.
}