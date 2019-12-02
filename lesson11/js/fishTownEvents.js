const eventURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(eventURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const events = jsonObject['towns'];
        const townEvents = ["Fish Haven"]; 

        for (let i=0; i < towns.length; i++) {
            if (townEvents.includes(towns[i].name)) {
                let card = document.createElement('div');
                let cardData = document.createElement('div');
                let h2 = document.createElement('h2');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let p4 = document.createElement('p');
                let pic = document.createElement('img');
    
                cardData.className = 'town-events';
    
                h2.textContent = 'Upcoming Events in ' + events[i].name;
                p1.textContent = events[i].events[0];
                p2.textContent = events[i].events[1];
                p3.textContent = events[i].events[2];
                p4.textContent = events[i].events[3];
            pic.setAttribute('src', "images/lightTree.jpg");
            pic.setAttribute('alt', "The Town's Lit Christmas Tree at Night");

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