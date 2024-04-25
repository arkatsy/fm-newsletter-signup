import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";

const dialog = document.getElementById("success-dialog");
const input = document.getElementById("email");
const subscribeBtn = document.getElementById("subscribe-btn");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  dialog.showModal();
  addInfoToModal(input.value);
});

function addInfoToModal(email) {
  const insertEmailNode = document.getElementById("insert-email");
  insertEmailNode.textContent = email;
  form.reset();
}
