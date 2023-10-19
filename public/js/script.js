// navbar scrolled
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