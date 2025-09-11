console.log("Op Art estilo líneas convergentes");

// Obtener el canvas y contexto
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Ajustar al tamaño de la ventana
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const width = canvas.width;
const height = canvas.height;

// Fondo blanco
ctx.fillStyle = "white";
ctx.fillRect(0, 0, width, height);

// Punto de fuga central
const centerX = width / 2;
const centerY = height / 2;

// Parámetros
const numLines = 60;      // Cantidad de líneas por lado
const spacing = 15;       // Espaciado entre líneas
ctx.strokeStyle = "black";
ctx.lineWidth = 1;

// LÍNEAS LATERALES (izquierda y derecha)
for (let i = -numLines; i <= numLines; i++) {
  const offset = i * spacing;

  // Desde borde izquierdo al punto central
  ctx.beginPath();
  ctx.moveTo(0, centerY + offset);
  ctx.lineTo(centerX, centerY);
  ctx.stroke();

  // Desde borde derecho al punto central
  ctx.beginPath();
  ctx.moveTo(width, centerY + offset);
  ctx.lineTo(centerX, centerY);
  ctx.stroke();
}

// LÍNEAS SUPERIORES (como una V invertida)
const vCount = 30;
for (let i = -vCount; i <= vCount; i++) {
  const x = centerX + i * spacing;

  ctx.beginPath();
  ctx.moveTo(x, 0); // Parte superior
  ctx.lineTo(centerX, centerY);
  ctx.stroke();
}
