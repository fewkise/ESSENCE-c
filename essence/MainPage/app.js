let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const updateSliderPosition = () => {
    const slideWidth = document.querySelector('.sliderContainer').clientWidth;
    document.querySelector('.slider').style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

document.querySelector('.nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSliderPosition();
});

document.querySelector('.prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSliderPosition();
});