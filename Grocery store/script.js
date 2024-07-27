
// for menubar
if (typeof window !== "undefined") {
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
menu.addEventListener('click',() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}




window.onload=function(){
    
  
const signupForm = document.getElementById("signupForm");
signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Check if the terms checkbox is checked
    const termsCheckbox = document.getElementById("termsCheckbox");
    if (!termsCheckbox.checked) {
        alert("Please agree to the terms and privacy notice.");
        return;
    }

    // You can perform additional validation and registration logic here
    // For simplicity, we'll just display a success message
    alert("Sign up successful!");
});
}












const productBoxes = document.querySelectorAll('.product .box');

productBoxes.forEach(box => {
    const quantityInput = box.querySelector('.quantity-input');
    const increaseButton = box.querySelector('.quantity-button.increase');
    const decreaseButton = box.querySelector('.quantity-button.decrease');
    const addToCartButton = box.querySelector('.add-to-cart');

    increaseButton.addEventListener('click', () => {
        let quantity = parseInt(quantityInput.value);
        if (quantity < 10) {
            quantity++;
            quantityInput.value = quantity;
            updateButtonState();
        }
    });

    decreaseButton.addEventListener('click', () => {
        let quantity = parseInt(quantityInput.value);
        if (quantity > 0) {
            quantity--;
            quantityInput.value = quantity;
            updateButtonState();
        }
    });

    quantityInput.addEventListener('input', () => {
        let quantity = parseInt(quantityInput.value);
        if (quantity < 0) {
            quantityInput.value = 0;
        } else if (quantity > 10) {
            quantityInput.value = 10;
        }
        updateButtonState();
    });

    function updateButtonState() {
        let quantity = parseInt(quantityInput.value);
        if (quantity === 0) {
            addToCartButton.disabled = true;
        } else {
            addToCartButton.disabled = false;
        }
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const signUpForm = document.getElementById("signupForm");
    const accountDetails = document.getElementById("accountDetails");
    const userName = document.getElementById("userName");
    const accountEmail = document.getElementById("accountEmail");
    const accountPhone = document.getElementById("accountPhone");
    const password = document.getElementById("password");

    signUpForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get the form input values
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const userPassword = password.value;

        // Display the account details
        // email = email.toLowerCase();
        
        userName.textContent = `${firstName} ${lastName}`;
        accountEmail.textContent = email;
        accountPhone.textContent = phone;
        accountPassword.textContent = userPassword; // Add this line to display the password

        // Hide the form and show the account details
        signUpForm.style.display = "none";
        accountDetails.style.display = "block";
    });
});





}