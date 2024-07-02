/**
 * Prisluskuje dogadjaj "scroll" i dodeljuje vrednost globalnoj varijabli "--scroll"
 * 
 * The pageYOffset property returns the pixels a document has scrolled from the upper left corner of the window.
 * The pageYOffset property is equal to the scrollY property.
 * 
 * The HTMLElement.offsetHeight read-only property returns the height of an element, including vertical padding and borders, as an integer.
 * 
 * The innerHeight property returns the height of a window's content area.
 */

window.addEventListener(
    "scroll",
    () => {
        document.body.style.setProperty(
            "--scroll",
            window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        );
    },
    false
);





/*
 * Nadgleda sakrivene elemente, dodaje im klasu show kada se nadju na aktuelnom delu prozora, a hidden kada se odskrola dalje od njih
 */

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
