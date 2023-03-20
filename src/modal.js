//MODAL 1
const btn = document.querySelector("#abrirModal")
const modal = document.querySelector("dialog")
const fecharModal = document.querySelector("#fecharModal")

btn.onclick = function(){
    modal.showModal()
}


fecharModal.onclick = function() {
    modal.close()
    location.reload();
}



// //MODAL 2
// const btn1 = document.querySelector("#btnPlayFilmeDestaque1")
// const modal1 = document.querySelector(".containerModal")
// const fecharModal = document.querySelector("#fecharModal")

// btn1.onclick = function(){
//     modal1.showModal()
// }


// fecharModal.onclick = function() {
//     modal.close()
//     location.reload();
// }




