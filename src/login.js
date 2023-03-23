function logar(){
    //Pegando os dados digitados pelo usuário:
    let nome = document.getElementById("username").value;
    let password = document.getElementById("password").value;
     
    //Consultando o que está dentro do local storage com nome "usuario":
    const string = localStorage.getItem("usuario")
    const usuarioCadastrado = JSON.parse(string)

    //Mostrando no terminal o que está cadastrado no localStorage:
    console.log(usuarioCadastrado)

    //Pegando os dados do local storage para comparar:
    const {username_newUser, password_newUser} = usuarioCadastrado;

    //Comparando os dados digitados pelo usuário e o que está no local Storage:
    const dadosCorretos = username_newUser  === nome && password_newUser === password

    console.log(dadosCorretos)

    //Se dados digitados não forem iguais ao que está no local storage aparece a mensagem de dados incorretos: senão realiza o redirecionamento para a página correta.
    if(!dadosCorretos){
        alert("Dados de login incorretos")
        return
    }else{
        window.location.href = '../views/pagInicial.html'

        
    }
    

   



                //  document.getElementById('userLogado').innerHTML = 
                // `<p>${nome}</p>`.join('')   
    
     
}





// const string = JSON.stringify(usuarioCadastrado);
// localStorage.setItem("usuario", string);


    // if(nome == 'lucas' && password == '123'){
    //     localStorage.setItem("", true)
    //     window.location.href = '../views/pagInicial.html'

    //     alert("Login realizado com sucesso, " + "Bem vindo" + nome.value+"!")
    // }else{
    //     alert("Usuário não existe!")
    //     location.reload();
    // }