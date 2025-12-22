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

  setInterval(() => {
    const now = new Date();
    let diff = now - startDate;
    if (diff < 0) diff = 0;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("counter").textContent =
      `We’ve been together for: ${days}d ${hours}h ${minutes}m ${seconds}s 💖`;
  }, 1000);
}

/* FLOATING HEARTS & FLOWERS */
document.addEventListener("click", () => {
  spawnFloating("💗");
  spawnFloating("🌸");
});

function spawnFloating(symbol) {
  const el = document.createElement("div");
  el.innerHTML = symbol;
  el.className = symbol === "💗" ? "heart" : "flower";
  el.style.left = Math.random() * window.innerWidth + "px";
  el.style.top = Math.random() * window.innerHeight + "px";
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 3000);
}

/* ===========================
   SWIPE PHOTO ALBUM
=========================== */

let currentSlide = 0;

function initSlider() {
  const slides = document.getElementById("slides");
  const dots = document.querySelectorAll(".dots span");

  function updateSlider() {
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((dot, i) =>
      dot.classList.toggle("active", i === currentSlide)
    );
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      currentSlide = i;
      updateSlider();
    });
  });

  let startX = 0;

  slides.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  slides.addEventListener("touchend", e => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (diff > 50 && currentSlide < dots.length - 1) currentSlide++;
    if (diff < -50 && currentSlide > 0) currentSlide--;

    updateSlider();
  });

  updateSlider();
}

/* INIT SLIDER AFTER PAGE LOAD */
window.addEventListener("load", initSlider);
