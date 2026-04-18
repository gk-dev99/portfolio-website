// ===== SCROLL ANIMATION =====
const sections = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

sections.forEach((section) => {
  observer.observe(section);
});

// ===== NAVBAR ACTIVE LINK =====
const allSections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  allSections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
const topBtn = document.getElementById("topBtn");

// scroll pe show/hide
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

// click pe upar jao
topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
const toggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});