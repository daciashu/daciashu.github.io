//Current Weather

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3117735&units=imperial&APPID=b199c77eadf38caf121ee3f836208d11";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        document.getElementById('currentlyM').textContent = jsObject.weather[0].main;
        document.getElementById('tempFM').textContent = jsObject.main.temp.toFixed(0);
        document.getElementById('humidityM').textContent = jsObject.main.humidity;
        document.getElementById('speedM').textContent = jsObject.wind.speed.toFixed(0);

        var tM = parseFloat(document.getElementById('tempFM').textContent);
        var sM = parseFloat(document.getElementById('speedM').textContent);
        var madridF = windChill(tM, sM);

        document.getElementById("madridF").innerHTML = madridF;

        function windChill(tempFM, speedM) {
            var sM = Math.pow(speedM, 0.16);
            var madridF = (35.74 + (0.6215 * tempFM) - (35.75 * sM) + (0.4275 * (tempFM * sM))).toFixed(0);

            if (tempFM <= 50 && speedM >= 3) {
                return madridF + "°F";
            } else {
                return "N/A";
            }
        }
    });