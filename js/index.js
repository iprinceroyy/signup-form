const form = document.querySelector(".form");
const inputs = document.querySelectorAll("input");
const email = document.getElementById("email");

function isValidEmail(userEmail) {
    const regexEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regexEmail.test(userEmail);
}

const invalid = input => {
    input.placeholder = "";
    input.classList.add("invalid");
    input.nextElementSibling.style.display = "contents";

}

form.addEventListener("submit", e => {
    e.preventDefault();
    inputs.forEach(input => {
        const inputVal = input.value.trim();

        inputVal === "" && invalid(input);

        if (input === email) isValidEmail(input.value) && "";
    });


});