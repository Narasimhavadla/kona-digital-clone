
const navLinks = document.querySelector(".nav-links")
function onToggleMenu(e){
    e.name = e.name === "menu" ? "close" : "menu"
    navLinks.classList.toggle("top-[120%]")
}

var acc = document.getElementsByClassName("accordion");
var change = document.querySelectorAll(".bi-chevron-down")
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
            this.style.color = "gray"
        } 
        
        else {
            panel.style.display = "block";
            this.style.color = "#A429D7"
        }
    });
}

let subMenu = document.getElementById("submenu")

document.querySelectorAll('.products').forEach(item => {
    item.addEventListener('mouseover', () => {
        subMenu.style.display = 'block';
    });
    item.addEventListener('mouseout', () => {
        subMenu.style.display = 'none';
    });
});

let subMenu2 = document.getElementById("submenu-2")

document.querySelectorAll('.solutions').forEach(item => {
    item.addEventListener('mouseover', () => {
        subMenu2.style.display = 'block';
    });
    item.addEventListener('mouseout', () => {
        subMenu2.style.display = 'none';
    });
});

let subMenu3 = document.getElementById("submenu3")

document.querySelectorAll('.services').forEach(item => {
    item.addEventListener('mouseover', () => {
        subMenu3.style.display = 'block';
    });
    item.addEventListener('mouseout', () => {
        subMenu3.style.display = 'none';
    });
});


