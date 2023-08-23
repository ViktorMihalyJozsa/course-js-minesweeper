const image = document.getElementById('hidden'); // A kép, amit megjelenítünk.
const canvas = document.getElementById('myCanvas'); // A canvas, amire rajzolunk.
const c = canvas.getContext('2d'); // A canvas context-je, amivel rajzolunk.

const size = 50; // A képek mérete.
const columns = canvas.width / size; // A képek száma.
const rows = canvas.height / size; // A képek száma.
const mine = 'mine'; 
const mineCount = 20; // A pályán lévő aknák száma.

let map = createMap(); // Létrehozzuk a pályát.
placeMines(map, mineCount); // Elhelyezzük az aknákat.

console.log(map); // Kiírjuk a konzolra a pályát.

drawMap(); // Kirajzoljuk a pályát.

function placeMines(map, mineCount) {
    let mines = 0; // Az elhelyezett aknák száma.
    while (mines < mineCount) { // Amíg nem helyeztünk el elég aknát.
        let x = Math.floor(Math.random() * columns); // Véletlenszerű oszlop.
        let y = Math.floor(Math.random() * rows); // Véletlenszerű sor.
        if (map[y][x] !== mine) { // Ha még nincs akna.
            map[y][x] = mine; // Elhelyezzük az aknát.
            mines++; // Növeljük az elhelyezett aknák számát.
        }
    }
}

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