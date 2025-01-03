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
   let text = document.getElementById('length-display').textContent = value;
   console.log(text);
}


function copyPassword() {
    passwordBox.select();
    let checker = navigator.clipboard.writeText(passwordBox.value);
    while (checker) {
     showToast()
 }


}

function showToast(){
    const toastBox = document.getElementById('toast');

    if (toastBox) {
        toastBox.textContent = 'Copied to clipboard!';

        toastBox.classList.add('show');
        console.log(toastBox.textContent);


        setTimeout(() => {
            toastBox.classList.remove('show');
        }, 3000);
    } else {
        console.error("Toast element not found!");
    }


}

