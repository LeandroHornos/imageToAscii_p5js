/* 


*/

// Caracteres ordenados de mayor a menor brillo:
const density = "Ñ@#W$9876543210?!ABC;:+=-,._       ";

let imagen;

const scale = 0.5;

function preload() {
  imagen = loadImage("mickey256.jpg");
}

function setup() {
  noCanvas(); // Voy a dibujar texto en un div
  imagen.resize(floor(imagen.width * scale), floor(imagen.height * scale));
  imagen.loadPixels(); // Obtengo el array de pixels rgba
  console.log("Hola don pepito");
  for (let j = 0; j < imagen.height; j++) {
    let row = ""; // Vamos a crear filas de texto con un <br/>
    for (let i = 0; i < imagen.width; i++) {
      const pixelIndex = (i + j * imagen.width) * 4;

      const r = imagen.pixels[pixelIndex + 0];
      const g = imagen.pixels[pixelIndex + 1];
      const b = imagen.pixels[pixelIndex + 2];

      // Se obtiene el brillo como el promedio de rgb
      const brillo = (r + g + b) / 3;
      // Mapeo los caracteres al brillo
      // invirtiendo el orden, es decir,
      // los caracteres más densos se mapean al menor brillo
      const len = density.length;
      const charIndex = floor(map(brillo, 0, 255, len - 1, 0));
      const char = density.charAt(charIndex);
      if (char == " ") row += "&nbsp;";
      else row += char;
    }
    createDiv(row).addClass("fila");
  }
}
