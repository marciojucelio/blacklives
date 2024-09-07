function pesquisar() {
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    // Obtém a seção HTML onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campoDePesquisa").value;
    campoPesquisa = campoPesquisa.toLowerCase();
    campoPesquisa = campoPesquisa.trim();
    // Itera sobre cada item de dados (assumindo que 'dados' é um array).
    if (!campoPesquisa) {
      section.innerHTML = "<h4>Você precisa pesquisar algo.</h4>";
      return
    }else {
      for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
          // Concatena HTML para criar um novo elemento de resultado.  
          resultados += `
            <div class="item-resultado">
              <h2> <a href="#" target="_blank">${dado.titulo}</a></h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <div class="centralizar-mais-informacoes"> 
                <a href=${dado.link} target="_blank">Mais informações</a>
              </div>
            </div>
          `;
        };
      };
    };
    if (!resultados) {
      resultados = "<h4> Nada encontrado </h4>"
    }
    // Atribui a string com os resultados ao conteúdo HTML da seção.
    section.innerHTML = resultados;
  } 
