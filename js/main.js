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

// close on overlay
overlay?.addEventListener("click", closeMenu);

// close on link click
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", closeMenu);
});


// ==========================
// SMOOTH SCROLL (FIXED)
// ==========================
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = link.getAttribute("href").replace("#", "");
    const target = document.getElementById(id);

    if (!target) return;

    const isMobile = window.innerWidth < 768;

    const offset = isMobile ? 90 : 60;

    const top =
      target.getBoundingClientRect().top +
      window.pageYOffset -
      offset;

    window.scrollTo({
      top,
      behavior: "smooth"
    });
  });
});


// ==========================
// ACTIVE SECTION HIGHLIGHT
// ==========================
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY + 120;

  sections.forEach(section => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach(link => link.classList.remove("active"));

      const active = document.querySelector(
        `.nav-link[href="#${section.id}"]`
      );

      if (active) active.classList.add("active");
    }
  });
});


// ==========================
// FIX: no auto jump on load
// ==========================
window.addEventListener("load", () => {
  if (window.location.hash) {
    window.scrollTo(0, 0);
  }
});