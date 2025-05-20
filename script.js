// Hero section animations
gsap.from(".hero-title", {
  opacity: 0,
  y: -40,
  duration: 1,
});

gsap.from(".hero-subtitle", {
  opacity: 0,
  y: 40,
  duration: 1,
  delay: 0.3,
});

// Animate each section on scroll
gsap.utils.toArray("section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
  });
});
