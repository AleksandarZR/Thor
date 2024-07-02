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