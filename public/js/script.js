// 1. Theme Toggle Logic
const themeBtn = document.getElementById("themeToggle");
const themeIcon = themeBtn.querySelector("i");
const body = document.body;

themeBtn.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme");

  if (currentTheme === "dark") {
    body.setAttribute("data-theme", "light");
    themeIcon.classList.replace("bi-sun-fill", "bi-moon-fill");
  } else {
    body.setAttribute("data-theme", "dark");
    themeIcon.classList.replace("bi-moon-fill", "bi-sun-fill");
  }
});

// 2. Navbar Scroll Effect
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("nav-scroll");
  } else {
    navbar.classList.remove("nav-scroll");
  }
});
// for counter
const counters = document.querySelectorAll(".counter");
let totalsec=2;
counters.forEach(counter => {
  const start = +counter.dataset.bsStart;
  const end = +counter.dataset.bsEnd;
  const sign= counter.dataset.bsSign;
  let i = start;
 const interval=setInterval(() => {
    counter.innerHTML=i+sign;
    i++;
    if(i>end) clearInterval(interval);
  }, 1000/(end/totalsec));
});
