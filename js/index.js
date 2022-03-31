const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");



document.getElementById('submitBtn').addEventListener("submit", (e) => {
    validate();
    e.preventDefault();
});