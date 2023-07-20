const cardNum = document.querySelector(".card-numbers");
const numInput = document.getElementById("cardNumber");
const cardName = document.querySelector(".card-name");
const nameInput = document.getElementById("name");
const expDatemm = document.getElementById("mm");
const expDateyy = document.getElementById("yy");
const expInputmm = document.getElementById("expDate-mm");
const expInputyy = document.getElementById("expDate-yy");
const cvc = document.querySelector(".cvc");
const cvcInput = document.getElementById("cvc");
const example = document.querySelector(".example");
const numExample = document.querySelector(".example2");
const cardForm = document.getElementById("form");
const completeForm = document.querySelector(".completed-form");
const continueBtn = document.querySelector(".input");

/* Name Input */
nameInput.addEventListener("input", (e) => {
  const regex = /^[a-z ,.'-]+$/i;
  const digits = nameInput.value;
  const found = regex.test(digits);

  if (!found && digits.length) {
    nameInput.classList.add("invalid");
    example.classList.add("block");
  } else {
    nameInput.classList.remove("invalid");
    example.classList.remove("block");
  }
  e.target.value = e.target.value.replace(/[-\d]/g, "");

  cardName.innerText = e.target.value;
});

/* Card Number Input */
numInput.addEventListener("input", (e) => {
  const regex = /^[0-9 ,-]+$/i;
  const digits = numInput.value;
  const found = regex.test(digits);

  if (!found && digits.length) {
    numInput.classList.add("invalid");
    numExample.classList.add("block");
  } else {
    numInput.classList.remove("invalid");
    numExample.classList.remove("block");
  }

  e.target.value = e.target.value
    .replace(/[\s.-\D]/g, "")
    .replace(/(\d{4})/g, "$1 ")
    .trim();

  cardNum.innerHTML = e.target.value;
});
/* Months Input  */
expInputmm.addEventListener("input", (e) => {
  const regex = /^[0-9]+$/g;
  const digits = expInputmm.value;
  const found = regex.test(digits);
  const regexMM = /0[1-9]|1[0-2]/g;

  if (!found && digits.length) {
    expInputmm.classList.add("invalid");
  } else {
    expInputmm.classList.remove("invalid");
  }

  if (!regexMM.test(digits) && digits.length > 1) {
    e.target.value = e.target.value.replace(/[-\d]/g, "").trim();
    expInputmm.classList.add("invalid");
  }

  e.target.value = e.target.value.replace(/[\s.-\D]/g, "");

  expDatemm.innerText = e.target.value;
});

/* Years Input */
expInputyy.addEventListener("input", (e) => {
  const regex = /^[0-9]+$/g;
  const digits = expInputyy.value;
  const found = regex.test(digits);
  const regexYY = /2[3-9]|3[0-5]/g;

  if (!found && digits.length) {
    expInputyy.classList.add("invalid");
  } else {
    expInputyy.classList.remove("invalid");
  }

  if (!regexYY.test(digits) && digits.length > 1) {
    e.target.value = e.target.value.replace(/[-\d]/g, "").trim();
    expInputyy.classList.add("invalid");
  }

  e.target.value = e.target.value.replace(/[\s.-\D]/g, "");

  expDateyy.innerText = e.target.value;
});

/* CVC Input */
cvcInput.addEventListener("input", (e) => {
  const regex = /^[0-9]+$/g;
  const digits = cvcInput.value;
  const found = regex.test(digits);

  if (!found && digits.length) {
    cvcInput.classList.add("invalid");
  } else {
    cvcInput.classList.remove("invalid");
  }

  e.target.value = e.target.value.replace(/[\s.-\D]/g, "");

  cvc.innerText = e.target.value;
});

/* Form Submit Event */
cardForm.addEventListener("submit", (e) => {
  e.preventDefault();
  cardForm.classList.add("none");
  completeForm.classList.remove("none");
  const cardInfo = {
    name: cardName.innerText,
    number: cardNum.innerHTML,
    date: {
      month: expDatemm.innerText,
      year: expDateyy.innerText,
    },
    cvc: cvc.innerText,
  };

  console.log(cardInfo);
});

continueBtn.addEventListener("click", () => {
  cardForm.classList.remove("none");
  completeForm.classList.add("none");
  location.href = "/";
});
