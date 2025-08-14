console.log('Ejercicio 02. Render Imagen 2D.');

const canvas = document.getElementById('lienzo');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//cargar imagen
    var img = new Image();
    var path = "./example.png";
    img.src = path;

    img.onload = function() {
        console.log('Imagen cargada');

        ctx.drawImage(img, 50, 50, 300, 300)
    }
//renderizar imagen