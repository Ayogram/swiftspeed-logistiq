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
   CEO MODAL — FINAL
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
     GET QUOTE MODAL — FIXED
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

});

/* ================= MOBILE NAV ================= */

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("nav ul");
const navSocial = document.querySelector(".nav-social");

if(navToggle){
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    navSocial.classList.toggle("show");
  });
}
