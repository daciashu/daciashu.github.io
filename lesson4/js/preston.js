function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

try {
    var theDate = new Date;
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    };
document.getElementsById('theDate').innerHTML = new Date().toLocaleDateString("en-US", options);