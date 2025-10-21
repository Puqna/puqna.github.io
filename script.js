// Toggle dropdown open/close
const dropdown = document.querySelector(".dropdown");
const button = dropdown.querySelector(".dropbtn");

button.addEventListener("click", () => {
  dropdown.classList.toggle("show");
});