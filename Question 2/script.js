// write your JavaScript here

const navbarCollapse = document.querySelector('.navbar-collapse')
const navbarClose = document.querySelector('.navbar-close')
const navbarOpen = document.querySelector('.navbar-open')

navbarClose.addEventListener("click", function () {
    navbarCollapse.classList.toggle("active")
    navbarCollapse.style.display = "none"
})

navbarOpen.addEventListener("click", function () {
    navbarCollapse.classList.toggle("active")
    navbarCollapse.style.display = "block"
})