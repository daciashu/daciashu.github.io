//Current Weather

const PapiURL = "https://api.openweathermap.org/data/2.5/weather?id=3004631&units=imperial&APPID=b199c77eadf38caf121ee3f836208d11";

fetch(PapiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        document.getElementById('currentlyP').textContent = jsObject.weather[0].main;
        document.getElementById('tempFP').textContent = jsObject.main.temp.toFixed(0);
        document.getElementById('humidityP').textContent = jsObject.main.humidity;
        document.getElementById('speedP').textContent = jsObject.wind.speed.toFixed(0);

        var tP = parseFloat(document.getElementById('tempFP').textContent);
        var sP = parseFloat(document.getElementById('speedP').textContent);
        var parisF = windChill(tP, sP);

        document.getElementById("parisF").innerHTML = parisF;

        function windChill(tempFP, speedP) {
            var sP = Math.pow(speedP, 0.16);
            var parisF = (35.74 + (0.6215 * tempFP) - (35.75 * sP) + (0.4275 * (tempFP * sP))).toFixed(0);

            if (tempFP <= 50 && speedP >= 3) {
                return parisF + "°F";
            } else {
                return "N/A";
            }
        }
    });