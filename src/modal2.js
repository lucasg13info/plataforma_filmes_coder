function openModal22(mn){
    let modal = document.getElementById(mn);

    if(typeof modal === 'undefined' || modal === null)
        return

        modal.style.display = 'Block';
        document.body.style.overflow = 'hidden'
}

function closeModal2(mn){
    let modal = document.getElementById(mn);

    if(typeof modal === 'undefined' || modal === null)
        return

        modal.style.display = 'none';
        location.reload();
}