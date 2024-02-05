import { initNav } from "./module/nav.js";
import { initScrollToTop } from "./module/scroll-to-top.js";
import { initScroll } from "./module/scroll.js";
import { initObserver } from "./module/observer.js";
import { initPopup } from "./module/popup.js";
import { initMenuSLider } from "./module/menuSlider.js";
import { initDropList } from "./module/dropList.js";
import { initSaleSlider } from "./module/saleSlider.js";
import { initDistance } from "./module/distance.js";
import { initNavModal } from "./module/modal.js";


window.addEventListener('DOMContentLoaded', () => {
    console.log('подключен скрипт main.js');

    initNav();
    initScrollToTop();
    initScroll();
    baguetteBox.run('.gallery-wrapper');
    initObserver();
    initPopup();
    initMenuSLider();
    initDropList();
    initSaleSlider();
    initDistance();
    initNavModal();

});
