export const initNavModal = () => {
    
    const btns = document.querySelectorAll('.header-wrapper');
    
    btns.forEach((btn) => {
        
        const modal = btn.nextElementSibling;
        
        btn.addEventListener('click', function() {
            modal.classList.toggle('hidden');
            modal.classList.toggle('opacity');
        });
    });
}
