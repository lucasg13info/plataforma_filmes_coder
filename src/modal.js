//MODAL 1
const btn = document.querySelector("#abrirModal")
const modal = document.querySelector("dialog")
const fecharModal = document.querySelector("#fecharModal")

btn.onclick = function(e){
    console.log(e)
    modal.showModal()
}


fecharModal.onclick = function() {
    modal.close()
    location.reload();
}







