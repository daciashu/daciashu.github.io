window.onload = function() {
    var n = document.getElementById("itsFriday");
    var d = new Date();
    if (d.getDate() == 6) {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}
