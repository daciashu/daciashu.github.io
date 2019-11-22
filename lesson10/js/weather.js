const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=b199c77eadf38caf121ee3f836208d11";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('currently').textContent = jsObject.weather[0].main;
        document.getElementById('tempF').textContent = jsObject.main.temp;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('speed').textContent = jsObject.wind.speed;

        var t = parseFloat(document.getElementById('tempF').textContent);
        var s = parseFloat(document.getElementById('speed').textContent);
        var f = windChill(t, s);
    
        document.getElementById("f").innerHTML = f;
    
    function windChill(tempF, speed) {
        var s = Math.pow(speed, 0.16);
        var f = (35.74 + (0.6215 * tempF) - (35.75 * s) + (0.4275 * (tempF * s))).toFixed(1);
    
        if( tempF <= 50 && speed > 3 ) {
            return f;
        }
            else{
                return "N/A";
            }
    }
});




/*const apiURL = "https://api.openweathermap.org/data/2.5/forcast?id=5604473&units=imperial&APPID=b199c77eadf38caf121ee3f836208d11";


    fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {
            console.log(object);

        })


    // Headers



    // Icons



    // Forecast */