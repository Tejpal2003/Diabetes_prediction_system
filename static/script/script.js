const mobile_nav =document.querySelector('.mobile-navbar-btn');

const nav_header = document.querySelector('.header');
const ToggleNavbar = () => {
    nav_header.classList.toggle("active")
}

mobile_nav.addEventListener('click',() => ToggleNavbar());










let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.add("close-popup");
}
