// Particle JS background
particlesJS.load('particles-js', 'particles.json');

// Typing effect
const typedText = document.getElementById("typed-text");
const phrases = ["Hi, I'm Ruturaj", "I build dynamic websites", "Let's create something great!"];
let phraseIndex = 0, letterIndex = 0;

function type() {
  if (letterIndex < phrases[phraseIndex].length) {
    typedText.innerHTML += phrases[phraseIndex][letterIndex++];
    setTimeout(type, 80);
  } else {
    setTimeout(() => {
      typedText.innerHTML = "";
      letterIndex = 0;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      type();
    }, 1500);
  }
}
type();

// Dark mode toggle
document.getElementById("darkModeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Modal
function openModal(projectId) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modal-title").innerText = projectId === 'project1' ? "Landing Page" : "Portfolio App";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Scroll animations
gsap.utils.toArray("section").forEach((sec) => {
  gsap.from(sec, {
    scrollTrigger: sec,
    opacity: 0,
    y: 100,
    duration: 1,
    ease: "power2.out"
  });
});
