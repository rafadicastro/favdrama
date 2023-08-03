const form = document.querySelector("#formCadastro")
const inputNome = document.querySelector("#inputNome")
const inputGenero = document.querySelector("#inputGenero")
const inputFavoritos = document.querySelector("#inputFavoritos")

function novoItem(dados){
    localStorage.setItem("serie", JSON.stringify(dados));
};

function mostrarItem(){
    const showSeries = localStorage.getItem("serie");
    const seriesObject = JSON.parse(showSeries);
    let items =
    console.log(seriesObject);
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if(inputNome.value === ""){
        alert("Por favor, digite o nome!");
        return
    } 
    if(inputGenero.value === ""){
        alert("Por favor, digite o Gênero!");
        return
    } 
    if(inputFavoritos.value === ""){
        alert("Por favor, digite os fatos favoritos!");
        return
    }
    const dados = {nome: inputNome.value, Genero: inputGenero.value, Favoritos: inputFavoritos.value}
    novoItem(dados)
    form.submit();
});

