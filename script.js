const defaultText = "your name"
let countLetter = 0;
const buyNow = () => {
  const nameInputValue = document.querySelector(".name-input").value;
  countLetter = nameInputValue.trim().length;
  if (nameInputValue.trim() === "") {
    alert("Enter a set of letters.");
  } else if (nameInputValue.trim().toLowerCase() === defaultText) {
    alert("Enter a new text.");
  } else if (countLetter >= 15) {
    alert("We have 15 letters left in stock, and you have exceeded the limit.");
  } else {
    alert("input accepted successfully");
  }
};
const button = document.querySelector("button");
button.addEventListener("click", buyNow);
