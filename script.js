const form = document.querySelector("form");
const inputs = document.querySelectorAll(
  'input[type="text"] , input[type="password"]'
);

const progressBar = document.getElementById("progress-bar");
let pseudo, email, password, confirmPass;

const errorDisplay = (tag, message, valid) => {
  const container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container > span");

  if (!valid) {
    container.classList.add("error");
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = message;
  }
};

const pseudoChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay("pseudo", "le pseudo doit faire entre 3 et 20 caractères");
    pseudo = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay(
      "pseudo",
      "le pseudo ne doit pas contenir de caractères spéciaux"
    );
    pseudo = null;
  } else {
    errorDisplay("pseudo", "", true);
    pseudo = value;
  }
};

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
  if (!value.match(/^[\w-_]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay("email", "le mail n'est pas valide"), (email = null);
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};

const passwordChecker = (value) => {
    //o Pour éviter que toutes les class ne s'empilent
    progressBar.classList = "";
  //o Permet de checker dans le password
  //o au moins 1 caractère spécial
  //o au moins une majuscule
  //o au moins 1 chiffre
  //o au moins une longueur de 8 caractères
  if (
    !value.match(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
    )
  ) {
    errorDisplay(
      "password",
      "votre mot de passe doit obligatoirement contenir 8 caractères, une majuscule, un chiffre et un caractère spécial"
    );
    progressBar.classList.add("progressRed");
    password = null;
  }else if(value.length < 12){
    progressBar.classList.add("progressBlue");
    errorDisplay("password" , "" , true)
    password = value;
  }else{
    progressBar.classList.add("progressGreen");
    errorDisplay("password" , "" , true)
    password = value;
  }
  //o Pour être sûr d'avoir la même longueur de mot de passe
  if(confirmPass) confirmChecker(confirmPass);
};

const confirmChecker = (value) => {
  if(value !== password){
    errorDisplay("confirm" , "les mots de passe ne correspondent pas");
    confirmPass = false;
  }else{
    errorDisplay("confirm" , "" , true);
    confirmPass = true;
  }

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

form.addEventListener('submit' , (e) => {
    e.preventDefault();
    if(pseudo && email && password && confirmPass){
        const data = {
            pseudo : pseudo,
            email : email,
            password : password,
        };
        //o On peut écrire notre objet de la façon suivante
        //o car on a les mêmes noms pour les indexs et les values
        // const data = {
        //     pseudo,
        //     email,
        //     password,
        // };
        console.log(data);
        //o Pour remettre tous nos champs à 0
        inputs.forEach((input) => (input.value = ""));
        progressBar.classList = "";
        pseudo = null;
        email = null;
        password = null;
        confirmPass = null;
        alert("Inscription validée")
    }else{
        alert("Veuillez remplir correctement les champs")
    }
})