const inputCep = document.querySelector("#cep");
const btn = document.querySelector("input[type=button]");
const resultCep = document.querySelector(".result");

btn.addEventListener("click", handleClick);
inputCep.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
    zipCodeSearch(inputCep.value);
    reset();
  }
});

function handleClick() {
  zipCodeSearch(inputCep.value);
  reset();
}

function reset() {
  inputCep.focus();
  inputCep.value = "";
}

async function zipCodeSearch(cep) {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const responseJson = await response.json();
    resultCep.innerHTML =
      "<p> Logradouro: " +
      responseJson.logradouro +
      "</p>" +
      "<p> Bairro: " +
      responseJson.bairro +
      "</p>" +
      "<p> Cidade: " +
      responseJson.localidade +
      "</p>" +
      "<p> DDD: " +
      responseJson.ddd +
      "</p>" +
      "<p> UF: " +
      responseJson.uf +
      "</p>";
  } catch (e) {
    const erro = new Error(e);
    console.log(erro);
    resultCep.innerHTML = "<p> CEP não identificado, verifique e tente novamente. </p>";
  }
}
