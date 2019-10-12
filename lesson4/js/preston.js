function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-GB', options);