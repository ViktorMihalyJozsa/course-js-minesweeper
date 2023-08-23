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

whenAllImagesLoaded(drawMap); // Megvárjuk, amíg betöltődnek a képek, és csak utána rajzoljuk ki a pályát.

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


// Ez a függvény megvárja, amíg az összes kép betöltődik, és csak utána hívja meg a paraméterként kapott másik függvényt.
// Az első paraméter a meghívandó függvény, a második paraméter a betöltési idő, ami 0-ról indul.

function whenAllImagesLoaded(onAllImagesLoaded, loadTime = 0) {
    const imageCount = Object.values(images).length; // az összes kép száma
    let loadedImages = 0; // azoknak a képeknek a száma, amik már betöltődtek
    for (let image of Object.values(images)) { // végigmegyünk az összes képen
      if (image.complete) { // ha a kép betöltődött
        loadedImages++; // növeljük a betöltött képek számát
      }
    }
    // ha még nem töltődött be minden kép, és még nem telt el 3 másodperc
    if (loadedImages < imageCount && loadTime < 3000) { 
      console.log('Waiting for images to load'); // kiírjuk, hogy várunk a képekre
      setTimeout(() => { // 100ms múlva újra meghívjuk ezt a függvényt (rekurzió)
        whenAllImagesLoaded(onAllImagesLoaded, loadTime + 100); // a betöltési időt 100ms-al növeljük
      }, 100);
    }
    if (loadTime >= 3000) { // ha már eltelt 3 másodperc
      console.log('Images could not be loaded'); // kiírjuk, hogy nem sikerült betölteni a képeket
    } else if (imageCount === loadedImages) { // különben ha minden kép betöltődött
      onAllImagesLoaded(); // meghívjuk a paraméterként kapott függvényt
    }
  }