const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=b199c77eadf38caf121ee3f836208d11";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
    })