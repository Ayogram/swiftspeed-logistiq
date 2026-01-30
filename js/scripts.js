document.addEventListener("DOMContentLoaded", () => {

  /* ============================
     SCROLL REVEAL
  ============================ */

  const revealElements = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  /* ============================
     NAV SHADOW
  ============================ */

  const nav = document.querySelector("nav");

  if (nav) {
    window.addEventListener("scroll", () => {
      nav.style.boxShadow =
        window.scrollY > 80
          ? "0 4px 18px rgba(0,0,0,.08)"
          : "none";
    });
  }

  /* ============================
     CEO MODAL
  ============================ */

  const ceoModal = document.getElementById("ceoModal");
  const ceoClose = ceoModal?.querySelector(".ceo-close");

  window.openCeoModal = function () {
    if (!ceoModal) return;
    ceoModal.classList.add("show");
    document.body.style.overflow = "hidden";
  };

  function closeCeoModal() {
    if (!ceoModal) return;
    ceoModal.classList.remove("show");
    document.body.style.overflow = "auto";
  }

  ceoClose?.addEventListener("click", closeCeoModal);

  ceoModal?.addEventListener("click", e => {
    if (e.target === ceoModal) closeCeoModal();
  });

  /* ============================
     GET QUOTE MODAL
  ============================ */

  const quoteBtn = document.getElementById("openQuoteModal");
  const quoteModal = document.getElementById("quoteModal");
  const quoteClose = quoteModal?.querySelector(".quote-close");

  quoteBtn?.addEventListener("click", e => {
    e.preventDefault();
    quoteModal.classList.add("show");
    document.body.style.overflow = "hidden";
  });

  function closeQuote() {
    quoteModal.classList.remove("show");
    document.body.style.overflow = "auto";
  }

  quoteClose?.addEventListener("click", closeQuote);

  quoteModal?.addEventListener("click", e => {
    if (e.target === quoteModal) closeQuote();
  });

  /* ============================
     MOBILE NAV
  ============================ */

  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector("nav ul");
  const navSocial = document.querySelector(".nav-social");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show");
      navSocial.classList.toggle("show");
    });
  }

  /* ============================
     BACKEND FORMS
  ============================ */

  const BACKEND_URL =
    "https://script.google.com/macros/s/AKfycbwqS11IrfBZ0mqKrqoqlog63obxN8SugF4XtaWKmP1Q07d2xQVz70yMj6Ao3birHPc/exec";

  // ---- QUOTE FORM ----
  const quoteForm = document.querySelector("#quoteForm");

  if (quoteForm) {
    quoteForm.addEventListener("submit", async e => {
      e.preventDefault();

      const name = quoteForm.querySelector("input[name='name']").value.trim();
      const email = quoteForm.querySelector("input[name='email']").value.trim();
      const message = quoteForm
        .querySelector("textarea[name='message']")
        .value.trim();

      try {
        const res = await fetch(BACKEND_URL, {
          method: "POST",
          body: JSON.stringify({
            type: "quote",
            name,
            email,
            message
          })
        });

        const data = await res.json();

        if (data.success) {
          alert("✅ Request sent successfully!");
          quoteForm.reset();
        } else {
          alert("❌ Error sending request.");
        }
      } catch (err) {
        console.error(err);
        alert("⚠ Network error. Try again later.");
      }
    });
  }

  // ---- SUBSCRIBE FORM ----
  const subscribeForm = document.querySelector("#subscribeForm");

  // ---- SUBSCRIBE FORMS (MULTIPLE) ----
// ---- SUBSCRIBE FORMS (MULTIPLE) ----
const subscribeForms = document.querySelectorAll(".subscribe-form");

subscribeForms.forEach(form => {
  form.addEventListener("submit", async e => {
    e.preventDefault();

    const emailInput = form.querySelector("input[name='email']");
    if (!emailInput) return;

    const email = emailInput.value.trim();

    try {
      const res = await fetch(BACKEND_URL, {
        method: "POST",
        body: JSON.stringify({
          type: "subscribe",
          email
        })
      });

      const data = await res.json();

      if (data.success) {
        alert("✅ Subscribed successfully!");
        form.reset();
      } else {
        alert("❌ Subscription failed.");
      }
    } catch (err) {
      console.error(err);
      alert("⚠ Network error. Try again later.");
    }
  });
});


});
