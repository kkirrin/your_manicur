export const initDropList = () => {
    const dropdownToggles = document.querySelectorAll('.dropList');
    // Для фильтров
    const dropdownFilter = document.querySelectorAll('.dropListFilter')
    const buttonShowMenu = document.querySelector('.btn_menu_filter')
    const sidebar = document.querySelector('.sidebar_menu')
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(event) {
            const ul = toggle.querySelector('ul');
            ul.classList.toggle('hidden');
        });
    });
    dropdownFilter.forEach(toggle => {
        toggle.addEventListener('click', function(event) {
            const ul = toggle.querySelector('ul');
            ul.classList.toggle('hidden');
        });
    });

    if(buttonShowMenu) {
        buttonShowMenu.addEventListener('click', function(event) {
            const sidebar = document.querySelector('.sidebar_menu')
            sidebar.classList.toggle('hidden')
        })
    }

    
}