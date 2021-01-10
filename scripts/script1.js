'use strict'

function visitInterval() {
    let para = document.createElement('p');
    let main = document.querySelector('footer');
    let current = Date.now();
    let previous = window.localStorage.visited;
    let visits = window.localStorage.visits;

    if (previous && visits) {
        para.textContent = `Seconds since last visit: ${(current - previous) / 1000}.\
                            You have visited ${visits++} times.`;
        window.localStorage.visited = Date.now();
        window.localStorage.visits = visits;

        
    }
    else {
        window.localStorage.setItem('visited', Date.now());
        window.localStorage.setItem('visits', 1);
        para.textContent = `This is your first visit!`;
    }

    main.appendChild(para);
}

window.addEventListener('load', visitInterval);

async function getAstros() {
    let jsonData =
        await fetch('http://api.open-notify.org/astros.json')
            .then(response => { return response.json() });
    let main = document.querySelector('main');
    let { message, number, people } = jsonData;

    if (message === 'success') {
        for (let person of people) {
            let para = document.createElement('p');

            let { craft, name } = person;
            para.textContent = `${name} is currently on the ${craft}.`;
            main.appendChild(para);
        }

    } else {
        new Error('Unable to get current astronauts.');
    }


}


getAstros();