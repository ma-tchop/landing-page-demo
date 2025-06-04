document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("newsletter-form");
  const thankYou = document.getElementById("thank-you");

  form.addEventListener("submit", async function(event) {
    event.preventDefault(); // Standard‐Verhalten verhindern

    // Formulardaten sammeln
    const formData = new FormData(form);

    try {
      // Anfrage an Formspree senden (JSON‐Antwort)
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      });

      if (response.ok) {
        // Formular-Felder zurücksetzen
        form.reset();

        // Formular ausblenden und Dankes-Meldung einblenden
        form.classList.add("hidden");
        thankYou.classList.remove("hidden");
      } else {
        // Fehler beim Senden (z. B. 4xx/5xx)
        const data = await response.json();
        alert("Fehler: " + (data.error || "Unbekannter Fehler."));
      }
    } catch (error) {
      alert("Beim Senden ist ein Fehler aufgetreten. Bitte versuche es später noch einmal.");
      console.error("Fetch-Fehler:", error);
    }
  });
});
