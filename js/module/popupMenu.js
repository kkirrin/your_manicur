export const initPopupMenu = () => {
    const links = document.querySelectorAll('.menu-slide') 
    links.forEach(link => {
        link.addEventListener('mouseenter', function() { 
            const popup = link.querySelector('ul'); 
            if (popup) {
                popup.classList.toggle('opacity-0');
                popup.classList.toggle('hidden');
            }
        });
        link.addEventListener('mouseleave', function() { 
            const popup = link.querySelector('ul');
            if (popup) {
                popup.classList.add('opacity-0');
                popup.classList.add('hidden');
            }
        });
    });
}