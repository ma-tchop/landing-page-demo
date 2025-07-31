window.onload = () => {
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
    
}