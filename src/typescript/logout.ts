// Element quering
let logoutSection = document.body.querySelector(
  ".logout-section"
) as HTMLElement;
let profileInfo = document.body.querySelector(".profile-detail") as HTMLElement;
// Interfaces

interface IprofileCredentials {
  username: string;
  password?: string;
  img: string;
  email: string;
}

// global object
let profileData: IprofileCredentials = {
  username: "",
  img: "",
  email: "",
};

// signatures
let GetCredentials: () => void;
let SetCredentials: (data: IprofileCredentials) => void;
let loggedOut: () => void;

//functions

SetCredentials = (data) => {
  if (localStorage.getItem("ProfileCredentials")) {
    profileInfo.innerHTML = `<ul>
       <div class="logout-section-heading"></div>
          <li>
             <img src="${data?.image}" />
          </li>
          <div class="login-section-heading">
          <li><i class="ri-user-3-line"></i><span>Username :</span> ${data?.username}</li>
          <li><i class="ri-mail-settings-line"></i><span>Email :</span> ${data?.emailaddress}</li>
          <li><i class="ri-lock-password-line"></i><span>Password:</span>${data.password}</li>
          </div>
          <li><button><i class="ri-door-open-line"></i> Log out</button></li>
        </ul>`;

    let logOutbtn = document.body.querySelector("button") as HTMLButtonElement;
    logOutbtn.addEventListener("click", () => {
      loggedOut();
    });
  } else {
    profileInfo.innerHTML = ` <div class="logged-screen">
      <p>You are not logged in !</p>
      <img src="https://cdn-icons-gif.flaticon.com/17905/17905775.gif" alt="">
      
    </div>`;
  }

  // if (
  //   profilephoto.src !== "https://img.freepik.com/premium-photo/fun-unique-cartoon-profile-picture-that-represents-your-style-personality_1283595-14213.jpg"
  // ) {
  //   profilephoto.src = data.img;
  // }
  // userName.innerText = data.username;
  // password.innerText = data.password;
};
GetCredentials = () => {
  let profilecredential = localStorage.getItem("ProfileCredentials");
  profileData = JSON.parse(profilecredential);
  SetCredentials(profileData);
};

loggedOut = () => {
  logoutSection.innerHTML = ` <div class="logged-screen">
      <p>You are successfully logged out !</p>
      <img src="https://cdn-icons-gif.flaticon.com/17905/17905745.gif" alt="">
      <button><i class="ri-door-open-line"></i> Log out</button>
    </div>`;
  localStorage.removeItem("ProfileCredentials");
};

// Event Listeners
window.addEventListener("DOMContentLoaded", GetCredentials);
