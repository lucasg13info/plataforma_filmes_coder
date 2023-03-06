function localizaFilme(){
    let localizaFilme = prompt("Informe o nome do filme que quer localizar: ")
    alert("Filme não localizado!")

    return localizaFilme
}

let localizarFilme = localizaFilme()



// Listagem dos filmes
//Array de objetos
let filmes = [
    { 
    id: 1,
    nomeFilme: "Prometheus", 
    genero: "Ficção científica, Suspense", 
    duracao: "2h 03min",
    sinopse: "2089. Elizabeth Shaw (Noomi Rapace) e Charlie Holloway (Logan Marshall-Green) são exploradores que encontram a mesma pintura em várias cavernas na Terra. Com base nisto, eles desenvolvem uma teoria em que a pintura aponta para um lugar específico do universo, que teria alguma relação com o início da vida no planeta. A dupla convence um milionário, Peter Weyland (Guy Pearce), a bancar uma cara expedição interestelar para investigar o assunto. Desta forma, Elizabeth e Charlie entram para a tripulação da nave Prometheus, composta pelo robô David (Michael Fassbender), a diretora Meredith Vickers (Charlize Theron), o capitão Janek (Idris Elba), entre outros. Todos, com exceção de David, hibernam em sono criogênico até que a nave chegue ao objetivo, o que acontece em 2093. Encantados com a descoberta de um novo mundo e a possibilidade de revelarem o segredo da origem da vida na Terra, Elizabeth e Charlie não percebem que o local é também bastante perigoso.",
    lancamento: "15 de junho de 2012",
    capa: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fleiturafilmica.com.br%2Fprometheus%2F&psig=AOvVaw0zMmOcN0We-m_BL3kQSdzf&ust=1677939054660000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCOCu_pv4v_0CFQAAAAAdAAAAABAH"

    },
    { 
    id: 2,
    nomeFilme: "Sherek 2", 
    genero: "Ficção científica, Suspense", 
    duracao: "2h 03min",
    sinopse: "2089. Elizabeth Shaw (Noomi Rapace) e Charlie Holloway (Logan Marshall-Green) são exploradores que encontram a mesma pintura em várias cavernas na Terra. Com base nisto, eles desenvolvem uma teoria em que a pintura aponta para um lugar específico do universo, que teria alguma relação com o início da vida no planeta. A dupla convence um milionário, Peter Weyland (Guy Pearce), a bancar uma cara expedição interestelar para investigar o assunto. Desta forma, Elizabeth e Charlie entram para a tripulação da nave Prometheus, composta pelo robô David (Michael Fassbender), a diretora Meredith Vickers (Charlize Theron), o capitão Janek (Idris Elba), entre outros. Todos, com exceção de David, hibernam em sono criogênico até que a nave chegue ao objetivo, o que acontece em 2093. Encantados com a descoberta de um novo mundo e a possibilidade de revelarem o segredo da origem da vida na Terra, Elizabeth e Charlie não percebem que o local é também bastante perigoso.",
    lancamento: "15 de junho de 2012",
    capa: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fleiturafilmica.com.br%2Fprometheus%2F&psig=AOvVaw0zMmOcN0We-m_BL3kQSdzf&ust=1677939054660000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCOCu_pv4v_0CFQAAAAAdAAAAABAH"

    },
    { 
    id: 3,
    nomeFilme: "Prometheus", 
    genero: "Ficção científica, Suspense", 
    duracao: "2h 03min",
    sinopse: "2089. Elizabeth Shaw (Noomi Rapace) e Charlie Holloway (Logan Marshall-Green) são exploradores que encontram a mesma pintura em várias cavernas na Terra. Com base nisto, eles desenvolvem uma teoria em que a pintura aponta para um lugar específico do universo, que teria alguma relação com o início da vida no planeta. A dupla convence um milionário, Peter Weyland (Guy Pearce), a bancar uma cara expedição interestelar para investigar o assunto. Desta forma, Elizabeth e Charlie entram para a tripulação da nave Prometheus, composta pelo robô David (Michael Fassbender), a diretora Meredith Vickers (Charlize Theron), o capitão Janek (Idris Elba), entre outros. Todos, com exceção de David, hibernam em sono criogênico até que a nave chegue ao objetivo, o que acontece em 2093. Encantados com a descoberta de um novo mundo e a possibilidade de revelarem o segredo da origem da vida na Terra, Elizabeth e Charlie não percebem que o local é também bastante perigoso.",
    lancamento: "15 de junho de 2012",
    capa: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fleiturafilmica.com.br%2Fprometheus%2F&psig=AOvVaw0zMmOcN0We-m_BL3kQSdzf&ust=1677939054660000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCOCu_pv4v_0CFQAAAAAdAAAAABAH"

    },
    { 
    id: 4,
    nomeFilme: "Prometheus", 
    genero: "Ficção científica, Suspense", 
    duracao: "2h 03min",
    sinopse: "2089. Elizabeth Shaw (Noomi Rapace) e Charlie Holloway (Logan Marshall-Green) são exploradores que encontram a mesma pintura em várias cavernas na Terra. Com base nisto, eles desenvolvem uma teoria em que a pintura aponta para um lugar específico do universo, que teria alguma relação com o início da vida no planeta. A dupla convence um milionário, Peter Weyland (Guy Pearce), a bancar uma cara expedição interestelar para investigar o assunto. Desta forma, Elizabeth e Charlie entram para a tripulação da nave Prometheus, composta pelo robô David (Michael Fassbender), a diretora Meredith Vickers (Charlize Theron), o capitão Janek (Idris Elba), entre outros. Todos, com exceção de David, hibernam em sono criogênico até que a nave chegue ao objetivo, o que acontece em 2093. Encantados com a descoberta de um novo mundo e a possibilidade de revelarem o segredo da origem da vida na Terra, Elizabeth e Charlie não percebem que o local é também bastante perigoso.",
    lancamento: "15 de junho de 2012",
    capa: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fleiturafilmica.com.br%2Fprometheus%2F&psig=AOvVaw0zMmOcN0We-m_BL3kQSdzf&ust=1677939054660000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCOCu_pv4v_0CFQAAAAAdAAAAABAH"

    }
]
    //Convert to json:
    const emJSON = JSON.stringify(filmes);
    console.log(emJSON)





    // Listagem itens Array:
    let lista = ['Item1', 'Item2', 'Item3', 'Item 4'];
    document.getElementById('lista').innerHTML = 
    lista.map(item=>`<p>${item}</p>`).join('')       