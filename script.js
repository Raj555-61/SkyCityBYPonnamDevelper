document.addEventListener("DOMContentLoaded", function () {
    let popup = document.getElementById("promoPopup");
    let closeBtn = document.getElementById("closePopup");
    let formSubmitted = false; // Track form submission
    let popupClosedManually = false; // Track manual close

    // Show popup when the page loads
    function showPopup() {
        if (!formSubmitted) {
            popup.style.display = "block";
        }
    }

    // Close popup and allow it to reappear later
    function closePopup() {
        popup.style.display = "none";
        popupClosedManually = true;

        // Allow reappearing only if form is NOT submitted
        if (!formSubmitted) {
            document.addEventListener("scroll", triggerPopup);
            document.addEventListener("mousemove", triggerPopup);
        }
    }

    // Function to trigger popup again on scroll or hover
    function triggerPopup() {
        if (popupClosedManually && !formSubmitted) {
            popupClosedManually = false; // Reset flag
            showPopup();

            // Remove event listeners to prevent infinite popups
            document.removeEventListener("scroll", triggerPopup);
            document.removeEventListener("mousemove", triggerPopup);
        }
    }

    // Submit popup form and prevent further popups
    function submitPopupForm() {
        let fullName = document.getElementById("popupFullName").value;
        let phoneNumber = document.getElementById("popupPhoneNumber").value;
        let emailAddress = document.getElementById("popupEmailAddress").value;

        if (fullName === "" || phoneNumber === "" || emailAddress === "") {
            alert("Please fill in all fields.");
            return;
        }

        console.log("Popup form submitted:", { fullName, phoneNumber, emailAddress });
        alert("Thank you for your submission!");

        formSubmitted = true;
        popup.style.display = "none";

        // Remove event listeners to fully stop popup
        document.removeEventListener("scroll", triggerPopup);
        document.removeEventListener("mousemove", triggerPopup);
    }

    // Attach functions to buttons
    closeBtn.addEventListener("click", closePopup);
    document.querySelector("button").addEventListener("click", submitPopupForm);

    // Show popup when the page loads
    showPopup();
});
