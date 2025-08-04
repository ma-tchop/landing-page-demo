document.addEventListener("DOMContentLoaded", () => {
  // Parallax Background Animation for Features
  gsap.to(".parallax-bg", {
    scrollTrigger: {
      trigger: "#features",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
    yPercent: 20,
    ease: "none",
  });

  // // Feature Cards Animation (Scroll-triggered only)
  // gsap.from(".feature-card", {
  //   scrollTrigger: {
  //     trigger: "#features",
  //     start: "top 80%",
  //     end: "bottom 60%",
  //     toggleActions: "play none none reset",
  //   },
  //   opacity: 0,
  //   y: 100,
  //   scale: 0.95,
  //   stagger: 0.15,
  //   duration: 1.2,
  //   ease: "power3.out",
  // });

  gsap.from(".transition-diagonal", {
    scrollTrigger: {
      trigger: ".transition-section",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
    xPercent: -10,
    opacity: 0.8,
    ease: "sine.inOut",
  });

  // Nachhaltigkeit Section Animation
  gsap.from("#nachhaltigkeit .text-center", {
    scrollTrigger: {
      trigger: "#nachhaltigkeit",
      start: "top 90%",
      toggleActions: "play none none reset",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from("#nachhaltigkeit .grid", {
    scrollTrigger: {
      trigger: "#nachhaltigkeit .grid",
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