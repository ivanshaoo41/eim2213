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

/* TIME TOGETHER COUNTER */
function startCounter() {
  const startDate = new Date("2025-09-18T00:00:00"); // start date together
  const interval = setInterval(() => {
    const now = new Date();
    let diff = now - startDate;

    if (diff < 0) diff = 0;

    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor((diff / (1000*60*60)) % 24);
    const minutes = Math.floor((diff / (1000*60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("counter").textContent =
      `We’ve been together for: ${days}d ${hours}h ${minutes}m ${seconds}s 💖`;
  }, 1000);
}

/* MINI PHOTO ALBUM CAPTIONS */
function showCaption(img, text) {
  document.getElementById("caption").textContent = text;
}

/* FLOATING HEARTS AND FLOWERS ON TAP */
document.addEventListener("click", function(e) {
  spawnFloating("💗");
  spawnFloating("🌸");
});

function spawnFloating(symbol) {
  const floating = document.createElement("div");
  floating.innerHTML = symbol;
  floating.className = (symbol === "💗") ? "heart" : "flower";
  floating.style.left = (Math.random()*window.innerWidth) + "px";
  floating.style.top = (Math.random()*window.innerHeight) + "px";
  document.body.appendChild(floating);
  setTimeout(() => floating.remove(), 3000);
}
