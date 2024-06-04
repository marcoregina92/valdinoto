document.addEventListener('DOMContentLoaded', () => {
    const images = [
        "img/chiesa-di-montevergine-76823_1280.jpg",
        "img/cattedrale.jpg",
        "img/viaNicolaci.jpg"
    ];

    let currentIndex = 0;
    const background = document.querySelector('.background-image');
    const hiddenImg = new Image();
    let timer;

    function preloadNextImage() {
        const nextIndex = (currentIndex + 1) % images.length;
        hiddenImg.src = images[nextIndex];
    }

    function updateBackgroundImage() {
        background.style.backgroundImage = `url('${images[currentIndex]}')`;
    }

    function changeBackgroundImage(nextIndex) {
        currentIndex = nextIndex;
        updateBackgroundImage();
        preloadNextImage();
    }

    function startCarousel() {
        timer = setInterval(() => {
            const nextIndex = (currentIndex + 1) % images.length;
            changeBackgroundImage(nextIndex);
        }, 5000);
    }

    function resetTimer() {
        clearInterval(timer);
        startCarousel();
    }

    function handlePrevButtonClick() {
        const prevIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        changeBackgroundImage(prevIndex);
        resetTimer();
    }

    function handleNextButtonClick() {
        const nextIndex = (currentIndex + 1) % images.length;
        changeBackgroundImage(nextIndex);
        resetTimer();
    }

    document.getElementById('prev').addEventListener('click', handlePrevButtonClick);
    document.getElementById('next').addEventListener('click', handleNextButtonClick);

    startCarousel();
    preloadNextImage();
    updateBackgroundImage();
});
