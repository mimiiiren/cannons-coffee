let form = document.querySelector("form");
let container = document.querySelector(".container");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const dataObj = Object.fromEntries(data.entries());

    let name = dataObj.name;
    let email = dataObj.email;
    let phone = dataObj.phone;
    let msg = dataObj.msg;
    let select = dataObj.select;
    let radio = dataObj.radio;

    let message = `Thank you ${name}!We appreciate your interest in ${radio}. 
    Your favorite coffee flavor is ${select} and your comments are ${msg}. 
    We will soon contact you at ${email} or ${phone}.`;
    
    let messageP = document.createElement("p");
    messageP.textContent = message;
    container.appendChild(messageP);

    console.log("form data", dataObj);
    form.reset;
}
