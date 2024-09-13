// Assuming you have a script tag in your HTML file
// Assuming you have a script tag in your HTML file

function animateHeroImage() {
    const heroImage = document.querySelector('.hero img');
    heroImage.classList.add('animate');
}

window.addEventListener('load', animateHeroImage);

// CSS animation class
.animate {
    animation: slideIn 1s ease-in-out forwards;
}

@keyframes slideIn {
    0% {
        transform: translateY(-100%);
    }
    100% {
        transform: translateY(0);
    }
}
