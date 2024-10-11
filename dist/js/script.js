document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;
    const visibleCardsCount = 3;
    let currentIndex = 0;
    let slideInterval;

    function updateVisibleCards() {
        for (let i = 0; i < visibleCardsCount; i++) {
            const index = (currentIndex + i) % totalCards;
            cards[index].style.order = i + 1;
        }
    }

    function showNextCard() {
        currentIndex = (currentIndex + 1) % totalCards;
        updateVisibleCards();
    }

    function startSlider() {
        slideInterval = setInterval(showNextCard, 2500);
    }

    function pauseSlider() {
        clearInterval(slideInterval);
    }

    const sliderContainer = document.querySelector('.cards');

    sliderContainer.addEventListener('mouseenter', pauseSlider);
    sliderContainer.addEventListener('mouseleave', startSlider);

    updateVisibleCards();
    startSlider();



    const singleCardSlider = document.querySelectorAll('.feedback__item');
    const totalSingleSlides = singleCardSlider.length;
    let singleCurrentIndex = 0;
    let singleSlideInterval;

    function updateSingleVisibleCard() {

        for (let i = 0; i < totalSingleSlides; i++) {
            if (i === singleCurrentIndex) {
                singleCardSlider[i].style.display = 'flex';
            } else {
                singleCardSlider[i].style.display = 'none';
            }
        }
    }

    function showNextSingleCard() {
        singleCurrentIndex = (singleCurrentIndex + 1) % totalSingleSlides;
        updateSingleVisibleCard();
    }

    function startSingleSlider() {
        singleSlideInterval = setInterval(showNextSingleCard, 1500);
    }

    function pauseSingleSlider() {
        clearInterval(singleSlideInterval);
    }

    const singleSliderContainer = document.querySelector('.feedback__wrapper');

    singleSliderContainer.addEventListener('mouseenter', pauseSingleSlider);
    singleSliderContainer.addEventListener('mouseleave', startSingleSlider);

    updateSingleVisibleCard();
    startSingleSlider();
});

