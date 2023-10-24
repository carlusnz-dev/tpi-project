// navbar scrolled
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
})

document.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
})

// nav-link active current page 
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
})

// mudar para o modo escuro e claro bootstrap 5
const btnSwitch = document.querySelector(".btn-switch");
const btnSwitchSun = document.querySelector(".bi-sun");
const btnSwitchMoon = document.querySelector(".bi-moon");
btnSwitch.addEventListener("click", () => {
    btnSwitchSun.classList.toggle("d-none");
    btnSwitchMoon.classList.toggle("d-none");
    document.body.classList.toggle("dark-mode");
})

