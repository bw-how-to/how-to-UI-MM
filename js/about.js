const aboutUs = {
    "TeamLead": {
        "name": "Justin Lowry",
        "image": "./img/Justin-Lowry.png",
        "about": "a couple sentences here",
    },
    "FrontEndArchitect": {
        "name": "Josh Timmons",
        "image": "./img/Josh-Timmons.png",
        "about": "a couple sentences here",
    },
    "BackEndArchitect": {
        "name": "Tyler Foreman",
        "image": "./img/Tyler-Foreman.png",
        "about": "a couple sentences here",
    },
    "UXDesigner": {
        "name": "Justin Stevens",
        "image": "./img/Justin-Stevens.png",
        "about": "a couple sentences here",
    },
    "IOSDeveloper": {
        "name": "Sameera Leola",
        "image": "./img/Sameera-Leola.png",
        "about": "In iOS6, live in Chicago and enjoying our beautiful fall weather in May, Love reading: Sci-Fi and Fantasy new and old.  Like audiobooks more than movies.  I've read/listened to the Harry Potter series more times than I can count.",
    },
    "UIDev1": {
        "name": "Blair Reynolds",
        "image": "./img/Blair-Reynolds.png",
        "about": "a couple sentences here",
    },
    "UIDev2": {
        "name": "Kevin Sims",
        "image": "./img/Kevin-Sims.png",
        "about": "a couple sentences here",
    },
    "UIDev3": {
        "name": "Megan Miller",
        "image": "./img/Me.png",
        "about": "a couple sentences here"
    }
}
 
const iosName = document.createElement('h1');
iosName.classList.add('tab-item-title');
iosName.textContent = `${aboutUs["IOSDeveloper"]["name"]}`;
const iosImage = document.createElement('img');
iosImage.setAttribute('src', `${aboutUs["IOSDeveloper"]["image"]}`)
const iosAbout = document.querySelector(".tab-item[data-tab='5'] > .tab-item-content");
const para = document.createElement('p');
para.textContent = `${aboutUs["IOSDeveloper"]["about"]}`;

iosAbout.prepend(iosName);
iosAbout.prepend(iosImage);
iosAbout.appendChild(para);


// $(`<p>${aboutUs["IOSDeveloper"]["about"]}</p>`).appendTo('tab-item[data-tab=5] > tab-item-content');