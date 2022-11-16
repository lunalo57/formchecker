const inputs = document.querySelectorAll(
  'input[type="text"] , input[type="password"]'
);





//y Cette focntion est trop grosse et répétitive, on va donc créer une
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
  console.log(value);
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
