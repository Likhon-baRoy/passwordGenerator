// Declares and store possible characters ina variable called chars
const chars = "0123456789abcdefghijklmnopqrstvABCDEFGHIJKLMNOPQRSTV!@#$%^&*()";

// Declares a variable called passwordLength and assign its value to 8;
let passwordLength = 8;

// Get a reference to the slider and sliderNumber DOM elements
const slider = document.getElementById("slider");
let sliderNumber = document.getElementById("sliderNumber");

let pass1 = document.getElementById("password1-el");
let pass2 = document.getElementById("password2-el");
let pass3 = document.getElementById("password3-el");
let pass4 = document.getElementById("password4-el");

// Creates a function getGeneratePasswords() that displays generated passwords in HTML document
function getGeneratePasswords() {
    pass1.innerHTML = `<input type="text" id="1" value="${generatePasswords()}" onclick="copyToClipboard(1)" readonly>`;
    pass2.innerHTML = `<input type="text" id="2" value="${generatePasswords()}" onclick="copyToClipboard(2)" readonly>`;
    pass3.innerHTML = `<input type="text" id="3" value="${generatePasswords()}" onclick="copyToClipboard(3)" readonly>`;
    pass4.innerHTML = `<input type="text" id="4" value="${generatePasswords()}" onclick="copyToClipboard(4)" readonly>`;
}

// Creates a function generatePasswords() that return a password composed of passwordLength characters
function generatePasswords() {
    // Declares a variable callsed password and assign its value to an empty string
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        // Adds the new random chars to the password string
        password += chars[randomIndex];
    }
    return password;
}

function copyToClipboard(index) {
    const copyText = document.getElementById(index).value;
    navigator.clipboard.writeText(copyText).then(() => {
        // Alert on clipboard copy
        alert("Copied to clipboard");
    });
}

// Create an input event listener for slider element
slider.addEventListener("input", function () {
    // Display the value of the slider
    sliderNumber.textContent = `${slider.value}`;
    // Assign to passwordLength new value
    passwordLength = slider.value;
})
