// Listagem dos filmes
//Array de objetos
let filmes = [
    { 
        id: 0,
        nomeFilme: "Tropa de Elite", 
        genero: "brasileiro", 
        duracao: "1h 55min",
        sinopse: "Em Tropa de Elite, o dia-a-dia do grupo de policiais e de um capitão do BOPE (Wagner Moura), que quer deixar a corporação e tenta encontrar um substituto para seu posto. Paralelamente dois amigos de infância se tornam policiais e se destacam pela honestidade e honra ao realizar suas funções, se indignando com a corrupção existente no batalhão em que atuam.",
        lancamento: "05 de Outubro de 2007",
        capa: "https://upload.wikimedia.org/wikipedia/pt/2/2a/TropaDeElitePoster.jpg"
    
    },
    { 
        id: 1,
        nomeFilme: "O Auto da Compadecida", 
        genero: "brasileiro", 
        duracao: "1h 35min",
        sinopse: "As aventuras dos nordestinos João Grilo (Matheus Natchergaele), um sertanejo pobre e mentiroso, e Chicó (Selton Mello), o mais covarde dos homens. Ambos lutam pelo pão de cada dia e atravessam por vários episódios enganando a todos do pequeno vilarejo de Taperoá, no sertão da Paraíba. A salvação da dupla acontece com a aparição da Nossa Senhora (Fernanda Montenegro). Adaptação da obra de Ariano Suassuna..",
        lancamento: "10 de Setembro de 2000",
        capa: "https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/87/75/19962458.jpg"
    
    },
    { 
        id: 2,
        nomeFilme: "Meniono Maluquinho 2 - A aventura", 
        genero: "kids", 
        duracao: "1h 35min",
        sinopse: "As aventuras dos nordestinos João Grilo (Matheus Natchergaele), um sertanejo pobre e mentiroso, e Chicó (Selton Mello), o mais covarde dos homens. Ambos lutam pelo pão de cada dia e atravessam por vários episódios enganando a todos do pequeno vilarejo de Taperoá, no sertão da Paraíba. A salvação da dupla acontece com a aparição da Nossa Senhora (Fernanda Montenegro). Adaptação da obra de Ariano Suassuna..",
        lancamento: "10 de Setembro de 2000",
        capa: "https://upload.wikimedia.org/wikipedia/pt/b/bf/O_auto_da_compadecida.jpg"
    
    },
    { 
        id: 3,
        nomeFilme: "Sherek 2", 
        genero: "Kids", 
        duracao: "2h 03min",
        sinopse: "2089. Elizabeth Shaw (Noomi Rapace) e Charlie Holloway (Logan Marshall-Green) são exploradores que encontram a mesma pintura em várias cavernas na Terra. Com base nisto, eles desenvolvem uma teoria em que a pintura aponta para um lugar específico do universo, que teria alguma relação com o início da vida no planeta. A dupla convence um milionário, Peter Weyland (Guy Pearce), a bancar uma cara expedição interestelar para investigar o assunto. Desta forma, Elizabeth e Charlie entram para a tripulação da nave Prometheus, composta pelo robô David (Michael Fassbender), a diretora Meredith Vickers (Charlize Theron), o capitão Janek (Idris Elba), entre outros. Todos, com exceção de David, hibernam em sono criogênico até que a nave chegue ao objetivo, o que acontece em 2093. Encantados com a descoberta de um novo mundo e a possibilidade de revelarem o segredo da origem da vida na Terra, Elizabeth e Charlie não percebem que o local é também bastante perigoso.",
        lancamento: "15 de junho de 2012",
        capa: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fleiturafilmica.com.br%2Fprometheus%2F&psig=AOvVaw0zMmOcN0We-m_BL3kQSdzf&ust=1677939054660000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCOCu_pv4v_0CFQAAAAAdAAAAABAH"

    },
    { 
        id: 4,
        nomeFilme: "Mad Max", 
        genero: "Ação", 
        duracao: "2h 0min",
        sinopse: "Após ser capturado por Immortan Joe, um guerreiro das estradas chamado Max (Tom Hardy) se vê no meio de uma guerra mortal, iniciada pela Imperatriz Furiosa (Charlize Theron) na tentativa se salvar um grupo de garotas. Também tentanto fugir, Max aceita ajudar Furiosa em sua luta contra Joe e se vê dividido entre mais uma vez seguir sozinho seu caminho ou ficar com o grupo.",
        lancamento: "15 de junho de 2015",
        capa: "https://br.web.img3.acsta.net/c_310_420/pictures/15/03/26/21/14/132057.jpg"
    },
    
    { 
        id: 5,
        nomeFilme: "Prometheus", 
        genero: "Ação", 
        duracao: "2h 03min",
        sinopse: "2089. Elizabeth Shaw (Noomi Rapace) e Charlie Holloway (Logan Marshall-Green) são exploradores que encontram a mesma pintura em várias cavernas na Terra. Com base nisto, eles desenvolvem uma teoria em que a pintura aponta para um lugar específico do universo, que teria alguma relação com o início da vida no planeta. A dupla convence um milionário, Peter Weyland (Guy Pearce), a bancar uma cara expedição interestelar para investigar o assunto. Desta forma, Elizabeth e Charlie entram para a tripulação da nave Prometheus, composta pelo robô David (Michael Fassbender), a diretora Meredith Vickers (Charlize Theron), o capitão Janek (Idris Elba), entre outros. Todos, com exceção de David, hibernam em sono criogênico até que a nave chegue ao objetivo, o que acontece em 2093. Encantados com a descoberta de um novo mundo e a possibilidade de revelarem o segredo da origem da vida na Terra, Elizabeth e Charlie não percebem que o local é também bastante perigoso.",
        lancamento: "15 de junho de 2012",
        capa: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/89/69/24/20125709.jpg"
    },
    { 
        id: 6,
        nomeFilme: "VINGADORES: ULTIMATO", 
        genero: "Ação", 
        duracao: "2h 03min",
        sinopse: "Em Vingadores: Ultimato, após Thanos eliminar metade das criaturas vivas em Vingadores: Guerra Infinita, os heróis precisam lidar com a dor da perda de amigos e seus entes queridos. Com Tony Stark (Robert Downey Jr.) vagando perdido no espaço sem água nem comida, o Capitão América/Steve Rogers (Chris Evans) e a Viúva Negra/Natasha Romanov (Scarlett Johansson) precisam liderar a resistência contra o titã louco.",
        lancamento: "11 de abril de 2019",
        capa: "https://br.web.img2.acsta.net/c_310_420/pictures/19/04/26/17/30/2428965.jpg"
    },
    { 
        id: 7,
        nomeFilme: "Batman - O Cavaleiro Das Trevas", 
        genero: "Ação", 
        duracao: "2h 32min",
        sinopse: "Após dois anos desde o surgimento do Batman (Christian Bale), os criminosos de Gotham City têm muito o que temer. Com a ajuda do tenente James Gordon (Gary Oldman) e do promotor público Harvey Dent (Aaron Eckhart), Batman luta contra o crime organizado. Acuados com o combate, os chefes do crime aceitam a proposta feita pelo Coringa ",
        lancamento: "11 de abril de 2019",
        capa: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/86/98/32/19870786.jpg"
    },
    { 
        id: 8,
        nomeFilme: "CREED", 
        genero: "Ação", 
        duracao: "1h 57min",
        sinopse: "Em Creed III, continuação do longa de 2018, Michael B. Jordan volta a interpretar Adonis Creed. Depois de dominar o mundo do boxe, Adonis Creed vem prosperando tanto na carreira quanto na vida familiar. Quando um amigo de infância e ex-prodígio do boxe, Damian (Jonathan Majors), ressurge depois de cumprir uma longa sentença na prisão, ele está ansioso para provar que merece sua chance no ringue. Damian pede a ajuda de Creed para que ele o ajude a voltar para os campeonatos de luta. Apesar de tudo, dezoito anos na prisão mudam a pessoa e Damian não está nada satisfeito que Creed tomou seu lugar no ringue de boxe. Dois velhos amigos então vão lutar para enfrentar seus passados juntos e enfrentar o futuro que os aguarda. Para acertar as contas, Adonis deve colocar seu futuro em risco para lutar contra Damian - um lutador que não tem nada a perder.",
        lancamento: "02 de março de 2023",
        capa: "https://br.web.img3.acsta.net/c_310_420/pictures/23/02/27/22/17/0078543.jpg"
    }
    ]
    //Convert to json:
    // const emJSON = JSON.stringify(filmes);
    // console.log(emJSON)



    for(const filme of filmes){
         let caixa = document.createElement("section")
        //let caixa = document.getElementById("img_da_certo")
        //console.log(filme)
        caixa.innerHTML = `<p>${filme.nomeFilme}</p>
                           <p>${filme.genero}</p>
                           <img src='${filme.capa}'</p>`
                            //    <span class="duracao">$(filme.duracao)</span>;
                            //document.getElementById('cardTitle').innerHTML = filme
        
        document.body.appendChild(caixa)
    }



    //Fincionalidades:
    function listaFavoritos(){

    }

    function retirarFilmeFavoritos(){

    }

    function pesquisarFilme(){

    }

    function sugestaoFilmes(){

    }
    

    const filtroFilmesAcao = filmes.filter((filmes)=>{
        return filmes.genero === "Ação"
    })
    console.log(filtroFilmesAcao)



   

    // Listagem itens Array:
    let lista = ['Item1', 'Item2', 'Item3', 'Item 4'];
    document.getElementById('lista').innerHTML = 
    lista.map(item=>`<p>${item}</p>`).join('')       
