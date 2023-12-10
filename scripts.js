/*Glenn Ford*/
document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0; // Start from the first slide (index 0)
    const slides = document.getElementsByClassName("slide");

    // Initial setup
    showSlide(currentSlide);

    // Function to show a specific slide
    function showSlide(slideIndex) {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex].style.display = "block";
    }

    // Function to navigate to the previous slide
    window.prevSlide = function () {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1; // Wrap to the last slide
        }
        showSlide(currentSlide);
    };

    // Function to navigate to the next slide
    window.nextSlide = function () {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0; // Wrap to the first slide
        }
        showSlide(currentSlide);
    };
});
