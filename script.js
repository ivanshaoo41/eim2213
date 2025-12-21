/* PASSCODE */
function checkPasscode() {
  const input = document.getElementById("passcode").value;
  if (input === "1230") {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("mainContent").classList.remove("hidden");
    startCounter();
  } else {
    document.getElementById("error").textContent = "Wrong code 💔";
  }
}

/* GIFT */
function openGift() {
  document.getElementById("gift").style.display = "block";
}

/* LOVE COUNTER */
function startCounter() {
  const startDate = new Date("2024-09-18T00:00:00");

  setInterval(() => {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    document.getElementById("counter").textContent =
      `${days} days, ${hours} hours, ${minutes} minutes 💖`;
  }, 1000);
}

/* FLOATING HEARTS */
document.addEventListener("click", function (e) {
  const heart = document.createElement("div");
  heart.innerHTML = "💗";
  heart.className = "heart";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 2000);
});
