// Função para buscar o número atômico da URL
function getAtomicNumberFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const atomicNumber = urlParams.get("atomicNumber");
    return atomicNumber ? parseInt(atomicNumber, 10) : null;
  }
  
  // Função para exibir as informações do elemento com base no número atômico
  function displayElementInfo(atomicNumber, elementos) {
    const elementInfo = document.getElementById("element-info");
    const elemento = elementos.find((el) => el.atomicNumber === atomicNumber);
  
    if (elemento) {
      elementInfo.innerHTML = `
        <h2>${elemento.name}</h2>
        <p>Símbolo: ${elemento.symbol}</p>
        <p>Massa Atômica: ${elemento.atomicMass}</p>
        <p>Radioatividade: ${elemento.radioactivity}</p>
        <!-- Adicione outros campos de informação aqui -->
      `;
    } else {
      elementInfo.textContent = "Elemento não encontrado.";
    }
  }
  
  // Função principal
  function main() {
    const atomicNumber = getAtomicNumberFromURL();
  
    if (atomicNumber !== null) {
      fetch("elementos.json")
        .then((response) => response.json())
        .then((data) => {
          const elementos = data.elementos;
          displayElementInfo(atomicNumber, elementos);
        })
        .catch((error) => {
          console.error("Erro ao buscar os dados dos elementos:", error);
        });
    } else {
      document.getElementById("element-info").textContent = "Número atômico não especificado na URL.";
    }
  }
  
  main();
  