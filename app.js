function pesquisar() {
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
  
    // Obtém a seção HTML onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");
    
    // Itera sobre cada item de dados (assumindo que 'dados' é um array).
    for (let dado of dados) {
      // Concatena HTML para criar um novo elemento de resultado.
      // A template literal (``) permite a interpolação de variáveis.
      resultados += `
        <div class="item-resultado">
          <h2> <a href="#" target="_blank">${dado.titulo}</a></h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <div class="centralizar-mais-informacoes">
            <a href=${dado.link} target="_blank">Mais informações</a>
          </div>
        </div>
      `;
    }
  
    // Atribui a string com os resultados ao conteúdo HTML da seção.
    section.innerHTML = resultados;
    
  } 
