// Example of JavaScript for any interactivity you want to add
// For now, this can be used to add smooth scrolling on anchor links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// تفعيل التأثيرات عند التمرير
document.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.about-content .info h2, .contact h2');
    elements.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
});
