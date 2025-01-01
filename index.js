const passwordBox = document.getElementById('password');
const passwordLength = 12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "!@#$%^&*[]{}/+_,.;:|`~";
const allCharacters = uppercase + lowercase + number + symbol;
let password = "";


function generatePassword() {

    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];


    while (passwordLength >= password.length) {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
    passwordBox.value = password;
    console.log(password.length);
}


function copyPassword() {
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
}