function chillyWind() {
    var t = parseFloat(document.getElementById('tempF').textContent);
    var s = parseFloat(document.getElementById('speed').textContent);
    var output = windChill(t, s);

    document.getElementById("output").textContent = output + "°F";
}

function windChill(tempF, speed) {
    var s = Math.pow(speed, 0.16);
    var f = (35.74 + (0.6215 * tempF) - (35.75 * s) + (0.4275 * (tempF * s))).toFixed(1);

    if ( t <= 50 && s > 3 ) {
        return f;
    }
        else{
            return "N/A";
        }
}