let iconBar_nav = document.querySelector(".icon-bar-nav")
let i_icon = document.querySelector(".fa-bars")
let menu = document.querySelector(".menu")

iconBar_nav.addEventListener("click", () => {
    if(i_icon.classList.contains("fa-bars")) {
        menu.style.left = "0"
        i_icon.classList = "fa fa-times"
    } else {
        menu.style.left = "-256px"
        i_icon.classList = "fa fa-bars"
    }
})