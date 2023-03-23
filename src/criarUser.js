function createNewUser(){
    let nome_newUser = document.getElementById("nome_usuario").value;
    let email_newUser = document.getElementById("email_usuario").value;
    let username_newUser = document.getElementById("username_usuario").value
    let password_newUser = document.getElementById("password_newUser").value

    const usuarioCadastro = {
        nome_newUser,
        email_newUser, 
        username_newUser, 
        password_newUser
    }

    const string = JSON.stringify(usuarioCadastro)
    localStorage.setItem("usuario", string)

    console.log(string)

    window.location.href = './views/login.html'

}

