// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Navbar shadow when scrolling
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
    } else {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
    }
});


// Button interaction
document.querySelectorAll('.primary-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert("Thank you for your interest! We will contact you soon.");
    });
});
