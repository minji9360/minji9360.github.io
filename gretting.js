const nameForm = document.querySelector(".js-nameForm");
const input = nameForm.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    nameForm.classList.add(SHOWING_CN);
    nameForm.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    nameForm.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `${text}'s to do list`;
    toDoForm.classList.add(SHOWING_CN);
    toDoList.classList.add(SHOWING_CN);
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}
function init() {
    loadName();
}

init();
