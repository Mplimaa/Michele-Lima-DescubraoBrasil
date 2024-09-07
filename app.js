function pesquisar() {
    // Função responsável por buscar e exibir os resultados da pesquisa.
    //console.log("clicou"); // Log para depuração, indicando que a função foi chamada.
  
    let section = document.getElementById("resultados-pesquisa"); // Obtém a seção onde os resultados serão exibidos.
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    console.log(section); // Log para verificar se a seção foi encontrada.
  
    let resultados = ""; // String que armazenará os resultados formatados em HTML.
    let titulo = "";
    let descricao = "";
    let tags = "";

    //se campoPesquisa  for uma String sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você não informou a cidade e/ou descrição!</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    //então faça
    // Itera sobre os dados da pesquisa (assumindo que 'dados' é um array de objetos).
    // Para cada dado, cria um elemento HTML com as informações correspondentes. 
    for (let dado of dados){
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

    //se dado titulo includes campoPesquisa, 
    //console.log(dado.titulo.includes(campoPesquisa))
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
    //então cria um novo elemento p/ cada resultado
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}
                </a> 
            </h2>
            <p class="descricao-meta">${dado.descricao}</p> <a href=${dado.linkPesquisaDeHoteis} target="_blank">Pesquisar Hotéis</a> 
            <a href=${dado.linkPontosTuristicos} target="_blank">Pontos Turísticos</a> 
            <a href=${dado.linkBuscarViagemTerrestre} target="_blank">Consultar passagem de onibus</a>
            <a href=${dado.linkBuscarViagemAerea} target="_blank">Pesquisar passagem aérea</a>
            <a href=${dado.linkMaisInformacoes} target="_blank">Mais informações</a> 
        </div>
        `;
    }   
    }
  
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>."
    }
    // Atribui os resultados formatados ao conteúdo da seção.
    section.innerHTML = resultados;
  }

//comentários


//entre crase
// section.innerHTML = `<div class="item-resultado">
// <h2>
//     <a href="#" target="_blank">${dados[0].titulo}</a>
// </h2>
// <p class="descricao-meta">${dados[0].descricao}</p>
// <a href="https://www.booking.com/city/br/rio-de-janeiro.pt-br.html" target="_blank">Pesquisar Hotéis</a>
// <a href="https://www.tripadvisor.com.br/Attractions-g303506-Activities-Rio_de_Janeiro_State_of_Rio_de_Janeiro.html" target="_blank">Pontos Turísticos</a>
// <a href=" https://pt.wikipedia.org/wiki/Rio_de_Janeiro" target="_blank">Mais informações</a>
// </div>
// `