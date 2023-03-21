function openModal22(mn){
    let modal = document.getElementById(mn);

    if(typeof modal === 'undefined' || modal === null)
        return

        modal.style.display = 'Block';
}

function closeModal2(mn){
    let modal = document.getElementById(mn);

    if(typeof modal === 'undefined' || modal === null)
        return

        modal.style.display = 'none';
        location.reload();
}