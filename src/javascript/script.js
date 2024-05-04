alert("Bem-vindo ao nosso site!");

// slide

let imagens = ["src/images/bike1.png", "src/images/bike2.png", "src/images/bike3.png", "src/images/bike4.png"];
let index = 0;
let time = 3000;

function slideShow() {
  document.getElementById("imgbanner").src = imagens[index];
  index++;

  if (index == imagens.length) {
    index = 0;
  }
  setTimeout(slideShow, time);
}

slideShow();

// login

const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});

//VALIDAÇÃO DE LOGIN
function validate() {

  //declarando as variaveis
  let usuario = document.getElementById("email").value;
  let senha = document.getElementById("password").value;

  if (usuario === "admin@email.com" && senha === "admin123") {
    window.open("quiz.html")
  } else {
    alert("usuario/senha invalídos")
  }
}