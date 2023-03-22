function createNewUser(){
    let nome_newUser = document.getElementById("nome_usuario");
    let email_newUser = document.getElementById("email_usuario");
    let username_newUser = document.getElementById("username_usuario")
    let password_newUser = document.getElementById("password_newUser")


    console.log(nome_newUser.value + email_newUser.value+ username_newUser.value + password_newUser.value)
    localStorage.setItem("Usuario", nome_newUser.value)
    localStorage.setItem("E-mail", email_newUser.value)
    localStorage.setItem("Username", username_newUser.value)
    localStorage.setItem("Password", password_newUser.value)

    window.location.href = './views/login.html'

}
