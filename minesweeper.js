const image = document.getElementById('hidden');
const canvas = document.getElementById('myCanvas');
const c = canvas.getContext('2d');

const size = 50;
let x = 100;
let y = 50;

c.drawImage(image, x, y, size, size); // A kép bal felső sarka (x,y) koordinátára kerül
c.drawImage(image, x + size, y + size, size, size);