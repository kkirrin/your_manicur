export const initDropList = () => {
    const dropdownToggles = document.querySelectorAll('.dropList');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(event) {
            const ul = toggle.querySelector('ul');
            ul.classList.toggle('hidden');
        });
    });
}