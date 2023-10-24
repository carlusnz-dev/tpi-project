// Função para buscar o elemento da URL
function getElementFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const elementAtomicNumber = urlParams.get("atomicNumber");
    return elementAtomicNumber ? decodeURIComponent(elementAtomicNumber) : null;
}

// Função para exibir as informações do elemento
function displayElementInfo(elemento, elementos) {
    const elementInfo = document.getElementById("element-info");

    elementInfo.innerHTML = `
      <div class="container element--cover">
            <div class="row">
                <div class="col-12 cover--title">
                    <h1>${elemento.nome}</h1>
                </div>
            </div>
      </div>
      <div class="container element--content">
        <div class="row element--info">
          <div class="col-12">
            <h2>Informações:</h2>
          </div>
          <div class="col-12">
            <p>${elemento.descricao}</p>
            <p>Símbolo: ${elemento.informacoes.Sigla}</p>
            <p>Número Atômico: ${elemento.informacoes.numeroAtomico}</p>
            <p>Massa Atômica: ${elemento.informacoes.massaAtomica}</p>
            <p>Densidade: ${elemento.informacoes.densidade}</p>
            <p>eletronegatividade: ${elemento.informacoes.eletronegatividade}</p>
            <p>Ponto de Fusão: ${elemento.informacoes.pontoFusao}</p>
            <p>Ponto de Ebulição: ${elemento.informacoes.pontoEbulicao}</p>
            <p>Primeira Energia de Ionização: ${elemento.informacoes.primeiraEnergiaIonizacao}</p>
            <p>Raio Atômico: ${elemento.informacoes.raioAtomico}</p>
            <p>Configuração Eletrônica: ${elemento.informacoes.configuracaoEletronica}</p>
            <p>Radioatividade: ${elemento.informacoes.radiotividade}</p>
          </div>
        
        <div class="row">
          <h2>Aplicações:</h2>
          <ul>
            ${elemento.aplicacoes.map((app, index) => `<li>${app}</li>`).join("")}
          </ul>
        </div>
        
        <div class="row">
          <h2>Curiosidades:</h2>
          <ul>
            ${elemento.curiosidades.map((curiosidade, index) => `<li>${curiosidade}</li>`).join("")}
          </ul>
        </div>
      </div>
    `;
}

// Função principal
function main() {
    const elementSymbol = getElementFromURL();

    if (elementSymbol !== null) {
        fetch("content.json")
            .then((response) => response.json())
            .then((data) => {
                const elementos = data.elementos;
                const elemento = elementos[elementSymbol];

                if (elemento) {
                    displayElementInfo(elemento, elementos);
                } else {
                    document.getElementById("element-info").textContent = "Elemento não encontrado.";
                }
            })
            .catch((error) => {
                console.error("Erro ao buscar os dados dos elementos:", error);
            });
    } else {
        document.getElementById("element-info").textContent = "Símbolo do elemento não especificado na URL.";
    }
}

main();