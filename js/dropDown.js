const dropdownsMenus = document.querySelectorAll('[data-dropDown]');

function iniciarDropDown() {

    dropdownsMenus.forEach((menu) => {
        ['touchstart', 'click'].forEach((userEvent) => {
            menu.addEventListener(userEvent, handleClick);
        });
        menu.addEventListener('touchstart', handleClick);
    });

    function handleClick(event) {
        event.preventDefault();
        this.classList.toggle('ativo');
    }
}