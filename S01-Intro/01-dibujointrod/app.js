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
ctx.strokeStyle = "white";
ctx.lineWidth = 2;



ctx.ellipse(700, 200, 100, 100, 0, 0 , Math.PI * 2);
ctx.stroke();
ctx.ellipse(700, 220, 100, 100, 0, 0 , Math.PI * 2);
ctx.stroke();
ctx.ellipse(700, 240, 100, 100, 0, 0 , Math.PI * 2);
ctx.stroke();
ctx.ellipse(700, 260, 100, 100, 0, 0 , Math.PI * 2);
ctx.stroke();
ctx.ellipse(700, 280, 100, 100, 0, 0 , Math.PI * 2);
ctx.stroke();
ctx.ellipse(700, 300, 100, 100, 0, 0 , Math.PI * 2);
ctx.stroke();
ctx.ellipse(700, 320, 100, 100, 0, 0 , Math.PI * 2);
ctx.stroke();
ctx.ellipse(700, 340, 100, 100, 0, 0 , Math.PI * 2);
ctx.stroke();
ctx.ellipse(700, 360, 100, 100, 0, 0 , Math.PI * 2);
ctx.stroke();
ctx.ellipse(700, 380, 100, 100, 0, 0 , Math.PI * 2);
ctx.stroke();

// window.addEventListener("mousemove", function(eventData){
//     console.log('hola X:', eventData);
//     console.log('hola Y:', eventData);

//     ctx.beginPath();
//     ctx.ellipse(eventData.x, eventData.y, 120, 120, 0, 0, Math.PI * 2);
//     ctx.stroke();

//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     ctx.beginPath();
//     ctx.ellipse(700, 200, 100, 100, 0, 0 , Math.PI * 2);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.ellipse(700, 220, 100, 100, 0, 0 , Math.PI * 2);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.ellipse(700, 240, 100, 100, 0, 0 , Math.PI * 2);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.ellipse(700, 260, 100, 100, 0, 0 , Math.PI * 2);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.ellipse(700, 280, 100, 100, 0, 0 , Math.PI * 2);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.ellipse(700, 300, 100, 100, 0, 0 , Math.PI * 2);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.ellipse(700, 320, 100, 100, 0, 0 , Math.PI * 2);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.ellipse(700, 340, 100, 100, 0, 0 , Math.PI * 2);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.ellipse(700, 360, 100, 100, 0, 0 , Math.PI * 2);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.ellipse(700, 380, 100, 100, 0, 0 , Math.PI * 2);
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.ellipse(eventData.x, eventData.y, 120, 120, 0, 0, Math.PI * 2);
//     ctx.stroke();
// });

// window.addEventListener("mousedown", function(eventData){
//     console.log("mousedown");
//     ctx.strokeStyle = "red";

//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     ctx.beginPath();
//     ctx.ellipse(700, 200, 100, 100, 0, 0 , Math.PI * 2);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.ellipse(700, 220, 100, 100, 0, 0 , Math.PI * 2);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.ellipse(700, 240, 100, 100, 0, 0 , Math.PI * 2);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.ellipse(700, 260, 100, 100, 0, 0 , Math.PI * 2);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.ellipse(700, 280, 100, 100, 0, 0 , Math.PI * 2);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.ellipse(700, 300, 100, 100, 0, 0 , Math.PI * 2);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.ellipse(700, 320, 100, 100, 0, 0 , Math.PI * 2);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.ellipse(700, 340, 100, 100, 0, 0 , Math.PI * 2);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.ellipse(700, 360, 100, 100, 0, 0 , Math.PI * 2);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.ellipse(700, 380, 100, 100, 0, 0 , Math.PI * 2);
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.ellipse(eventData.x, eventData.y, 120, 120, 0, 0, Math.PI * 2);
//     ctx.stroke();
// });

// window.addEventListener("mouseup", function(eventData){
//     console.log("mouseup");
//     ctx.strokeStyle = "white";

//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     ctx.beginPath();
//     ctx.ellipse(700, 200, 100, 100, 0, 0 , Math.PI * 2);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.ellipse(700, 220, 100, 100, 0, 0 , Math.PI * 2);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.ellipse(700, 240, 100, 100, 0, 0 , Math.PI * 2);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.ellipse(700, 260, 100, 100, 0, 0 , Math.PI * 2);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.ellipse(700, 280, 100, 100, 0, 0 , Math.PI * 2);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.ellipse(700, 300, 100, 100, 0, 0 , Math.PI * 2);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.ellipse(700, 320, 100, 100, 0, 0 , Math.PI * 2);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.ellipse(700, 340, 100, 100, 0, 0 , Math.PI * 2);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.ellipse(700, 360, 100, 100, 0, 0 , Math.PI * 2);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.ellipse(700, 380, 100, 100, 0, 0 , Math.PI * 2);
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.ellipse(eventData.x, eventData.y, 120, 120, 0, 0, Math.PI * 2);
//     ctx.stroke();

// });

const boton = document.getElementById("boton");
console.log(boton);

boton.addEventListener("mousedown", function(){
    console.log("BOTON mousedown");

    ctx.fillStyle = "orange";

    ctx.beginPath();
    ctx.rect(50, 100, 300, 50);
    ctx.fill();
});

