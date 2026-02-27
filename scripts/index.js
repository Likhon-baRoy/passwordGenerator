const chars = "0123456789abcdefghijklmnopqrstvABCDEFGHIJKLMNOPQRSTV!@#$%^&*()";

let passwordLength = 8;

let pass1 = document.getElementById("password1-el");
let pass2 = document.getElementById("password2-el");
let pass3 = document.getElementById("password3-el");
let pass4 = document.getElementById("password4-el");

function generatePassword() {
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);

        password += chars[randomIndex];
    }
    return password;
}

function getGeneratePassword() {
    pass1.innerText = generatePassword();
    pass2.innerText = generatePassword();
    pass3.innerText = generatePassword();
    pass4.innerText = generatePassword();
}
