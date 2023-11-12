document.addEventListener("DOMContentLoaded", function() {
    const fadeListItems = document.querySelectorAll(".fade-in-list li");

    window.addEventListener("scroll", function() {
        fadeListItems.forEach((item, index) => {
            const itemPosition = item.offsetTop;
            const scrollPosition = window.scrollY;

            if (scrollPosition > itemPosition - window.innerHeight / 1.2) {
                item.style.opacity = "1";
            }
        });
    });
});