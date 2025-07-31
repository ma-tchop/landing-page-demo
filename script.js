document.addEventListener("DOMContentLoaded", function () {
  // Cookie Consent Logic
  const cookieConsent = document.getElementById("cookie-consent");
  const cookieSettingsBtn = document.getElementById("cookie-settings");
  const cookieAcceptBtn = document.getElementById("cookie-accept");
  const cookieSettingsModal = document.getElementById("cookie-settings-modal");
  const cookieSaveBtn = document.getElementById("cookie-save");
  const analyticsCookies = document.getElementById("analytics-cookies");
  const marketingCookies = document.getElementById("marketing-cookies");

  // Check if consent exists
  const consent = localStorage.getItem("cookieConsent");
  if (!consent) {
    cookieConsent.classList.remove("hidden");
  } else {
    const preferences = JSON.parse(consent);
    if (preferences.analytics) enableAnalytics();
    if (preferences.marketing)
      console.log("Marketing cookies enabled (placeholder)");
  }

  // Accept all cookies
  cookieAcceptBtn.addEventListener("click", () => {
    const preferences = { essential: true, analytics: true, marketing: true };
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    cookieConsent.classList.add("hidden");
    enableAnalytics();
    console.log("All cookies accepted:", preferences);
  });

  // Show/hide settings modal
  cookieSettingsBtn.addEventListener("click", () => {
    cookieSettingsModal.classList.toggle("hidden");
  });

  // Save custom preferences
  cookieSaveBtn.addEventListener("click", () => {
    const preferences = {
      essential: true,
      analytics: analyticsCookies.checked,
      marketing: marketingCookies.checked,
    };
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    cookieConsent.classList.add("hidden");
    if (preferences.analytics) enableAnalytics();
    console.log("Cookie preferences saved:", preferences);
  });

  // Placeholder for analytics
  function enableAnalytics() {
    console.log("Google Analytics enabled (placeholder)");
    // Example: window.dataLayer = window.dataLayer || [];
    // window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
  }

  // Newsletter Form
  const form = document.getElementById("newsletter-form");
  const thankYou = document.getElementById("thank-you");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        form.reset();
        form.classList.add("hidden");
        thankYou.classList.remove("hidden");
      } else {
        const data = await response.json();
        alert("Fehler: " + (data.error || "Unbekannter Fehler."));
      }
    } catch (error) {
      alert("Beim Senden ist ein Fehler aufgetreten.");
      console.error("Fetch-Fehler:", error);
    }
  });

  // Mobile Menu Toggle
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

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

  gsap.from(".chart-container", {
    scrollTrigger: {
      trigger: "#mission",
      start: "top 80%",
      toggleActions: "play none none reset",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
  });
  // Chart.js Example
  const ctx = document.getElementById("mission-chart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["2023", "2024", "2025"],
      datasets: [
        {
          label: "CO₂-Einsparung (Tonnen)",
          data: [500, 800, 1200],
          backgroundColor: ["#07A119", "#07A119", "#07A119"],
          borderColor: ["#058614", "#058614", "#058614"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      animation: { duration: 2000, easing: "easeOutBounce" },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: "CO₂-Einsparung (t)" },
        },
        x: { title: { display: true, text: "Jahr" } },
      },
      plugins: { legend: { display: false } },
    },
  });
});
