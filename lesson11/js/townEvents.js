const eventURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(eventURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const events = jsonObject['towns'];
        const towns = ["Preston", "Fish Haven", "Soda Springs"]; 
    })