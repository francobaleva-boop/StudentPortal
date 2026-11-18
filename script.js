// Welcome message
console.log("Welcome to Franco's Student Portfolio!");

// Highlight navigation link when clicked
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});

// Update footer year automatically
const footer = document.querySelector("footer");

footer.innerHTML = `
    <p>© ${new Date().getFullYear()} Franco Alejandro A. Baleva | Student Portfolio</p>
`;

// Show a message when the email link is clicked
const emailLink = document.querySelector(".contact-card a");

emailLink.addEventListener("click", function () {
    console.log("Opening email application...");
});