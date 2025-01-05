document.addEventListener("DOMContentLoaded",() => {


    const modalBtn = document.getElementById('modalBtn');
    const modal = document.getElementById('simpleModal');
    const closeBtn = document.getElementById('close-button');

    //opening the modal
    modalBtn.addEventListener('click',openModal);
    function openModal(e){
        e.stopPropagation(); // Prevents the click event from propagating to the window
        modal.classList.remove('hidden');
    }

    //closing the modal using the x button
    closeBtn.addEventListener('click',modalClose);
    function modalClose(){
        modal.classList.add('hidden');
    }

    //closing the modal when you click inside the container containing the modal
    window.addEventListener('click',outsideClick);
    function outsideClick(e){
        if (e.target === modal) { //here modal references to the element obtained when you get the element by id
            //modal.classList.add('hidden');
            closeBtn.click(); //same as modal.classList.add('hidden');
        }
    }

    //closing the modal if you click outside the container containing the modal
    //To use this make the container containing the modal smaller i.e not to cover the entire screen in css
    window.addEventListener('click',clickOutside);
    function clickOutside(e) {
        if (!modal.contains(e.target) && e.target !== modalBtn){
            modal.classList.add('hidden');
        }
    }

})