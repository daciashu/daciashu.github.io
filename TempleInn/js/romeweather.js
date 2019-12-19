//Current Weather

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=6539761&units=imperial&APPID=b199c77eadf38caf121ee3f836208d11";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        document.getElementById('currentlyR').textContent = jsObject.weather[0].main;
        document.getElementById('tempFR').textContent = jsObject.main.temp.toFixed(0);
        document.getElementById('humidityR').textContent = jsObject.main.humidity;
        document.getElementById('speedR').textContent = jsObject.wind.speed.toFixed(0);

        var tR = parseFloat(document.getElementById('tempFR').textContent);
        var sR = parseFloat(document.getElementById('speedR').textContent);
        var romeF = windChill(tR, sR);

        document.getElementById("romeF").innerHTML = romeF;

        function windChill(tempFR, speedR) {
            var sR = Math.pow(speedR, 0.16);
            var romeF = (35.74 + (0.6215 * tempFR) - (35.75 * sR) + (0.4275 * (tempFR * sR))).toFixed(0);

            if (tempFR <= 50 && speedR >= 3) {
                return romeF + "°F";
            } else {
                return "N/A";
            }
        }
    });