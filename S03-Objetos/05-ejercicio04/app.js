console.log('Ejercicio 04. Render Imagen 3D.');

console.log(gsap);

window.addEventListener("mousedown", function() {
    gsap.to(
        ".rectangulo",
        {
            x: 500,
            y: 100,
            duration: 2.5,
            ease: "bounce.inOut",

            onComplete: function() {
                gsap.to(
                    ".rectangulo",
                    {
                        x: 1000,
                        y: 0,
                        duration: 5,
                        ease: "bounce.inOut",
                    }
                );
            }
        }
    );
});