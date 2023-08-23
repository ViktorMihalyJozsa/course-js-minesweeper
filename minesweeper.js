const canvas = document.getElementById('myCanvas'); // A canvas, amire rajzolunk.
const c = canvas.getContext('2d'); // A canvas context-je, amivel rajzolunk.

const size = 50; // A képek mérete.
const columns = canvas.width / size; // A képek száma.
const rows = canvas.height / size; // A képek száma.
const mine = 'mine'; // Az akna.
const mineCount = 20; // A pályán lévő aknák száma.
const images = {
    'hidden': document.getElementById('hidden'),
    'mine': document.getElementById('mine'),
    '0': document.getElementById('field-0'),
    '1': document.getElementById('field-1'),
    '2': document.getElementById('field-2'),
    '3': document.getElementById('field-3'),
    '4': document.getElementById('field-4'),
    '5': document.getElementById('field-5'),
    '6': document.getElementById('field-6'),
    '7': document.getElementById('field-7'),
    '8': document.getElementById('field-8')
}; // A képek.

let map = createMap(); // Létrehozzuk a pályát.
placeMines(map, mineCount); // Elhelyezzük az aknákat.

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
    for (let rowI = 0; rowI < rows; rowI++) { // Végigmegyünk a sorokon.
        for (let colI = 0; colI < columns; colI++) { // Végigmegyünk az oszlopokon.
            let field = map[rowI][colI]; // A mező típusa.
            let image = images[field]; // A kép.
            drawImage(image, colI * size, rowI * size); // Kirajzoljuk a képet.
        }
    }
};

function drawImage(image, x, y) {
    c.drawImage(image, x, y, size, size); // Kirajzoljuk a képet.
}