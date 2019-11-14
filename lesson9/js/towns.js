const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        const weatherPages = ["Preston", "Fish Haven", "Soda Springs"];
            console.table(jsonObject);
            for (let i = 0; i < towns.length; i++) {
                if (weatherPages.includes(towns[i].name)) {
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let p4 = document.createElement('p');
                let pic = document.createElement('img');

                h2.textContent = towns[i].name;
                p1.textContent = towns[i].motto;
                p2.textContent = 'Founded in: ' + towns[i].yearFounded;
                p3.textContent = 'Population: ' + towns[i].currentPopulation;
                p4.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall;
                pic.setAttribute('src', "images/" + towns[i].photo);
                pic.setAttribute('alt', "A picture of " + towns[i].name);


                card.appendChild(h2);
                card.appendChild(p1);
                card.appendChild(p2);
                card.appendChild(p3);
                card.appendChild(p4);
                card.appendChild(pic);

                document.querySelector('div.cards').appendChild(card);
                }
              }
            });
