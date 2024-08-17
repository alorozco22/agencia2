document.addEventListener("scroll", function() {
    var header = document.getElementById("header");
    var currentSection = getCurrentSection();
    
    if (currentSection) {
        var sectionBgColor = window.getComputedStyle(currentSection).getPropertyValue("background-color");
        
        if (isDarkColor(sectionBgColor)) {
            header.style.backgroundColor = "#333"; // Change header background to dark gray
            header.style.color = "#fff"; // Change header text color to white
            header.classList.remove("white-bg");
            header.classList.add("dark-bg");
        } else {
            header.style.backgroundColor = "#f2f2f2"; // Change header background to light gray
            header.style.color = "#333"; // Change header text color to dark gray
            header.classList.remove("dark-bg");
            header.classList.add("white-bg");
        }
    }
});

function getCurrentSection() {
    var sections = document.querySelectorAll("section");
    var headerHeight = document.getElementById("header").offsetHeight;
    
    for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        var rect = section.getBoundingClientRect();
        
        if (rect.top <= headerHeight && rect.bottom >= headerHeight) {
            return section;
        }
    }
    
    return null;
}

function isDarkColor(color) {
    // Calculate the luminance of the color
    var rgb = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    var brightness = (0.2126 * rgb[1]) + (0.7152 * rgb[2]) + (0.0722 * rgb[3]);
    
    return brightness < 128;
}

/* Desabilito mientras desarrollo */

window.addEventListener('load', function() {
    setTimeout(function() {
                window.location.href = "#about";
            }, 8000);
});

