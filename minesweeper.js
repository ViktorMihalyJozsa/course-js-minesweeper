const image = document.getElementById('hidden'); // A kép, amit megjelenítünk.
const canvas = document.getElementById('myCanvas'); // A canvas, amire rajzolunk.
const c = canvas.getContext('2d'); // A canvas context-je, amivel rajzolunk.

const size = 50; // A képek mérete.

drawImage(0, 0); // Kirajzoljuk a képet a kezdő koordinátákon.
drawImage(100, 100);
drawImage(200, 200);

function drawImage(x, y) {
    c.drawImage(image, x, y, size, size);
}