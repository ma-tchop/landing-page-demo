document.addEventListener("DOMContentLoaded", initCookieBanner);

function initCookieBanner() {
  const el = {
    consent: document.getElementById("cookie-consent"),
    settingsBtn: document.getElementById("cookie-settings"),
    acceptBtn: document.getElementById("cookie-accept"),
    settingsModal: document.getElementById("cookie-settings-modal"),
    saveBtn: document.getElementById("cookie-save"),
    analyticsCb: document.getElementById("analytics-cookies"),
    marketingCb: document.getElementById("marketing-cookies"),
  };
  if (!el.consent) return; // run only where banner exists

  let prefs = null;
  const raw = localStorage.getItem("cookieConsent");
  if (raw) {
    try {
      prefs = JSON.parse(raw);
    } catch {
      localStorage.removeItem("cookieConsent");
    }
  }

  if (!prefs) el.consent.classList.remove("hidden");
  if (prefs) {
    if (prefs.analytics) enableAnalytics();
    if (el.analyticsCb) el.analyticsCb.checked = !!prefs.analytics;
    if (el.marketingCb) el.marketingCb.checked = !!prefs.marketing;
  }

  el.acceptBtn?.addEventListener("click", () => {
    const p = { essential: true, analytics: true, marketing: true };
    localStorage.setItem("cookieConsent", JSON.stringify(p));
    el.consent.classList.add("hidden");
    enableAnalytics();
  });

  el.settingsBtn?.addEventListener("click", () => {
    el.settingsModal?.classList.toggle("hidden");
  });

  el.saveBtn?.addEventListener("click", () => {
    const p = {
      essential: true,
      analytics: !!el.analyticsCb?.checked,
      marketing: !!el.marketingCb?.checked,
    };
    localStorage.setItem("cookieConsent", JSON.stringify(p));
    el.consent.classList.add("hidden");
    el.settingsModal?.classList.add("hidden");
    if (p.analytics) enableAnalytics();
  });

  let analyticsEnabled = false;
  function enableAnalytics() {
    if (analyticsEnabled) return;
    analyticsEnabled = true;
    console.log("Google Analytics enabled (placeholder)");
  }
}
