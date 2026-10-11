// ==========================================
// BIRTHDAY WEBSITE JAVASCRIPT
// ==========================================
// ==========================================
// BIRTHDAY WISHES
// ==========================================

const FORM_SUBMIT_EMAIL = "5b75521ebfc37ff42e898da49ad483bf";

const wishForm = document.getElementById("wishForm");
const wishList = document.getElementById("wishList");

if (wishForm && wishList) {
    wishForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const name = document.getElementById("wishName").value.trim();
        const message = document.getElementById("wishMessage").value.trim();

        if (name === "" || message === "") {
            return;
        }

        const submitButton = wishForm.querySelector('button[type="submit"]');
        submitButton.disabled = true;

        try {
            const response = await fetch(
                `https://formsubmit.co/ajax/${FORM_SUBMIT_EMAIL}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({
                        name: name,
                        message: message,
                        _subject: "New birthday wish for Jayden"
                    })
                }
            );

            const result = await response.json();

            if (
                !response.ok ||
                result.success === false ||
                result.success === "false"
            ) {
                throw new Error("The wish could not be sent.");
            }

            wishForm.reset();
            wishList.replaceChildren();

            const thankYouCard = document.createElement("div");
            thankYouCard.classList.add("wish-card");
            thankYouCard.textContent = "Thank you! Your wish was sent.";
            wishList.appendChild(thankYouCard);
        } catch (error) {
            console.error(error);
            alert(error.message);
        } finally {
            submitButton.disabled = false;
        }
    });
}
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
