document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();

  // Placeholder for SNS integration (simulate success)
  const form = e.target;
  form.reset();

  const successMsg = document.querySelector(".success-message");
  successMsg.style.display = "block";

  setTimeout(() => {
    successMsg.style.display = "none";
  }, 4000);
});

// Pricing card selection logic
document.addEventListener("DOMContentLoaded", () => {
  const priceCards = document.querySelectorAll(".price-card");

  priceCards.forEach(card => {
    card.addEventListener("click", () => {
      // remove highlight from all cards
      priceCards.forEach(c => c.classList.remove("highlight"));
      // add highlight to the clicked one
      card.classList.add("highlight");
    });
  });
});

// Handle "Start Free Trial" and "Upgrade to Pro" redirects
document.addEventListener("DOMContentLoaded", () => {
  const startTrialBtn = document.getElementById("startFreeTrialBtn");
  const upgradeProBtn = document.getElementById("upgradeProBtn");

  if (startTrialBtn) {
    startTrialBtn.addEventListener("click", () => {
      // Redirect to your sign-up page (update this URL)

      //window.location.href = "https://tekrataQAi.auth.us-east-1.amazoncognito.com/signup";

      window.location.href = "signup.html";
    });
  }

  if (upgradeProBtn) {
    upgradeProBtn.addEventListener("click", () => {
      // Redirect to your sign-up or billing page
      window.location.href = "signup.html?plan=pro";
    });
  }
});

