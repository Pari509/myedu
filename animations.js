// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Hero section animation on load
gsap.from(".hero-title", {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: "power2.out"
});

gsap.from(".hero-text", {
  duration: 1,
  delay: 0.3,
  y: 30,
  opacity: 0,
  ease: "power2.out"
});

gsap.from(".hero-btn", {
  duration: 1,
  delay: 0.6,
  scale: 0.8,
  opacity: 0,
  ease: "back.out(1.7)"
});

// Animate cards when scrolling
gsap.from(".card", {
  scrollTrigger: {
    trigger: ".categories",
    start: "top 80%"
  },
  y: 40,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out"
});
