const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
            console.table(jsonObject);
            for (let i = 0; i < towns.length; i++) {
                if (name = "Fish Haven") {
                    
                }
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let pic = document.createElement('img');

                h2.textContent = towns[i].name + ' ' + prophets[i].lastname;
                p1.textContent = 'Date of Birth: ' + prophets[i].birthdate;
                p2.textContent = 'Place of Birth: ' + prophets[i].birthplace;
                pic.setAttribute('src', prophets[i].imageurl);
                pic.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i].order);


                card.appendChild(h2);
                card.appendChild(p1);
                card.appendChild(p2);
                card.appendChild(pic);

                document.querySelector('div.cards').appendChild(card);
            }
            });
