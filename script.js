document.addEventListener('DOMContentLoaded', function() {
    const akunItems = document.querySelectorAll('.akun-item');

    akunItems.forEach(item => {
        const slider = item.querySelector('.slider');
        const prevButton = item.querySelector('.slider-button.prev');
        const nextButton = item.querySelector('.slider-button.next');
        let currentIndex = 0;

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : slider.children.length - 1;
            updateSlider();
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex < slider.children.length - 1) ? currentIndex + 1 : 0;
            updateSlider();
        });

        function updateSlider() {
            const translateX = -currentIndex * 100 + '%';
            slider.style.transform = 'translateX(' + translateX + ')';
        }
    });
});