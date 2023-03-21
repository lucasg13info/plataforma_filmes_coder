// Listagem dos filmes
let filmes = [
    { 
        id: 1,
        nomeFilme: "Tropa de Elite", 
        genero: "brasileiro", 
        duracao: "1h 55min",
        sinopse: "Em Tropa de Elite, o dia-a-dia do grupo de policiais e de um capitão do BOPE (Wagner Moura), que quer deixar a corporação e tenta encontrar um substituto para seu posto. Paralelamente dois amigos de infância se tornam policiais e se destacam pela honestidade e honra ao realizar suas funções, se indignando com a corrupção existente no batalhão em que atuam.",
        lancamento: "05 de Outubro de 2007",
        capa: "../img/filmes/tropaDeElite.png",
        play: "../img/filmes/botaoPlay.png"
    
    },
    { 
        id: 2,
        nomeFilme: "O Auto da Compadecida", 
        genero: "brasileiro", 
        duracao: "1h 35min",
        sinopse: "As aventuras dos nordestinos João Grilo (Matheus Natchergaele), um sertanejo pobre e mentiroso, e Chicó (Selton Mello), o mais covarde dos homens. Ambos lutam pelo pão de cada dia e atravessam por vários episódios enganando a todos do pequeno vilarejo de Taperoá, no sertão da Paraíba. A salvação da dupla acontece com a aparição da Nossa Senhora (Fernanda Montenegro). Adaptação da obra de Ariano Suassuna..",
        lancamento: "10 de Setembro de 2000",
        capa: "../img/filmes/cumpadecida.png",
        play: "../img/filmes/botaoPlay.png"
    
    },
    { 
        id: 3,
        nomeFilme: "Meniono Maluquinho 2 - A aventura", 
        genero: "Kids", 
        duracao: "1h 35min",
        sinopse: "As aventuras dos nordestinos João Grilo (Matheus Natchergaele), um sertanejo pobre e mentiroso, e Chicó (Selton Mello), o mais covarde dos homens. Ambos lutam pelo pão de cada dia e atravessam por vários episódios enganando a todos do pequeno vilarejo de Taperoá, no sertão da Paraíba. A salvação da dupla acontece com a aparição da Nossa Senhora (Fernanda Montenegro). Adaptação da obra de Ariano Suassuna..",
        lancamento: "10 de Setembro de 2000",
        capa: "../img/filmes/maluquinho.png",
        play: "../img/filmes/botaoPlay.png"
    
    },
    { 
        id: 4,
        nomeFilme: "Sherek 2", 
        genero: "Kids", 
        duracao: "2h 03min",
        sinopse: "2089. Elizabeth Shaw (Noomi Rapace) e Charlie Holloway (Logan Marshall-Green) são exploradores que encontram a mesma pintura em várias cavernas na Terra. Com base nisto, eles desenvolvem uma teoria em que a pintura aponta para um lugar específico do universo, que teria alguma relação com o início da vida no planeta. A dupla convence um milionário, Peter Weyland (Guy Pearce), a bancar uma cara expedição interestelar para investigar o assunto. Desta forma, Elizabeth e Charlie entram para a tripulação da nave Prometheus, composta pelo robô David (Michael Fassbender), a diretora Meredith Vickers (Charlize Theron), o capitão Janek (Idris Elba), entre outros. Todos, com exceção de David, hibernam em sono criogênico até que a nave chegue ao objetivo, o que acontece em 2093. Encantados com a descoberta de um novo mundo e a possibilidade de revelarem o segredo da origem da vida na Terra, Elizabeth e Charlie não percebem que o local é também bastante perigoso.",
        lancamento: "15 de junho de 2012",
        capa: "../img/filmes/sherek2.png",
        play: "../img/filmes/botaoPlay.png"

    },
    { 
        id: 5,
        nomeFilme: "Mad Max", 
        genero: "Ação", 
        duracao: "2h 0min",
        sinopse: "Após ser capturado por Immortan Joe, um guerreiro das estradas chamado Max (Tom Hardy) se vê no meio de uma guerra mortal, iniciada pela Imperatriz Furiosa (Charlize Theron) na tentativa se salvar um grupo de garotas. Também tentanto fugir, Max aceita ajudar Furiosa em sua luta contra Joe e se vê dividido entre mais uma vez seguir sozinho seu caminho ou ficar com o grupo.",
        lancamento: "15 de junho de 2015",
        capa: "../img/filmes/madmax.png",
        play: "../img/filmes/botaoPlay.png"
    },
    
    { 
        id: 6,
        nomeFilme: "Prometheus", 
        genero: "Ação", 
        duracao: "2h 03min",
        sinopse: "2089. Elizabeth Shaw (Noomi Rapace) e Charlie Holloway (Logan Marshall-Green) são exploradores que encontram a mesma pintura em várias cavernas na Terra. Com base nisto, eles desenvolvem uma teoria em que a pintura aponta para um lugar específico do universo, que teria alguma relação com o início da vida no planeta. A dupla convence um milionário, Peter Weyland (Guy Pearce), a bancar uma cara expedição interestelar para investigar o assunto. Desta forma, Elizabeth e Charlie entram para a tripulação da nave Prometheus, composta pelo robô David (Michael Fassbender), a diretora Meredith Vickers (Charlize Theron), o capitão Janek (Idris Elba), entre outros. Todos, com exceção de David, hibernam em sono criogênico até que a nave chegue ao objetivo, o que acontece em 2093. Encantados com a descoberta de um novo mundo e a possibilidade de revelarem o segredo da origem da vida na Terra, Elizabeth e Charlie não percebem que o local é também bastante perigoso.",
        lancamento: "15 de junho de 2012",
        capa: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/89/69/24/20125709.jpg",
        play: "../img/filmes/botaoPlay.png"
    },
    { 
        id: 7,
        nomeFilme: "VINGADORES: ULTIMATO", 
        genero: "Ação", 
        duracao: "2h 03min",
        sinopse: "Em Vingadores: Ultimato, após Thanos eliminar metade das criaturas vivas em Vingadores: Guerra Infinita, os heróis precisam lidar com a dor da perda de amigos e seus entes queridos. Com Tony Stark (Robert Downey Jr.) vagando perdido no espaço sem água nem comida, o Capitão América/Steve Rogers (Chris Evans) e a Viúva Negra/Natasha Romanov (Scarlett Johansson) precisam liderar a resistência contra o titã louco.",
        lancamento: "11 de abril de 2019",
        capa: "https://br.web.img2.acsta.net/c_310_420/pictures/19/04/26/17/30/2428965.jpg",
        play: "../img/filmes/botaoPlay.png"
    },
    { 
        id: 8,
        nomeFilme: "Batman - O Cavaleiro Das Trevas", 
        genero: "Ação", 
        duracao: "2h 32min",
        sinopse: "Após dois anos desde o surgimento do Batman (Christian Bale), os criminosos de Gotham City têm muito o que temer. Com a ajuda do tenente James Gordon (Gary Oldman) e do promotor público Harvey Dent (Aaron Eckhart), Batman luta contra o crime organizado. Acuados com o combate, os chefes do crime aceitam a proposta feita pelo Coringa ",
        lancamento: "11 de abril de 2019",
        capa: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/86/98/32/19870786.jpg",
        play: "../img/filmes/botaoPlay.png"
        },
    { 
        id: 9,
        nomeFilme: "Creed III", 
        genero: "Ação", 
        duracao: "1h 57min",
        sinopse: "Em Creed III, continuação do longa de 2018, Michael B. Jordan volta a interpretar Adonis Creed. Depois de dominar o mundo do boxe, Adonis Creed vem prosperando tanto na carreira quanto na vida familiar. Quando um amigo de infância e ex-prodígio do boxe, Damian (Jonathan Majors), ressurge depois de cumprir uma longa sentença na prisão, ele está ansioso para provar que merece sua chance no ringue. Damian pede a ajuda de Creed para que ele o ajude a voltar para os campeonatos de luta. Apesar de tudo, dezoito anos na prisão mudam a pessoa e Damian não está nada satisfeito que Creed tomou seu lugar no ringue de boxe. Dois velhos amigos então vão lutar para enfrentar seus passados juntos e enfrentar o futuro que os aguarda. Para acertar as contas, Adonis deve colocar seu futuro em risco para lutar contra Damian - um lutador que não tem nada a perder.",
        lancamento: "02 de março de 2023",
        capa: "../img/filmes/creedIII.png",
        play: "../img/filmes/botaoPlay.png"
    },
    { 
        id: 10,
        nomeFilme: "Aquaman", 
        genero: "Ação", 
        duracao: "1h 57min",
        sinopse: "Em Aquaman, filho do humano Tom Curry (Temuera Morrison) com a atlante Atlanna (Nicole Kidman), Arthur Curry (Jason Momoa) cresce com a vivência de um humano e as capacidades metahumanas de um atlante. Quando seu irmão Orm (Patrick Wilson) deseja se tornar o Mestre dos Oceanos, subjugando os demais reinos aquáticos para que possa atacar a superfície, cabe a Arthur a tarefa de impedir a guerra iminente. Para tanto, ele recebe a ajuda de Mera (Amber Heard), princesa de um dos reinos, e o apoio de Vulko (Willem Dafoe), que o treinou secretamente desde a adolescência.",
        lancamento: "02 de março de 2018",
        capa: "../img/filmes/aquaman.png",
        play: "../img/filmes/botaoPlay.png"
    },
    { 
        id: 11,
        nomeFilme: "Carandiru", 
        genero: "brasileiro", 
        duracao: "1h 25min",
        sinopse: "Um médico (Luiz Carlos Vasconcelos) se oferece para realizar um trabalho de prevenção a AIDS no maior presídio da América Latina, o Carandiru. Lá ele convive com a realidade dos cárceres, que inclui violência, superlotação das celas e instalações precárias. Porém, apesar de todos os problemas, o médico logo percebe que os prisioneiros não são figuras demoníacas, existindo dentro da prisão solidariedade, organização e uma grande vontade de viver.",
        lancamento: "11 de abril de 2003",
        capa: "../img/filmes/carandiru.png",
        play: "../img/filmes/botaoPlay.png"
    },
    { 
        id: 12,
        nomeFilme: "Meu nome não é Johnny", 
        genero: "brasileiro", 
        duracao: "1h 25min",
        sinopse: "Um médico (Luiz Carlos Vasconcelos) se oferece para realizar um trabalho de prevenção a AIDS no maior presídio da América Latina, o Carandiru. Lá ele convive com a realidade dos cárceres, que inclui violência, superlotação das celas e instalações precárias. Porém, apesar de todos os problemas, o médico logo percebe que os prisioneiros não são figuras demoníacas, existindo dentro da prisão solidariedade, organização e uma grande vontade de viver.",
        lancamento: "11 de abril de 2003",
        capa: "../img/filmes/meuNomeNaoe.png",
        play: "../img/filmes/botaoPlay.png"
    },
    { 
        id: 13,
        nomeFilme: "Cidade de Deus", 
        genero: "brasileiro", 
        duracao: "1h 45min",
        sinopse: "Buscapé (Alexandre Rodrigues) é um jovem pobre, negro e muito sensível, que cresce em um universo de muita violência. Buscapé vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos da cidade. Amedrontado com a possibilidade de se tornar um bandido, Buscapé acaba sendo salvo de seu destino por causa de seu talento como fotógrafo, o qual permite que siga carreira na profissão. É através de seu olhar atrás da câmera que Buscapé analisa o dia-a-dia da favela onde vive, onde a violência aparenta ser infinita.",
        lancamento: "31 de agosto de 2002",
        capa: "../img/filmes/cidadeDeDeus.png",
        play: "../img/filmes/botaoPlay.png"
    },
    { 
        id: 14,
        nomeFilme: "Gonzaga - de pai para filhos", 
        genero: "brasileiro", 
        duracao: "2h 00min",
        sinopse: "Decidido a mudar seu destino, Gonzaga sai de casa jovem e segue para cidade grande em busca de novos horizontes e para apagar uma tristeza amorosa. Lá, ele conhece uma bela mulher, Odaléia (Nanda Costa), por quem se encanta. Após o nascimento do filho e complicações de saúde da esposa, ele decide voltar para a estrada para garantir os estudos e um futuro melhor para o herdeiro. Para isso, deixa o pequeno aos cuidados de amigos no Rio de Janeiro e sai pelo Brasil afora. Só não imaginava que essa distância entre eles faria crescer uma complicada relação, potencializada pelas personalidades fortes de ambos. Baseada em conversas realizadas entre pai e filho, essa é a história do cantor e sanfoneiro Luiz Gonzaga, também conhecido como O Rei do Baião ou Gonzagão, e de seu filho, popularmente chamado de Gonzaguinha.",
        lancamento: "26 de outubro de 2012",
        capa: "../img/filmes/gonzaga.png",
        play: "../img/filmes/botaoPlay.png"
    },

    { 
        id: 15,
        nomeFilme: "As crônicas de Narnia", 
        genero: "Kids", 
        duracao: "2h 20min",
        sinopse: "Lúcia (Georgie Henley), Susana (Anna Popplewell), Edmundo (Skandar Keynes) e Pedro (William Moseley) são quatro irmãos que vivem na Inglaterra, em plena 2ª Guerra Mundial. Eles vivem na propriedade rural de um professor misterioso, onde costumam brincar de esconde-esconde. Em uma de suas brincadeiras eles descobrem um guarda-roupa mágico, que leva quem o atravessa ao mundo mágico de Nárnia. Este novo mundo é habitado por seres estranhos, como centauros e gigantes, que já foi pacífico mas hoje vive sob a maldição da Feiticeira Branca, Jadis (Tilda Swinton), que fez com que o local sempre estivesse em um pesado inverno. Sob a orientação do leão Aslam, que governa Nárnia, as crianças decidem ajudar na luta para libertar este mundo do domínio de Jadis.",
        lancamento: "09 de dezembro de 2005",
        capa: "../img/filmes/narnia.png",
        play: "../img/filmes/botaoPlay.png"
    },

    { 
        id: 16,
        nomeFilme: "A fantástica fábrica de chocolate", 
        genero: "Kids", 
        duracao: "1h 55min",
        sinopse: "Willy Wonka (Johnny Depp) é o excêntrico dono da maior fábrica de doces do planeta, que decide realizar um concurso mundial para escolher um herdeiro para seu império. Cinco crianças de sorte, entre elas Charlie Bucket (Freddie Highmore), encontram um convite dourado em barras de chocolate Wonka e com isso ganham uma visita guiada pela lendária fábrica de chocolate, que não era visitada por ninguém há 15 anos. Encantado com as maravilhas da fábrica, Charlie fica cada vez mais fascinado com a visita.",
        lancamento: "22 de julho de 2005",
        capa: "../img/filmes/fabrica.png",
        play: "../img/filmes/botaoPlay.png"
    },

    { 
        id: 17,
        nomeFilme: "Toy Story 4", 
        genero: "Kids", 
        duracao: "1h 40min",
        sinopse: "Agora morando na casa da pequena Bonnie, Woody apresenta aos amigos o novo brinquedo construído por ela: Forky, baseado em um garfo de verdade. O novo posto de brinquedo não o agrada nem um pouco, o que faz com que Forky fuja de casa. Decidido a trazer de volta o atual brinquedo favorito de Bonnie, Woody parte em seu encalço e, no caminho, reencontra Bo Peep, que agora vive em um parque de diversões.",
        lancamento: "20 de junho de 2019",
        capa: "../img/filmes/toyStory4.png",
        play: "../img/filmes/botaoPlay.png"
    },
    { 
        id: 18,
        nomeFilme: "Megament", 
        genero: "Kids", 
        duracao: "1h 35min",
        sinopse: "Tudo o que vilão Megamente (Will Ferrell) mais queria era eliminar seu adversário Metro Man (Brad Pitt/Thiago Lacerda) e assim dominar a cidade de Metro City. Só que para isso era necessário um plano ainda mais diabólico do que todos já tentados anteriormente. Um dia, com a ajuda de Criado (David Cross) e após sequestrar a repórter Rosane Rocha (Tina Fey), o malvado consegue o inimaginável, para ele e para todos: dar um sumiço no herói. A única coisa que ele não contava era que sua vida se tornaria tão chata a ponto de ele inventar um herói para combater.",
        lancamento: "03 de dezembro de 2010",
        capa: "../img/filmes/megament.png",
        play: "../img/filmes/botaoPlay.png"
    }

]

    // Filtro filmes de ação Lucas:
        const filtroFilmesAcao = filmes.filter((filmes)=>{
            return filmes.genero === "Ação"
        })
        //console.log(filtroFilmesAcao)

    
    // Filtro filmes de brasileiros Lucas:
        const filtroFilmesBrasileiros = filmes.filter((filmes)=>{
            return filmes.genero === "brasileiro"
        })
        //console.log(filtroFilmesBrasileiros)


    // Filtro filmes de kids Lucas:
        const filtroFilmesKids = filmes.filter((filmes)=>{
            return filmes.genero === "Kids"
        })
        //console.log(filtroFilmesKids)


    // Filtro filmes de filmes em alta:
        const filtroFilmesEmALta = filmes.filter((filmes)=>{
            return filmes.nomeFilme === "Prometheus"||
                   filmes.nomeFilme === "Aquaman" || 
                   filmes.nomeFilme === "Creed III" ||
                   filmes.nomeFilme === "Carandiru" ||
                   filmes.nomeFilme === "Batman - O Cavaleiro Das Trevas"||
                   filmes.nomeFilme === "As crônicas de Narnia"

        })
        //console.log(filtroFilmesEmALta)    





        // Exibindo listagem de filmes em alta:
        for (let filme of filtroFilmesEmALta){
            let caixa = document.getElementById("filmesEmAlta")
            caixa.innerHTML += `
            <div class="filme">
                <img id="abrirModal"onClick = selectFilmesModal() src="${filme.capa}" alt="" class="poster" />
                <div class="nome_filme">${filme.nomeFilme}</div>
                <div class="info">
                  <span class="duracao">117 min</span>
                  <span class="ano">2015</span>
                </div>
                <div class="desc">
                  Jack is a young boy of 5 anos old who has lived all his life in one room. He believes everything within it are the only real things in the world. But what will happen when his Ma suddenly tells him that there are other things outside of Room?
                </div>
              </div>
                    `
        }

    // Exibindo listagem de filmes de ação:
    for (let filme of filtroFilmesAcao){
        let caixa = document.getElementById("filmeAcao")
        caixa.innerHTML += `
        <div class="filme">
            <img id="abrirModal"onClick = selectFilmesModal() src="${filme.capa}" alt="" class="poster" />
            <div class="nome_filme">${filme.nomeFilme}</div>
            <div class="info">
              <span class="duracao">117 min</span>
              <span class="ano">2015</span>
            </div>
            <div class="desc">
              Jack is a young boy of 5 anos old who has lived all his life in one room. He believes everything within it are the only real things in the world. But what will happen when his Ma suddenly tells him that there are other things outside of Room?
            </div>
          </div>
                 `
    }


    // Exibindo listagem de filmes brasileiros:
    for (let filme of filtroFilmesBrasileiros){
        let caixa = document.getElementById("filmesBrasileiros")
        caixa.innerHTML += `
        <div class="filme">
            <img src="${filme.capa}" alt="" class="poster" />
            <div class="nome_filme">${filme.nomeFilme}</div>
            <div class="info">
              <span class="duracao">117 min</span>
              <span class="ano">2015</span>
              
            </div>
            <img class="botaoPlay" src="${filme.play}">
            <div class="desc">
              Jack is a young boy of 5 anos old who has lived all his life in one room. He believes everything within it are the only real things in the world. But what will happen when his Ma suddenly tells him that there are other things outside of Room?
            </div>
          </div>
                `
   }


    // Exibindo listagem de filmes kids:
    for (let filme of filtroFilmesKids){
        let caixa = document.getElementById("filmesKids")
        caixa.innerHTML += `
        <div class="filme">
            <img src="${filme.capa}" alt="" class="poster" />
            <div class="nome_filme">${filme.nomeFilme}</div>
            <div class="info">
            <span class="duracao">117 min</span>
            <span class="ano">2015</span>
            </div>
            <div class="desc">
            Jack is a young boy of 5 anos old who has lived all his life in one room. He believes everything within it are the only real things in the world. But what will happen when his Ma suddenly tells him that there are other things outside of Room?
            </div>
        </div>
                 `
    }

   
    let player = document.getElementById("myVid"),
        play = document.getElementById("playFilme");
      
    play.addEventListener("click",function(){
        
        let caixa = document.getElementById("openVideo")
        caixa.innerHTML = `
            <video id="myVid" class="videoOpenedModal" fullscreen="true" controls="controls" autoplay="autoplay">
            <source src="./src/video/coder.mp4" type="video/mp4">
                Sorry, your browser does not support HTML5 video.
            </video>
            `        
    });



    //PLAY FILME DESTAQUE:
    document.getElementById('btnPlayFilmeDestaque1').onclick = function playFilmeDesque() {            
    let = play1 = document.getElementById("btnPlayFilmeDestaque1");
        play1.innerHTML = `
            <div class="playVideoDestaque1">
                <a href="#"><button id="fecharVideo">X</button></a>

                <video id="myVid1" class="videoOpenedModal1" fullscreen="true" controls="controls" autoplay="autoplay">
                <source src="./src/video/coder.mp4" type="video/mp4">
                Sorry, your browser does not support HTML5 video.
                </video>

            </div>
            `        
        }

        let video = document.querySelector("#myVid1")
        document.getElementById("fecharVideo").onclick = function(){
            console.log("CLICK OK")
            stopVideo()
        }


        

    // let procurarFilme = prompt("Digite aqui o filme que vc deseja procurar");
    // pesquisarFilme(procurarFilme);

    
    
    //Funcionalidades:
    function listaFavoritos(){

    }

    function retirarFilmeFavoritos(){

    }

    function pesquisarFilme(){
        let acharFilmes = filmes.find ((filme) => {
            return filme.nomeFilme === procurarFilme;
        })

        if(acharFilmes){
            alert(`Filme ${procurarFilme} encontrado`);
        } else {
            alert("Filme não encontrado");
        }
    }

    function sugestaoFilmes(){

    }
      

    // Listagem itens Array:
    // let lista = ['Item1', 'Item2', 'Item3', 'Item 4'];
    // document.getElementById('lista').innerHTML = 
    // lista.map(item=>`<p>${item}</p>`).join('')       
