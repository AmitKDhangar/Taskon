"use strict";
// Elements Querying
let eMail = document.querySelector(".email");
let passWord = document.querySelector(".password");
let submitBtn = document.querySelector("button");
let form = document.querySelector("form");
let emailErr = document.querySelector(".emailerr");
let passWordErr = document.querySelector(".passerr");
let continuetoDashboard = document.querySelector(".continuetodashboard");
// function Signatures
let handleChange;
let handleValidation;
let handleSubmit;
// usercredential holder
let userformdata = {
    email: "",
    password: "",
};
// function to handle submission
handleSubmit = (finaldata) => {
    localStorage.setItem("userdetails", JSON.stringify(finaldata));
    continuetoDashboard.click();
};
// function to handle Validation
handleValidation = (Validateformdata) => {
    // Error Object
    let err = {
        emailerr: " ",
        passerr: " ",
    };
    // Form Validation
    if (Validateformdata.email.trim() === "") {
        err.emailerr = "Enter Email First";
        emailErr.innerText = err.emailerr;
    }
    else if (Validateformdata.password.trim() === "") {
        err.passerr = "Password is mandatory";
        passWordErr.innerText = err.passerr;
    }
    if (Validateformdata.email.trim() &&
        Validateformdata.password.trim() === "") {
        emailErr.innerText = "";
    }
    if (Validateformdata.password && Validateformdata.email) {
        passWordErr.innerText = "";
        return 1;
    }
};
// function to handle changes in the input fields
handleChange = (e) => {
    const { name, value } = e.target;
    userformdata = Object.assign(Object.assign({}, userformdata), { [name]: value });
};
// Event Handlers
eMail.addEventListener("change", handleChange);
passWord.addEventListener("change", handleChange);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = handleValidation(userformdata);
    if (valid === 1) {
        handleSubmit(userformdata);
        eMail.value = "";
        passWord.value = "";
        continuetoDashboard.href = "dashboard.html";
    }
});
submitBtn.addEventListener("click", form.submit);
// passwordshowerandhider
const showericon = document.querySelector(".ri-eye-line");
showericon.addEventListener("click", () => {
    passWord.type = "password";
    let hiddenIcon = document.createElement("i");
    hiddenIcon.className = "ri-eye-off-line";
    showericon.replaceWith(hiddenIcon);
    hiddenIcon.addEventListener("click", () => {
        passWord.type = "text";
        hiddenIcon.replaceWith(showericon);
    });
});
