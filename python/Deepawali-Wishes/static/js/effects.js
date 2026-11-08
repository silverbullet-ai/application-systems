const particleContainer = document.getElementById("particles");

function createParticle() {

    const particle = document.createElement("span");

    particle.classList.add("particle");

    particle.style.left = `${Math.random() * 100}%`;

    particle.style.animationDuration =
        `${5 + Math.random() * 7}s`;

    particle.style.opacity =
        `${0.3 + Math.random() * 0.7}`;

    const size = 2 + Math.random() * 4;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particleContainer.appendChild(particle);

    particle.addEventListener("animationend", () => {
        particle.remove();
    });

}


/* Start Particle Animation */

const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
);

if (!reducedMotion.matches) {

    setInterval(createParticle, 350);

}
