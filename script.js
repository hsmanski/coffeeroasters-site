// Navigation Variables
// Hamburger Menu
const hamburgerMenu = document.querySelector(".hamburger-menu");
const modalNav = document.querySelector(".modal-nav");

// Close Modal Function
function closeNavModal() {
  hamburgerMenu.classList.remove("change");
  modalNav.classList.add("hidden");
}
// End of Navigation Functions

// Navigation Event Listeners
// Hamburger Menu
hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("change");
  modalNav.classList.toggle("hidden");
});
// End of Navigation Event Listeners
