const navList = document.getElementById("nav-list")
const dropDownImage = document.getElementById("drop-down-image")

function hideAndShow() {
    if (navList.style.display == "none") {
        navList.style.display = "block"
    } else {
        navList.style.display = "none"
    }
}

function resetSize() {
    if (window.innerWidth > 700) {
        navList.style.display = "inline"
    } else {
        navList.style.display = "none"
    }
}

dropDownImage.addEventListener("click", hideAndShow)

window.addEventListener("resize", resetSize)