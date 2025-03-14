// script.js

// Function to handle form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    var name = document.querySelector('input[placeholder="Name"]').value;
    var email = document.querySelector('input[placeholder="Email"]').value;
    var mobile = document.querySelector('input[placeholder="Mobile"]').value;

    // Basic validation (you can add more robust validation)
    if (name === '' || email === '' || mobile === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Here you would typically send the form data to your server using AJAX or Fetch API
    // For this example, we'll just log the data to the console
    console.log('Form submitted:', { name: name, email: email, mobile: mobile });

    // Optionally, you can display a success message to the user
    alert('Thank you for your submission!');
    document.querySelector('form').reset(); // Reset the form
});

// Function to handle "Request Call Back" button click
document.querySelector('.request-call').addEventListener('click', function() {
    // You can implement your call back logic here
    // For example, you could open a modal with a phone number or initiate a call
    alert('Request call back functionality will be implemented soon!');
});

// (Optional) Function to handle QR code scanning
// You'll need a QR code scanning library for this
// Example using a hypothetical library:
// qrcodeScanner.scan(function(result) {
//     // Handle the scanned data (e.g., open a URL, display information)
//     console.log('QR code scanned:', result);
// });

// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Popup functionality
function showPopup() {
    document.getElementById('promoPopup').style.display = 'block';
}

function closePopup() {
    document.getElementById('promoPopup').style.display = 'none';
}

function submitPopupForm() {
    var fullName = document.getElementById('popupFullName').value;
    var phoneNumber = document.getElementById('popupPhoneNumber').value;
    var emailAddress = document.getElementById('popupEmailAddress').value;

    console.log('Popup form submitted:', {
        fullName: fullName,
        phoneNumber: phoneNumber,
        emailAddress: emailAddress
    });

    alert('Thank you for your submission!');
    closePopup();
}

window.onload = showPopup;

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
document.getElementById('amenities-link').addEventListener('click', function(event) {
    event.preventDefault();
    displayImage('img5.png'); // Display img5.png for Amenities
});

// Event listener for Site & Floor Plan link
document.getElementById('site-floor-plan-link').addEventListener('click', function(event) {
    event.preventDefault();
    displayImage('img4.png'); // Display img4.png for Site & Floor Plan
});