const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        const weatherPages = ["Preston", "Fish Haven", "Soda Springs"];
    
            for (let i = 0; i < towns.length; i++) {
                if (weatherPages.includes(towns[i].name)) {
                let card = document.createElement('article');
                let cardData = document.createElement('section')
                let h2 = document.createElement('h2');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let p4 = document.createElement('p');
                let pic = document.createElement('img');

                cardData.className = 'town-data';
                p1.className = 'motto';

                h2.textContent = towns[i].name;
                p1.textContent = towns[i].motto;
                p2.textContent = 'Founded in: ' + towns[i].yearFounded;
                p3.textContent = 'Population: ' + towns[i].currentPopulation;
                p4.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall;
                pic.setAttribute('src', "images/" + towns[i].photo);
                pic.setAttribute('alt', "A picture of " + towns[i].name);

                card.appendChild(cardData);
                card.appendChild(pic);
                cardData.appendChild(h2);
                cardData.appendChild(p1);
                cardData.appendChild(p2);
                cardData.appendChild(p3);
                cardData.appendChild(p4);
                

                document.querySelector('div.towns').appendChild(card);
                }
              }
            });
