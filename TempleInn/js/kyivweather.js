//Current Weather

const KapiURL = "https://api.openweathermap.org/data/2.5/weather?id=703448&units=imperial&APPID=b199c77eadf38caf121ee3f836208d11";

fetch(KapiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        document.getElementById('currentlyK').textContent = jsObject.weather[0].main;
        document.getElementById('tempFK').textContent = jsObject.main.temp.toFixed(0);
        document.getElementById('humidityK').textContent = jsObject.main.humidity;
        document.getElementById('speedK').textContent = jsObject.wind.speed.toFixed(0);

        var tK = parseFloat(document.getElementById('tempFK').textContent);
        var sK = parseFloat(document.getElementById('speedK').textContent);
        var kyivF = windChill(tK, sK);

        document.getElementById("kyivF").innerHTML = kyivF;

        function windChill(tempFK, speedK) {
            var sK = Math.pow(speedK, 0.16);
            var kyivF = (35.74 + (0.6215 * tempFK) - (35.75 * sK) + (0.4275 * (tempFK * sK))).toFixed(0);

            if (tempFK <= 50 && speedK >= 3) {
                return kyivF + "°F";
            } else {
                return "N/A";
            }
        }
    });