document.addEventListener("DOMContentLoaded", () => {
// GSAP Animations
  gsap.from(".feature-card", {
    scrollTrigger: {
      trigger: "#features",
      start: "top 80%",
      toggleActions: "play none none reset",
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from(".chart-container", {
    scrollTrigger: {
      trigger: "#nachhaltigkeit .chart-container",
      start: "top 80%",
      toggleActions: "play none none reset",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
  });

  // Existing animations for other sections
  gsap.from(".demo-card", {
    scrollTrigger: {
      trigger: "#demo",
      start: "top 80%",
      toggleActions: "play none none reset",
    },
    opacity: 0,
    scale: 0.9,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from(".sustainability-meter", {
    scrollTrigger: {
      trigger: ".hero",
      start: "top 80%",
      toggleActions: "play none none reset",
    },
    opacity: 0,
    scale: 0.5,
    duration: 1.5,
    ease: "elastic.out(1, 0.5)",
  });

  gsap.from("#cookie-consent", {
    opacity: 0,
    y: 100,
    duration: 0.5,
    ease: "power2.out",
    delay: 0.5,
  });
});