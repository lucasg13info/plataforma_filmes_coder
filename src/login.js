function logar(){
    let nome = document.getElementById("username");
    let password = document.getElementById("password");
     
    let texto = nome.value + password.value; // como quiser formatar
    console.log(texto)
     
    if(nome.value == 'lucas' && password.value == '123'){
        localStorage.setItem("", true)
        window.location.href = '../views/pagInicial.html'

        alert("Login realizado com sucesso, " + "Bem vindo" + nome.value+"!")
    }else{
        alert("Usuário não existe!")
        location.reload();
    }
     
}



// const string = JSON.stringify(usuarioCadastrado);
// localStorage.setItem("usuario", string);
