// function localizaFilme(){
//     let localizaFilme = prompt("Informe o nome do filme que quer localizar: ")
//     alert("Filme não localizado!")

//     return localizaFilme
// }

// let localizarFilme = localizaFilme()


// Sort()


// Listagem dos filmes
//Array de objetos
let filmes = [
    { 
        id: 1,
        nomeFilme: "Tropa de Elite", 
        genero: "brasileiro", 
        duracao: "1h 55min",
        sinopse: "Em Tropa de Elite, o dia-a-dia do grupo de policiais e de um capitão do BOPE (Wagner Moura), que quer deixar a corporação e tenta encontrar um substituto para seu posto. Paralelamente dois amigos de infância se tornam policiais e se destacam pela honestidade e honra ao realizar suas funções, se indignando com a corrupção existente no batalhão em que atuam.",
        lancamento: "05 de Outubro de 2007",
        capa: "https://upload.wikimedia.org/wikipedia/pt/2/2a/TropaDeElitePoster.jpg"
    
    },
    { 
        id: 2,
        nomeFilme: "O Auto da Compadecida", 
        genero: "brasileiro", 
        duracao: "1h 35min",
        sinopse: "As aventuras dos nordestinos João Grilo (Matheus Natchergaele), um sertanejo pobre e mentiroso, e Chicó (Selton Mello), o mais covarde dos homens. Ambos lutam pelo pão de cada dia e atravessam por vários episódios enganando a todos do pequeno vilarejo de Taperoá, no sertão da Paraíba. A salvação da dupla acontece com a aparição da Nossa Senhora (Fernanda Montenegro). Adaptação da obra de Ariano Suassuna..",
        lancamento: "10 de Setembro de 2000",
        capa: "https://upload.wikimedia.org/wikipedia/pt/b/bf/O_auto_da_compadecida.jpg"
    
    },
    { 
        id: 3,
        nomeFilme: "Meniono Maluquinho 2 - A aventura", 
        genero: ["brasileiro", "kids"], 
        duracao: "1h 35min",
        sinopse: "As aventuras dos nordestinos João Grilo (Matheus Natchergaele), um sertanejo pobre e mentiroso, e Chicó (Selton Mello), o mais covarde dos homens. Ambos lutam pelo pão de cada dia e atravessam por vários episódios enganando a todos do pequeno vilarejo de Taperoá, no sertão da Paraíba. A salvação da dupla acontece com a aparição da Nossa Senhora (Fernanda Montenegro). Adaptação da obra de Ariano Suassuna..",
        lancamento: "10 de Setembro de 2000",
        capa: "https://upload.wikimedia.org/wikipedia/pt/b/bf/O_auto_da_compadecida.jpg"
    
    },
    { 
        id: 4,
        nomeFilme: "Mad Max", 
        genero: "Ação", 
        duracao: "2h 0min",
        sinopse: "Após ser capturado por Immortan Joe, um guerreiro das estradas chamado Max (Tom Hardy) se vê no meio de uma guerra mortal, iniciada pela Imperatriz Furiosa (Charlize Theron) na tentativa se salvar um grupo de garotas. Também tentanto fugir, Max aceita ajudar Furiosa em sua luta contra Joe e se vê dividido entre mais uma vez seguir sozinho seu caminho ou ficar com o grupo.",
        lancamento: "15 de junho de 2015",
        capa: "https://github.com/supahfunk/supah-codepen/blob/master/movie-madmax.jpg?raw=true"

    },
    { 
        id: 5,
        nomeFilme: "Sherek 2", 
        genero: "Kids", 
        duracao: "2h 03min",
        sinopse: "2089. Elizabeth Shaw (Noomi Rapace) e Charlie Holloway (Logan Marshall-Green) são exploradores que encontram a mesma pintura em várias cavernas na Terra. Com base nisto, eles desenvolvem uma teoria em que a pintura aponta para um lugar específico do universo, que teria alguma relação com o início da vida no planeta. A dupla convence um milionário, Peter Weyland (Guy Pearce), a bancar uma cara expedição interestelar para investigar o assunto. Desta forma, Elizabeth e Charlie entram para a tripulação da nave Prometheus, composta pelo robô David (Michael Fassbender), a diretora Meredith Vickers (Charlize Theron), o capitão Janek (Idris Elba), entre outros. Todos, com exceção de David, hibernam em sono criogênico até que a nave chegue ao objetivo, o que acontece em 2093. Encantados com a descoberta de um novo mundo e a possibilidade de revelarem o segredo da origem da vida na Terra, Elizabeth e Charlie não percebem que o local é também bastante perigoso.",
        lancamento: "15 de junho de 2012",
        capa: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fleiturafilmica.com.br%2Fprometheus%2F&psig=AOvVaw0zMmOcN0We-m_BL3kQSdzf&ust=1677939054660000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCOCu_pv4v_0CFQAAAAAdAAAAABAH"

    },
    { 
        id: 6,
        nomeFilme: "Prometheus", 
        genero: "Ficção científica, Suspense", 
        duracao: "2h 03min",
        sinopse: "2089. Elizabeth Shaw (Noomi Rapace) e Charlie Holloway (Logan Marshall-Green) são exploradores que encontram a mesma pintura em várias cavernas na Terra. Com base nisto, eles desenvolvem uma teoria em que a pintura aponta para um lugar específico do universo, que teria alguma relação com o início da vida no planeta. A dupla convence um milionário, Peter Weyland (Guy Pearce), a bancar uma cara expedição interestelar para investigar o assunto. Desta forma, Elizabeth e Charlie entram para a tripulação da nave Prometheus, composta pelo robô David (Michael Fassbender), a diretora Meredith Vickers (Charlize Theron), o capitão Janek (Idris Elba), entre outros. Todos, com exceção de David, hibernam em sono criogênico até que a nave chegue ao objetivo, o que acontece em 2093. Encantados com a descoberta de um novo mundo e a possibilidade de revelarem o segredo da origem da vida na Terra, Elizabeth e Charlie não percebem que o local é também bastante perigoso.",
        lancamento: "15 de junho de 2012",
        capa: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fleiturafilmica.com.br%2Fprometheus%2F&psig=AOvVaw0zMmOcN0We-m_BL3kQSdzf&ust=1677939054660000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCOCu_pv4v_0CFQAAAAAdAAAAABAH"
    }
]
    //Convert to json:
    // const emJSON = JSON.stringify(filmes);
    // console.log(emJSON)



    for(const filme of filmes){
         let caixa = document.createElement("section")
        //let caixa = document.getElementById("img_da_certo")
        console.log(filme)
        caixa.innerHTML = `<p>${filme.nomeFilme}</p>
                           <p>${filme.genero}</p>
                           <img src='${filme.capa}'</p>`
                            //    <span class="duracao">$(filme.duracao)</span>;
                            //document.getElementById('cardTitle').innerHTML = filme
        
        document.body.appendChild(caixa)
    }







    // Listagem itens Array:
    let lista = ['Item1', 'Item2', 'Item3', 'Item 4'];
    document.getElementById('lista').innerHTML = 
    lista.map(item=>`<p>${item}</p>`).join('')       
