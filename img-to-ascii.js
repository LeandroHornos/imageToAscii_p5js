/* 


*/

// Caracteres ordenados de mayor a menor brillo:
const density = "Ñ@#W$9876543210?!ABC;:+=-,._ ";

let imagen;

function preload() {
  imagen = "gatito_preso48.jpg";
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  imagen(gloria, 0, 0, witdh, height);
}
