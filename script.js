const inputs = document.querySelectorAll(
  'input[type="text"] , input[type="password"]'
);

let pseudo , email , password , confirmPass;

const errorDisplay = (tag , message , valid) => {
    const container = document.querySelector("." + tag + "-container");
    const span = document.querySelector("." + tag + "-container > span");

    if(!valid){
        container.classList.add("error");
        span.textContent = message;
    }else{
        container.classList.remove("error");
        span.textContent = message;
    }
}

const pseudoChecker = (value) => {
    if(value.length > 0 && (value.length < 3 || value.length > 20)){
        errorDisplay("pseudo" , "le pseudo doit faire entre 3 et 20 caractères");
        pseudo = null;
    }else if(!value.match(/^[a-zA-Z0-9_.-]*$/)){
        errorDisplay("pseudo" , "le pseudo ne doit pas contenir de caractères spéciaux");
        pseudo = null;
    }else{
        errorDisplay("pseudo" , "" , true);
        pseudo = value;
    }
}

//y Cette fonction est trop grosse et répétitive, on va donc créer une
//y une fonction beaucoup plus simple comprenant 3 paramètres
//v const pseudoChecker = (value) => {
//v   const pseudoContainer = document.querySelector(".pseudo-container");
//v   const errorDisplay = document.querySelector(".pseudo-container > span");
//v   if (value.length > 0 && (value.length < 3 || value.length > 20)) {
//v     pseudoContainer.classList.add("error");
//v     errorDisplay.textContent = "Le pseudo doit faire entre 3 et 20 caractères";
//v   } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
//v     pseudoContainer.classList.add("error");
//v     errorDisplay.textContent =
//v       "Le pseudo ne doit pas contenir de caractères spéciaux";
//v   } else {
//v     pseudoContainer.classList.remove("error");
//v     errorDisplay.textContent = "";
//v   }
//v };

const emailChecker = (value) => {
    if(!value.match(/^[\w-_]+@[\w-]+\.[a-z]{2,4}$/i)){
        errorDisplay("email" , "le mail n'est pas valide"),
        email = null;
    }else{
        errorDisplay("email" , "" , true);
        email = value;
    }
};

const passwordChecker = (value) => {
  console.log(value);
};

const confirmChecker = (value) => {
  console.log(value);
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "pseudo":
        pseudoChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "password":
        passwordChecker(e.target.value);
        break;
      case "confirm":
        confirmChecker(e.target.value);
        break;
      default:
        null;
    }
  });
});
