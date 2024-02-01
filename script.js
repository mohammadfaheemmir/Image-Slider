let currentSlide = 0;

function showSlide(index) {
    const slider = document.getElementById('slider');
    const slides = document.querySelectorAll('.slide');

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slider.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Automatic slide change every 3 seconds
setInterval(nextSlide, 5000);
