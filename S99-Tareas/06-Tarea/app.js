gsap.registerPlugin(MotionPathPlugin);

const boomerang = document.getElementById("boomerang");

boomerang.addEventListener("click", () => {
  gsap.to(boomerang, {
    duration: 3,
    ease: "power1.inOut",
    motionPath: {
      path: "#curvedPath",
      align: "#curvedPath",
      autoRotate: true,
      alignOrigin: [0.5, 0.5]
    }
  });
});
