console.log('Ejercicio 03. Render Imagen 2D.');

const canvas = document.getElementById("lienzo");
console.log(canvas);

const ctx = canvas.getContext("2d");
console.log(ctx);

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

ctx.beginPath();
ctx.strokeStyle = "#66ff00";
ctx.lineWidth = 10;

ctx.ellipse(100, 100, 60, 60, 0, 0, Math.PI * 2);
ctx.stroke();

function dibujarCirculo(x, y) {
    ctx.beginPath();
    ctx.strokeStyle = "#66ff00";
    ctx.lineWidth = 10;
    ctx.ellipse(x, y, 60, 60, 0, 0, Math.PI * 2);
    ctx.stroke();
}

dibujarCirculo(200, 100);
dibujarCirculo(300, 100);
dibujarCirculo(400, 100);

//window.addEventListener("mousemove", function(catsup) {
//    dibujarCirculo(catsup.x, catsup.y);
//});


const circulo = {
    colorLinea: "#0000ff", // Changed to blue color
    grosorLinea: 1 0,
    radio: 100,
    rotacion: 0,
    anguloInicial: 0,
    anguloFinal: Math.PI * 2,
    x: 0,
    y: 0,
    dibujar: function(x, y) {
        ctx.beginPath();
        ctx.strokeStyle = circulo.colorLinea; // Fixed typo from 'colorLine' to 'colorLinea'
        ctx.lineWidth = circulo.grosorLinea;
        ctx.ellipse(x, y, circulo.radio, circulo.radio, circulo.rotacion, circulo.anguloInicial, circulo.anguloFinal);
        ctx.stroke();
    }
}

circulo.dibujar(500, 500);

window.addEventListener("mousedown", function(catsup) {
    circulo.dibujar(catsup.x, catsup.y);
});