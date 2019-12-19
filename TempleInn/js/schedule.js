const scheduleURL = 'https://daciashu.github.io/TempleInn/schedule.json';

fetch(scheduleURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const closed = jsonObject['closures'];
        const closedTemple = ["Paris"]; 

        for (let i=0; i < closed.length; i++) {
            if (closedTemple.includes(closed[i].name)) {
                let card = document.createElement('div');
                let cardData = document.createElement('div');
                let p1 = document.createElement('span');
                let p2 = document.createElement('span');
                let p3 = document.createElement('span');
                let p4 = document.createElement('span');
                let p5 = document.createElement('span');
                let p6 = document.createElement('span');
                let p7 = document.createElement('span');
                let p8 = document.createElement('span');
    
                cardData.className = 'temple-closures';
    
                p1.textContent = closed[i].closed[0];
                p2.textContent = closed[i].closed[1];
                p3.textContent = closed[i].closed[2];
                p4.textContent = closed[i].closed[3];
                p5.textContent = closed[i].closed[4];
                p6.textContent = closed[i].closed[5];
                p7.textContent = closed[i].closed[6];
                p8.textContent = closed[i].closed[7];
                

            card.appendChild(cardData);
            cardData.appendChild(p1);
            cardData.appendChild(p2);
            cardData.appendChild(p3);
            cardData.appendChild(p4);
            cardData.appendChild(p5);
            cardData.appendChild(p6);
            cardData.appendChild(p7);
            cardData.appendChild(p8);

            document.querySelector('div.paris-closures').appendChild(card);
        }
      }
    });