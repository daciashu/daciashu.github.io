function itsFriday() {
    var n = new Date();
    var d = n.getDay();
    if (d == 5) {
        document.getElementById("itsFriday").style.display = "block";
    }
    else {
        document.getElementById("itsFriday").style.display = "none";
    }
}