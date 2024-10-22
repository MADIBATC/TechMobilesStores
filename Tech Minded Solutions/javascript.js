document.addEventListener('DOMContentLoaded', function() {
    const categories = document.querySelectorAll('.category');
    const phoneLists = document.querySelectorAll('.phone-list');

    categories.forEach(category => {
        category.addEventListener('click', function() {
            const categoryName = this.getAttribute('data-category');
            phoneLists.forEach(list => {
                if (list.id === categoryName) {
                    list.style.display = 'flex';
                } else {
                    list.style.display = 'none';
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Auto-scroll every 3 seconds
    setInterval(nextSlide, 3000);
});