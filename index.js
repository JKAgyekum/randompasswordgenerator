const passwordBox = document.getElementById('password');
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "!@#$%^&*[]{}/+_,.;:|`~";
const allCharacters = uppercase + lowercase + number + symbol;



function generatePassword() {
    let password = "";
    const length = document.getElementById('password-length').value;
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }
    passwordBox.value = password;
    console.log(password);

}

function updateLengthDisplay(value) {
    document.getElementById('length-display').textContent = value;
}


function copyPassword() {
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
    showToast()
}

function showToast(){
    const toastBox = document.getElementById('toast');
    toastBox.textContent = 'This is a toast notification!';
    console.log(toastBox.textContent);

}

