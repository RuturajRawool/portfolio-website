// GSAP Animations
gsap.from(".hero-title", {
  opacity: 0,
  y: -50,
  duration: 1,
});

gsap.from(".hero-subtitle", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.5,
});

gsap.utils.toArray("section").forEach((section, i) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    delay: i * 0.2,
  });
});
