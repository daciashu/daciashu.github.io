function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-GB', options);