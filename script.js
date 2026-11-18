
// Display the current year in the footer
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Highlight the active navigation link
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {

        navLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});

// Welcome message
console.log("Welcome to Franco Alejandro A. Baleva's Portfolio!");
