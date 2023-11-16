const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))
const DarkModeimg = document.querySelector(".logo")
const icon = document.getElementById("icon");

icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        DarkModeimg.src = "./images/alarado-icon-homepage.svg";
        icon.src = "./images/Sun_fill.svg"
    }
    else {
        DarkModeimg.src = "./images/alarado-icon-homepage-dark-mode.svg"
        icon.src = "./images/Moon_fill.svg"
    }
}