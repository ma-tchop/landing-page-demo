window.onload = () => {
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
}