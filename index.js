const navToggle = document.querySelector(".nav-toggle")
const navUl = document.querySelector(".nav-ul")
navToggle.addEventListener("click", () => {
    navUl.classList.toggle(".nav-menu_visible")
})