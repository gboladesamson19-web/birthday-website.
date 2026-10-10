// ==========================================
// BIRTHDAY WEBSITE JAVASCRIPT
// ==========================================


// ==========================================
// BIRTHDAY WISHES
// ==========================================

const wishForm = document.getElementById("wishForm");
const wishList = document.getElementById("wishList");

if (wishForm && wishList) {

    wishForm.addEventListener("submit", function (event) {

        // Stop the page from refreshing
        event.preventDefault();

        // Get the person's name
        const nameInput = document.getElementById("wishName");

        // Get their birthday message
        const messageInput = document.getElementById("wishMessage");

        const name = nameInput.value.trim();
        const message = messageInput.value.trim();

        // Make sure both fields contain something
        if (name === "" || message === "") {
            return;
        }

        // Create a new wish card
        const wishCard = document.createElement("div");

        wishCard.classList.add("wish-card");

        // Put the person's name and message inside the card
        const wishTitle = document.createElement("h3");
        wishTitle.textContent = name;

        const wishText = document.createElement("p");
        wishText.textContent = message;

        wishCard.appendChild(wishTitle);
        wishCard.appendChild(wishText);

        // Put the newest wish at the top
        wishList.prepend(wishCard);

        // Clear the form after submitting
        wishForm.reset();
    });
}


// ==========================================
// SMOOTH NAVIGATION
// ==========================================

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetID = link.getAttribute("href");

        // Only work with links that point to sections
        if (targetID && targetID.startsWith("#")) {

            const targetSection = document.querySelector(targetID);

            if (targetSection) {

                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});


// ==========================================
// HERO BUTTON
// ==========================================

const heroButton = document.querySelector(".hero-button");

if (heroButton) {

    heroButton.addEventListener("click", function (event) {

        const storySection = document.getElementById("story");

        if (storySection) {

            event.preventDefault();

            storySection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
}