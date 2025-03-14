// script.js

// Function to handle form submission
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    var name = document.querySelector('input[placeholder="Name"]').value;
    var email = document.querySelector('input[placeholder="Email"]').value;
    var mobile = document.querySelector('input[placeholder="Mobile"]').value;

    // Basic validation
    if (name === '' || email === '' || mobile === '') {
        alert('Please fill in all fields.');
        return;
    }

    console.log('Form submitted:', { name: name, email: email, mobile: mobile });

    alert('Thank you for your submission!');
    document.querySelector('form').reset(); // Reset the form
});

// Function to handle "Request Call Back" button click
document.querySelector('.request-call').addEventListener('click', function () {
    alert('Request call back functionality will be implemented soon!');
});

// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
}

// Popup functionality
document.addEventListener("DOMContentLoaded", function () {
    let popup = document.getElementById("promoPopup");
    let closeBtn = document.getElementById("closePopup");
    let formSubmitted = false; // Flag to track form submission

    function showPopup() {
        if (!formSubmitted && popup.style.display !== "block") {
            popup.style.display = "block";
        }
    }

    function closePopup() {
        popup.style.display = "none";
    }

    function submitPopupForm() {
        var fullName = document.getElementById("popupFullName").value.trim();
        var phoneNumber = document.getElementById("popupPhoneNumber").value.trim();
        var emailAddress = document.getElementById("popupEmailAddress").value.trim();

        if (fullName === "" || phoneNumber === "" || emailAddress === "") {
            alert("Please fill in all the fields before submitting.");
            return;
        }

        console.log("Popup form submitted:", {
            fullName: fullName,
            phoneNumber: phoneNumber,
            emailAddress: emailAddress,
        });

        alert("Thank you for your submission!");
        formSubmitted = true; // Stop showing the popup after submission
        closePopup();
    }

    // Show popup when the page loads
    showPopup();

    // Close popup when clicking the close button
    closeBtn.addEventListener("click", closePopup);

    // Reopen the popup every 5 seconds ONLY IF it was closed and form is NOT submitted
    setInterval(() => {
        if (!formSubmitted && popup.style.display === "none") {
            showPopup();
        }
    }, 5000);

    // Attach the form submission function to the submit button
    document.getElementById("popupSubmit").addEventListener("click", submitPopupForm);
});


// Location Advantages animation
window.addEventListener('load', () => {
    const icons = document.querySelectorAll('.icon');
    icons.forEach((icon, index) => {
        setTimeout(() => {
            icon.classList.add('loaded');
        }, 300 * index);
    });

    const listItems = document.querySelectorAll('li');
    listItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('loaded');
        }, 200 * index);
    });
});

// Function to display an image
function displayImage(imageSrc) {
    document.getElementById('displayed-image').src = imageSrc;
    document.getElementById('image-display').style.display = 'block';
}

// Event listener for Amenities link
document.getElementById('amenities-link').addEventListener('click', function (event) {
    event.preventDefault();
    displayImage('img5.png');
});

// Event listener for Site & Floor Plan link
document.getElementById('site-floor-plan-link').addEventListener('click', function (event) {
    event.preventDefault();
    displayImage('img4.png');
});
