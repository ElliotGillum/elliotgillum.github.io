'use strict'

/*US GOVT API KEY*/
const GOVTAPI = 'jeX4SZEmzUZFbvqo1qyhnNFEENI3itYyAXO5oCC1';

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

async function loadBackground() {
    let data = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${GOVTAPI}`)
        .then((stuff) => {
            return stuff.json();
        });

    let { date, explanation, hdurl, media_type, service_version, title, url } = data;

    let body = document.querySelector('body');
    let img = document.createElement('img');
    img.src = url;

    body.style.backgroundImage = `url(${hdurl})`;
    body.style.backgroundSize = 'contain';
}

window.addEventListener('load', visitInterval);
window.addEventListener('load', loadBackground);