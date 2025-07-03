// Declare variable to store navbar element
const navElement = document.getElementById("navbar");
// detect scroll event on document
document.addEventListener("scroll", function() {
    // console.log(window.scrollY);
    if (window.scrollY > 70) {
    //    change navbar bg to gray
          navElement.style.backgroundColor = "#111827";
    } else {
        // change navbar bg to transparent
        navElement.style.backgroundColor = "transparent";
    }
});