document.getElementById("formulario").addEventListener("submit", (e) => {
  e.preventDefault();

  let resultado = document.querySelector("#resultado");

  let altura = document.querySelector("#id_altura").value;
  altura = parseFloat(altura.replace(",", "."));

  let peso = document.querySelector("#id_peso").value;
  peso = parseFloat(peso.replace(",", "."));

  let calculoImc = peso / (altura * altura);

  resultado.innerHTML = `Olá! O seu IMC é de <strong> ${calculoImc.toFixed(
    1
  )}<br></strong> `;

  if (calculoImc < 18.5) {
    resultado.innerHTML += "MAGREZA";
  } else if (calculoImc >= 18.5 && calculoImc <= 24.9) {
    resultado.innerHTML += "NORMAL";
  } else if (calculoImc >= 25 && calculoImc <= 29.9) {
    resultado.innerHTML += "SOBREPESO";
  } else if (calculoImc >= 30 && calculoImc <= 34.9) {
    resultado.innerHTML += "OBESIDADE GRAU I";
  } else if (calculoImc >= 35 && calculoImc <= 39.9) {
    resultado.innerHTML += "OBESIDADE GRAU II";
  } else {
    resultado.innerHTML += "OBESIDADE GRAU III";
  }
});
