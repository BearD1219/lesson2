window.addEventListener('DOMContentLoaded', () => {
    new WOW().init();
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', (event) => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
        document.body.classList.toggle('block');
    });
    
    menuItem.forEach(item => {
        item.addEventListener('click', (event) => {
            if (hamburger.classList.contains('active')) {
                hamburger.classList.toggle('active');
                menu.classList.toggle('active');
                document.body.classList.toggle('block');
            }
        });
    });

    //SCROLL TO

    let links = document.querySelectorAll('[data-link]');
    links.forEach(link => {
        let linkId = link.getAttribute('data-link');
        link.addEventListener('click', event => {
            event.preventDefault();
            if (linkId == 'start') {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                })
            }
            else if (linkId == 'end') {
                window.scrollTo({
                    top: document.documentElement.offsetHeight,
                    behavior: "smooth",
                })
            }
            else {
                window.scrollTo({
                    top: document.getElementById(linkId).offsetTop,
                    behavior: "smooth",
                })
            }
        });
    });

    if (window.getComputedStyle(hamburger).display == 'block') {
        document.querySelectorAll('.wow').forEach(item => {
            item.classList.remove('wow', 'animate__animated');
        });
    }

    // MODAL
    
    const modal = document.querySelector('.modals'),
        modalButtons = document.querySelectorAll('[data-modal]'),
        modalsForm = document.querySelector('.modals__form');
        thanksModal = document.querySelector('.thanks');

    modalButtons.forEach(modalBtn => {
        modalBtn.addEventListener('click', event => {
            event.preventDefault();
            toggleModal();
        });
    });

    modal.addEventListener('click', event => {
        if (event.target.classList.contains('modals_active') || event.target.classList.contains('modals__close')) {
            toggleModal();
        }
    });

    function toggleModal() {
        modal.classList.toggle('modals_active');
        document.body.classList.toggle('block');
        modalsForm.reset();
    }

    modal.addEventListener('submit', event => {
        event.preventDefault();
        toggleModal();
        thanksModal.classList.add('thanks_active');
        setTimeout(() => thanksModal.classList.remove('thanks_active'), 2000);
    });

});