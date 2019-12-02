const eventURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(eventURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        const townEvents = ["Fish Haven"]; 

        for (let i=0; i < towns.length; i++) {
            if (townEvents.includes(towns[i].name)) {
            let card = document.createElement('article');
            let cardData = document.createElement('section');
            let h2 = document.createElement('h2');
            let p1 = document.createElement('p');
            let pic = document.createElement('img');

            cardData.className = 'town-events';

            h2.textContent = 'Upcoming Events in' + towns[i].name;
            p1.textContent = towns[i].events;
            pic.setAttribute('src', "images/lightTree.jpg" + towns[i].photo);
            pic.setAttribute('alt', "The Town's Lit Christmas Tree at Night");

            card.appendChild(cardData);
            card.appendChild(pic);
            cardData.appendChild(h2);
            cardData.appendChild(p1);

            document.querySelector('div.towns').appendChild(card);
        }
      }
    });