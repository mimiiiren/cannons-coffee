let form = document.querySelector("form")
let container = document.querySelector(".container");
form.addEventListener("submit", onFormSubmit);
function onFormSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const dataObj = Object.fromEntries(data.entries());

    let name = dataObj.name;
    let email = dataObj.email;
    let pwd = dataObj.pwd;

    let message = `"Welcome, ${name}! You are logged in!"`;
    let messageP = document.createElement("p")
    messageP.textContent = message;
    container.appendChild(messageP);

    console.log("form data", dataObj);
    form.reset;
}