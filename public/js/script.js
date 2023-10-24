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

document.addEventListener("DOMContentLoaded", () => {
    // Formulário de pesquisa
    const searchForm = document.querySelector(".search-form");
    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const queryInput = searchForm.querySelector("input[name='query']");
        const query = queryInput.value;
        window.location.href = `element.html?atomicNumber=${query}`;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.querySelector(".search-form");
    const queryInput = document.getElementById("form-control");

    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const query = queryInput.value;

        // Aqui você pode verificar se a consulta é um número ou um nome
        // Se for um número, redirecione diretamente para element.html?numeroAtomico=x
        if (!isNaN(query)) {
            const atomicNumber = parseInt(query, 10);
            window.location.href = `element.html?atomicNumber=${atomicNumber}`;
        } else {
            // Se for um nome, você precisará buscar o JSON para obter a correspondência do nome
            fetch("content.json")
                .then((response) => response.json())
                .then((data) => {
                    const elementos = data.elementos;
                    const elemento = elementos[query];

                    if (elemento) {
                        window.location.href = `element.html?atomicNumber=${elemento.numeroAtomico}`;
                    } else {
                        console.log("Elemento não encontrado.");
                    }
                })
                .catch((error) => {
                    console.error("Erro ao buscar os dados dos elementos:", error);
                });
        }
    });
});