// write your JavaScript here

const navbarCollapse = document.querySelector('.navbar-collapse')
const navbarToggler = document.querySelector('.navbar-toggler')


navbarToggler.addEventListener("click", function () {
    navbarCollapse.classList.toggle("responsive")

    if (navbarCollapse.className === "navbar-collapse") {
        this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
        stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>`
    } else {
        this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
      `
    }
})