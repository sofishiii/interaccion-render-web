//obtener referencia del canvas
const canvas =
document.getElementById('lienzo');

//sincronizar dimensiones del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

console.log(canvas);

//circulo
ctx.beginPath();
ctx.fillStyle = "#f4f3ef";
ctx.moveTo(505, 400);
//ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle);
ctx.ellipse(500, 399, 400, 350, 22, 0, Math.PI / 2);
ctx.fill();
ctx.stroke();

//circulo 2
ctx.beginPath();
ctx.fillStyle = "#f4f3ef";
ctx.moveTo(910, 400);
//ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle);
ctx.ellipse(905, 403, 400, 355, 22, 0, Math.PI / 2);
ctx.fill();
ctx.stroke();

//circulo 3
ctx.beginPath();
ctx.fillStyle = "#f4f3ef";
ctx.moveTo(101, 800);
//ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle);
ctx.ellipse(101, 800, 405, 408, 4.71, 0, Math.PI / 2);
ctx.fill();
ctx.stroke();

//circulo 4
ctx.beginPath();
ctx.fillStyle = "#f4f3ef";
ctx.moveTo(505, 800);
//ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle);
ctx.ellipse(505, 800, 401, 408, 4.71, 0, Math.PI / 2);
ctx.fill();
ctx.stroke();

