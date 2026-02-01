// Elements Querying
let eMail = document.querySelector(".email") as HTMLInputElement;
let passWord = document.querySelector(".password") as HTMLInputElement;
let submitBtn = document.querySelector("button") as HTMLInputElement;
let form = document.querySelector("form") as HTMLFormElement;
let emailErr = document.querySelector(".emailerr") as HTMLParagraphElement;
let passWordErr = document.querySelector(".passerr") as HTMLParagraphElement;
let continuetoDashboard = document.querySelector(
  ".continuetodashboard"
) as HTMLAnchorElement;

// Interfaces
interface Usercredentials {
  email: string;
  password: string;
}

interface Errors {
  emailerr: string;
  passerr: string;
}

// function Signatures
let handleChange: (e: Event) => void;
let handleValidation: (Validateformdata: Usercredentials) => number;
let handleSubmit: (finaldata: Usercredentials) => void;
// usercredential holder
let userformdata: Usercredentials = {
  email: "",
  password: "",
};

// function to handle submission
handleSubmit = (finaldata: Usercredentials) => {
  localStorage.setItem("userdetails", JSON.stringify(finaldata));
  continuetoDashboard.click();
};
// function to handle Validation
handleValidation = (Validateformdata: Usercredentials): number => {
  // Error Object
  let err: Errors = {
    emailerr: " ",
    passerr: " ",
  };
  // Form Validation
  if (Validateformdata.email.trim() === "") {
    err.emailerr = "Enter Email First";
    emailErr.innerText = err.emailerr;
  } else if (Validateformdata.password.trim() === "") {
    err.passerr = "Password is mandatory";
    passWordErr.innerText = err.passerr;
  }
  if (
    Validateformdata.email.trim() &&
    Validateformdata.password.trim() === ""
  ) {
    emailErr.innerText = "";
  }
  if (Validateformdata.password && Validateformdata.email) {
    passWordErr.innerText = "";

    return 1;
  }
};
// function to handle changes in the input fields
handleChange = (e: Event): void => {
  const { name, value } = e.target as EventTarget;
  userformdata = { ...userformdata, [name]: value };
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
const showericon = document.querySelector(".ri-eye-line") as HTMLElement;
showericon.addEventListener("click", () => {
  passWord.type = "password";
  let hiddenIcon = document.createElement("i") as HTMLElement;
  hiddenIcon.className = "ri-eye-off-line";
  showericon.replaceWith(hiddenIcon);
  hiddenIcon.addEventListener("click", () => {
    passWord.type = "text";
    hiddenIcon.replaceWith(showericon);
  });
});
