let numButtonClicks = 0;
function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent =
        "Button Clicked times: " + numButtonClicks;
}

let currentRotation = 0;
const container = document.querySelector('.carousel-container');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

nextBtn.addEventListener('click', () => {
    currentRotation -= 90;
    container.style.transform = `rotateY(${currentRotation}deg)`;
});

prevBtn.addEventListener('click', () => {
    currentRotation += 90;
    container.style.transform = `rotateY(${currentRotation}deg)`;
});