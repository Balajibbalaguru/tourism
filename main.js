const carouselImages = document.querySelectorAll('.carousel-image');
let currentIndex = 1;

function showNextImage() {
    carouselImages[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % carouselImages.length;
    carouselImages[currentIndex].classList.add('active');
}

setInterval(showNextImage, 5000); // Change image every 5 seconds

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });