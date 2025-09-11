console.log('sesión 08. Tarea - MATCAPS 2D');
console.log(THREE);

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Ajustar al tamaño de la ventana
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const width = canvas.width;
const height = canvas.height;

// Paleta de colores permitidos
const palette = [
  "#84D4F2", "#E3F5A1", "#DEC3E6",
  "#BFEAE0", "#DE9BC3", "#F7F7F7"
];

// Número de líneas a dibujar
const numLines = 100;

for (let i = 0; i < numLines; i++) {
  // ¿Horizontal o vertical?
  const isHorizontal = Math.random() < 0.5;

  // Grosor aleatorio entre 1 y 4
  const thickness = Math.floor(Math.random() * 4) + 1;

  // Color aleatorio de la paleta
  const color = palette[Math.floor(Math.random() * palette.length)];

  ctx.strokeStyle = color;
  ctx.lineWidth = thickness;

  ctx.beginPath();

  if (isHorizontal) {
    const y = Math.random() * height;
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
  } else {
    const x = Math.random() * width;
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
  }

  ctx.stroke();
}
