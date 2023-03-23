function openModal22(mn, e){
    let modal = document.getElementById(mn);
    console.log(e)

    if(typeof modal === 'undefined' || modal === null)
        return

        modal.style.display = 'Block';
        document.body.style.overflow = 'hidden'
}

function closeModal2(mn){
    console.log(mn)
    let modal = document.getElementById(mn);

    if(typeof modal === 'undefined' || modal === null)
        return

        modal.style.display = 'none';
        location.reload();
}