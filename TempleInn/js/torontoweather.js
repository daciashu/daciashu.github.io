//Current Weather

const TapiURL = "https://api.openweathermap.org/data/2.5/weather?id=6167865&units=imperial&APPID=b199c77eadf38caf121ee3f836208d11";

fetch(TapiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        document.getElementById('currentlyT').textContent = jsObject.weather[0].main;
        document.getElementById('tempFT').textContent = jsObject.main.temp.toFixed(0);
        document.getElementById('humidityT').textContent = jsObject.main.humidity;
        document.getElementById('speedT').textContent = jsObject.wind.speed.toFixed(0);

        var tT = parseFloat(document.getElementById('tempFT').textContent);
        var sT = parseFloat(document.getElementById('speedT').textContent);
        var torontoF = windChill(tT, sT);

        document.getElementById("torontoF").innerHTML = torontoF;

        function windChill(tempFT, speedT) {
            var sT = Math.pow(speedT, 0.16);
            var torontoF = (35.74 + (0.6215 * tempFT) - (35.75 * sT) + (0.4275 * (tempFT * sT))).toFixed(0);

            if (tempFT <= 50 && speedT >= 3) {
                return torontoF + "°F";
            } else {
                return "N/A";
            }
        }
    });