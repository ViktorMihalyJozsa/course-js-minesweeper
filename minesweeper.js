const image = document.getElementById('hidden');
const canvas = document.getElementById('myCanvas');
const c = canvas.getContext('2d');

const size = 50;
let x = 100;
let y = 50;

c.drawImage(image, x, y, size, size); // Az első (kezdő) kép bal felső sarka (x,y) koordinátára kerül.
c.drawImage(image, x + size, y + size, size, size); // A második kép a kezdő kép jobb alsó sarkára kerül.