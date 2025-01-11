document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const valorInput = document.getElementById("valor");
  const antesSelect = document.getElementById("antes");
  const depoisSelect = document.getElementById("depois");
  const resultadoParagrafo = document.getElementById("resultado");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Obtém os valores inseridos pelo usuário
    const valor = parseFloat(valorInput.value);
    const unidadeAntes = antesSelect.value;
    const unidadeDepois = depoisSelect.value;

    if (!valor || !unidadeAntes || !unidadeDepois) {
      resultadoParagrafo.textContent =
        "Por favor, preencha todos os campos corretamente.";
      resultadoParagrafo.style.color = "red";
      return;
    }

    // Função de conversão
    const resultado = converterUnidades(valor, unidadeAntes, unidadeDepois);

    if (resultado !== null) {
      resultadoParagrafo.textContent = `O valor convertido é: ${formatarNumero(
        resultado
      )} ${unidadeDepois}`;
      resultadoParagrafo.style.color = "#725C3F";
    } else {
      resultadoParagrafo.textContent =
        "Conversão não disponível para essas unidades.";
      resultadoParagrafo.style.color = "#725C3F";
    }
  });
});

function formatarNumero(numero) {
  return Number.isInteger(numero) ? numero.toString() : numero.toFixed(2);
}

function converterUnidades(valor, de, para) {
  const tabelaConversao = {
    xícaras: {
      "colheres de sopa": 16,
      "colheres de chá": 48,
      gramas: 120,
      mililitros: 240,
    },
    "colheres de sopa": {
      xícaras: 1 / 16,
      "colheres de chá": 3,
      gramas: 7.5,
      mililitros: 15,
    },
    "colheres de chá": {
      xícaras: 1 / 48,
      "colheres de sopa": 1 / 3,
      gramas: 2.5,
      mililitros: 5,
    },
    gramas: {
      xícaras: 1 / 120,
      "colheres de sopa": 1 / 7.5,
      "colheres de chá": 1 / 2.5,
      mililitros: 1,
    },
    mililitros: {
      xícaras: 1 / 240,
      "colheres de sopa": 1 / 15,
      "colheres de chá": 1 / 5,
      gramas: 1,
    },
  };

  if (tabelaConversao[de] && tabelaConversao[de][para]) {
    return valor * tabelaConversao[de][para];
  } else {
    return null;
  }
}
