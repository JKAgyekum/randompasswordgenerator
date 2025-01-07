const passwordBox = document.getElementById('password');
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "!@#$%^&*[]{}/+_,.;:|`~";
const allCharacters = uppercase + lowercase + number + symbol;
const notesContainer  = document.querySelector(".notes-container");
const creatBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");


//how to use js to write your html.

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");

}
showNotes();
function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}




creatBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    img.src = "images/delete.png";
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(note => {
            note.onkeyup = function () {
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", (e) => {
    if(event.key === "Enter") {
        document.exeCommand("insertLineBreak");
        event.preventDefault();
    }
})



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

