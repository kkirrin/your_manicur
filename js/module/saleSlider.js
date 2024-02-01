export const initSaleSlider = () => {
    const generalSlider = document.querySelector('.new-items-1');

    if (generalSlider) {

        const swiper = new Swiper(generalSlider, {
            slidesPerView: 2,
            spaceBetween: 15,
            speed: 1200,
            grid: {
                rows: 2,
            },
            navigation: {
                nextEl: '.next-new--item-1',
                prevEl: '.prev-new--item-1',
            },

            breakpoints: {
                320: {
                    grid: {
                        rows: 2,
                    },
                },
                460: {
                    grid: {
                        rows: 1,
                    },
                    slidesPerView: 1.5,
                    spaceBetween: 15
                },
                767: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                    grid: {
                        rows: 1,
                    },
                }
            }
        });
    }
}