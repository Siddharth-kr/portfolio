function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("TXpngKCRloCxUpE3v");

    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = {
            name: document.querySelector("input[name='name']").value,
            email: document.querySelector("input[name='email']").value,
            message: document.querySelector("textarea[name='message']").value,
        };

        emailjs.send("service_63b1z3s", "template_w4ymw5u", formData)
            .then(response => {
                alert("Email sent successfully!");
                document.querySelector("form").reset(); // Clear form
            })
            .catch(error => {
                alert("Failed to send email. Please try again.");
                console.error("Error:", error);
            });
    });
});
