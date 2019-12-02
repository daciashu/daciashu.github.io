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
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let pic = document.createElement('img');

            cardData.className = 'town-events';

            h2.textContent = 'Upcoming Events in ' + events[i].name;
            p1.textContent = events[i].events[0];
            p2.textContent = events[i].events[1];
            p3.textContent = events[i].events[2];
            pic.setAttribute('src', "images/Fresh-Mineral-Water.jpg");
            pic.setAttribute('alt', "A picture of someone scooping a cup of water from the soda geyser");

            card.appendChild(cardData);
            card.appendChild(pic);
            cardData.appendChild(h2);
            cardData.appendChild(p1);
            cardData.appendChild(p2);
            cardData.appendChild(p3);

            document.querySelector('div.events').appendChild(card);
        }
      }
    });