const image = document.getElementById('hidden'); // A kép, amit megjelenítünk.
const canvas = document.getElementById('myCanvas'); // A canvas, amire rajzolunk.
const c = canvas.getContext('2d'); // A canvas context-je, amivel rajzolunk.

const size = 50; // A képek mérete.
const columns = canvas.width / size; // A képek száma.

for (let i = 0; i < columns; i++) {
    drawImage(i * size, 0);
}

function drawImage(x, y) {
    c.drawImage(image, x, y, size, size);
}