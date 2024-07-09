document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const queryInput = document.getElementById("query-input");
    const suggestionsList = document.getElementById("suggestions-list");
    const searchForm = document.getElementById("search-form");

    let elementos = {}; // Carregar os dados dos elementos

    fetch("./content.json")
        .then(response => response.json())
        .then(data => {
            elementos = data.elementos;
            console.log("Elementos carregados com sucesso:", elementos);
        })
        .catch(error => console.error("Erro ao buscar os dados dos elementos:", error));

    // Navbar scroll effect
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    };

    document.addEventListener("scroll", handleScroll);
    handleScroll();

    // Nav-link active current page
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });

    // Dark and light mode toggle
    const btnSwitch = document.querySelector(".btn-switch");
    const btnSwitchSun = document.querySelector(".bi-sun");
    const btnSwitchMoon = document.querySelector(".bi-moon");

    btnSwitch.addEventListener("click", () => {
        btnSwitchSun.classList.toggle("d-none");
        btnSwitchMoon.classList.toggle("d-none");
        document.body.classList.toggle("dark-mode");
    });

    // Search form submission
    searchForm.addEventListener("submit", event => {
        event.preventDefault();
        const query = queryInput.value.trim().toLowerCase();
        const element = Object.values(elementos).find(el => el.nome.toLowerCase() === query || el.informacoes.Sigla.toLowerCase() === query);

        if (element) {
            window.location.href = `pages/element.html?atomicNumber=${element.informacoes.numeroAtomico}`;
        } else {
            alert("Elemento não encontrado!");
        }
    });

    const handleInputChange = (e) => {
        const query = e.target.value.trim().toLowerCase();
        updateSuggestions(query);
    };

    const updateSuggestions = (query) => {
        let suggestions = [];
        if (query && elementos) {
            suggestions = Object.values(elementos)
                .filter(el =>
                    (el.nome && el.nome.toLowerCase().includes(query)) ||
                    (el.informacoes.Sigla && el.informacoes.Sigla.toLowerCase().includes(query))
                )
                .slice(0, 5);
        }
        renderSuggestions(suggestions);
    };

    const renderSuggestions = (suggestions) => {
        suggestionsList.innerHTML = '';
        suggestions.forEach(suggestion => {
            const li = document.createElement('li');
            li.textContent = `${suggestion.nome} (${suggestion.informacoes.Sigla})`;
            li.className = 'suggestion-item';
            li.addEventListener('click', () => {
                window.location.href = `pages/element.html?atomicNumber=${suggestion.informacoes.numeroAtomico}`;
            });
            suggestionsList.appendChild(li);
        });
    };

    queryInput.addEventListener('input', handleInputChange);
});