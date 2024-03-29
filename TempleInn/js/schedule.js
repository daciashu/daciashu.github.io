//*Paris
const parisURL = 'https://daciashu.github.io/TempleInn/schedule.json';

fetch(parisURL)
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
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let p4 = document.createElement('p');
                let p5 = document.createElement('p');
                let p6 = document.createElement('p');
                let p7 = document.createElement('p');
                let p8 = document.createElement('p');
    
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

//*Toronto
const torontoURL = 'https://daciashu.github.io/TempleInn/schedule.json';

fetch(torontoURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const closed = jsonObject['closures'];
        const closedTemple = ["Toronto"]; 

        for (let i=0; i < closed.length; i++) {
            if (closedTemple.includes(closed[i].name)) {
                let card = document.createElement('div');
                let cardData = document.createElement('div');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let p4 = document.createElement('p');
                let p5 = document.createElement('p');
                let p6 = document.createElement('p');
                let p7 = document.createElement('p');
                let p8 = document.createElement('p');
    
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

            document.querySelector('div.toronto-closures').appendChild(card);
        }
      }
    });



//*Madrid
const madridURL = 'https://daciashu.github.io/TempleInn/schedule.json';

fetch(madridURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const closed = jsonObject['closures'];
        const closedTemple = ["Madrid"]; 

        for (let i=0; i < closed.length; i++) {
            if (closedTemple.includes(closed[i].name)) {
                let card = document.createElement('div');
                let cardData = document.createElement('div');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let p4 = document.createElement('p');
                let p5 = document.createElement('p');
                let p6 = document.createElement('p');
                let p7 = document.createElement('p');
                let p8 = document.createElement('p');
    
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

            document.querySelector('div.madrid-closures').appendChild(card);
        }
      }
    });



//*Rome
const romeURL = 'https://daciashu.github.io/TempleInn/schedule.json';

fetch(romeURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const closed = jsonObject['closures'];
        const closedTemple = ["Rome"]; 

        for (let i=0; i < closed.length; i++) {
            if (closedTemple.includes(closed[i].name)) {
                let card = document.createElement('div');
                let cardData = document.createElement('div');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let p4 = document.createElement('p');
                let p5 = document.createElement('p');
                let p6 = document.createElement('p');
                let p7 = document.createElement('p');
                let p8 = document.createElement('p');
    
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

            document.querySelector('div.rome-closures').appendChild(card);
        }
      }
    });



//*Kyiv
const kyivURL = 'https://daciashu.github.io/TempleInn/schedule.json';

fetch(kyivURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const closed = jsonObject['closures'];
        const closedTemple = ["Kyiv"]; 

        for (let i=0; i < closed.length; i++) {
            if (closedTemple.includes(closed[i].name)) {
                let card = document.createElement('div');
                let cardData = document.createElement('div');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let p4 = document.createElement('p');
                let p5 = document.createElement('p');
                let p6 = document.createElement('p');
                let p7 = document.createElement('p');
                let p8 = document.createElement('p');
    
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

            document.querySelector('div.kyiv-closures').appendChild(card);
        }
      }
    });
