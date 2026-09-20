// Tab switching
const tabButtons = document.querySelectorAll(".tab-btn");
const panels = document.querySelectorAll(".panel");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");

    tabButtons.forEach((b) => {
      b.classList.remove("active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-selected", "true");

    panels.forEach((panel) => {
      if (panel.id === targetId) {
        panel.hidden = false;
        panel.classList.add("active");
      } else {
        panel.hidden = true;
        panel.classList.remove("active");
      }
    });
  });
});

// Contact form (placeholder — no backend wired up yet)
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.hidden = false;
    status.textContent = "Thanks! This form isn't connected to anything yet, but your message would be sent here.";
    form.reset();
  });
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
