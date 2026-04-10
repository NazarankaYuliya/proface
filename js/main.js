
// ==========================
// MOBILE MENU
// ==========================
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

function openMenu() {
  sidebar?.classList.remove("-translate-x-full");
  overlay?.classList.remove("hidden");
}

function closeMenu() {
  sidebar?.classList.add("-translate-x-full");
  overlay?.classList.add("hidden");
}

// toggle burger
menuBtn?.addEventListener("click", () => {
  const isOpen = !sidebar.classList.contains("-translate-x-full");

  if (isOpen) closeMenu();
  else openMenu();
});

// close overlay
overlay?.addEventListener("click", closeMenu);

// close on nav click (mobile UX)
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", closeMenu);
});


// ==========================
// ACTIVE STATE FUNCTION
// ==========================
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

function setActive(id) {
  navLinks.forEach(link => link.classList.remove("active"));

  const active = document.querySelector(`.nav-link[href="#${id}"]`);
  if (active) active.classList.add("active");
}


// ==========================
// SMOOTH SCROLL + HASH
// ==========================
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = link.getAttribute("href").replace("#", "");
    const target = document.getElementById(id);

    if (!target) return;

    // 🔥 мгновенный active
    setActive(id);

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    history.pushState(null, null, `#${id}`);
  });
});


// ==========================
// ACTIVE SECTION (OPTIMIZED)
// ==========================
let lastActive = null;

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY + 120;

  for (const section of sections) {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      if (lastActive !== section.id) {
        lastActive = section.id;
        setActive(section.id);
      }
      break;
    }
  }
});


// ==========================
// INITIAL LOAD FIX
// ==========================
window.addEventListener("load", () => {
  const hash = window.location.hash.replace("#", "");

  if (hash) {
    setActive(hash);

    const target = document.getElementById(hash);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 100);
    }
  } else {
    // 🔥 первая ссылка активна сразу
    setActive("home");
  }
});