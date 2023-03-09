//MODAL
const btn = document.querySelector("#abrirModal")
const modal = document.querySelector("dialog")
const fecharModal = document.querySelector("#fecharModal")

btn.onclick = function(){
    modal.showModal()
}


fecharModal.onclick = function() {
    modal.close()
}




