const image = document.getElementById('hidden'); // A kép, amit megjelenítünk.
const canvas = document.getElementById('myCanvas'); // A canvas, amire rajzolunk.
const c = canvas.getContext('2d'); // A canvas context-je, amivel rajzolunk.

const size = 50; // A képek mérete.
const columns = canvas.width / size; // A képek száma.
const rows = canvas.height / size; // A képek száma.

drawMap(); // Kirajzoljuk a pályát.

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