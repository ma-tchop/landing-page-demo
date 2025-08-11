document.addEventListener("DOMContentLoaded", initCookieBanner);

function initCookieBanner() {
  let analyticsEnabled = false; // Moved to top to avoid ReferenceError

  const el = {
    consent: document.getElementById("cookie-consent"),
    settingsBtn: document.getElementById("cookie-settings"),
    acceptBtn: document.getElementById("cookie-accept"),
    settingsModal: document.getElementById("cookie-settings-modal"),
    saveBtn: document.getElementById("cookie-save"),
    analyticsCb: document.getElementById("analytics-cookies"),
    marketingCb: document.getElementById("marketing-cookies"),
  };

  if (!el.consent) return;

  let prefs = loadPrefs();

  if (!prefs) {
    // No valid consent → show banner
    el.consent.classList.remove("hidden");
  } else {
    // Valid consent → apply preferences
    applyPrefs(prefs);
  }

  // Accept all cookies
  el.acceptBtn?.addEventListener("click", () => {
    savePrefs({ accepted: true, essential: true, analytics: true, marketing: true });
  });

  // Toggle settings
  el.settingsBtn?.addEventListener("click", () => {
    el.settingsModal?.classList.toggle("hidden");
  });

  // Save settings
  el.saveBtn?.addEventListener("click", () => {
    const p = {
      accepted: true,
      essential: true,
      analytics: !!el.analyticsCb?.checked,
      marketing: !!el.marketingCb?.checked,
    };
    savePrefs(p);
    el.settingsModal?.classList.add("hidden");
  });

  function loadPrefs() {
    try {
      const raw = localStorage.getItem("cookieConsent");
      if (!raw) return null;
      const parsed = JSON.parse(raw);

      // VALIDATE data
      if (typeof parsed !== "object" || parsed === null) return null;
      if (parsed.accepted !== true) return null; // must be explicitly accepted

      return parsed;
    } catch {
      localStorage.removeItem("cookieConsent");
      return null;
    }
  }

  function savePrefs(p) {
    localStorage.setItem("cookieConsent", JSON.stringify(p));
    el.consent.classList.add("hidden");
    applyPrefs(p);
  }

  function applyPrefs(p) {
    if (el.analyticsCb) el.analyticsCb.checked = !!p.analytics;
    if (el.marketingCb) el.marketingCb.checked = !!p.marketing;
    if (p.analytics) enableAnalytics();
  }

  function enableAnalytics() {
    if (analyticsEnabled) return;
    analyticsEnabled = true;
    console.log("Google Analytics enabled (placeholder)");
  }
}