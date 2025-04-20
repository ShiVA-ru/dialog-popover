const openButton = document.querySelector(".open-button");
const closeButton = document.querySelector(".close-button");
const dialog = document.querySelector("dialog");

openButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});
