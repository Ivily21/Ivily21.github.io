let verificar = () => {
  let numero = Number(window.document.getElementById("id_idade").value);
  let resultado = document.querySelector("#id_resultado");

  if (numero <= 18) {
    resultado.innerHTML = "Inapto para inicio";
  } else if (numero <= 50) {
    resultado.innerHTML =
      "Você está apto para inicio. Você fará a renovação da habilitação a cada 10 anos.";
  } else if (numero <= 69) {
    resultado.innerHTML =
      "Você está apto para inicio. Você fará a renovação da habilitação a cada 5 anos.";
  } else {
    resultado.innerHTML =
      "Você está apto para inicio. Você fará a renovação da habilitação a cada 3 anos.";
  }
};
