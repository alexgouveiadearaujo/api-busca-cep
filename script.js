const inputCep = document.querySelector('#cep')
const btn = document.querySelector('input[type=button]')
const resultCep = document.querySelector('.result')

btn.addEventListener('click' , handleClick);

function handleClick(e){
    // e.preventDefault();
    buscaCep(inputCep.value);
}

function buscaCep(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(responseText => {
        // console.log(responseText)
        resultCep.innerHTML = 
            '<p> Logradouro: ' + responseText.logradouro +'</p>' +
            '<p> Bairro: ' + responseText.bairro +'</p>' +
            '<p> Cidade: ' + responseText.localidade +'</p>' +
            '<p> DDD: ' + responseText.ddd +'</p>' +
            '<p> UF: ' + responseText.uf +'</p>' 
    })
}

