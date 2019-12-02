const eventURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(eventURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const events = jsonObject['towns'];
        const townEvents = ["Soda Springs"]; 

        for (let i=0; i < events.length; i++) {
            if (townEvents.includes(events[i].name)) {
            let card = document.createElement('div');
            let cardData = document.createElement('div');
            let h2 = document.createElement('h2');
            let p1 = document.createElement('p');
            let pic = document.createElement('img');

            cardData.className = 'town-events';

            h2.textContent = 'Upcoming Events in ' + events[i].name;
            p1.textContent = events[i].events;
            pic.setAttribute('src', "images/Fresh-Mineral-Water.jpg");
            pic.setAttribute('alt', "A picture of someone scooping a cup of water from the soda geyser");

            card.appendChild(cardData);
            card.appendChild(pic);
            cardData.appendChild(h2);
            cardData.appendChild(p1);

            document.querySelector('div.events').appendChild(card);
        }
      }
    });