const aboutUs = {
    "TeamLead": {
        "name": "Justin Lowry",
        "image": "./img/Justin-Lowry.png",
        "about": "Justin enjoys hiking, exploring the outdoors, listening to and making music, and building cool things with code. He currently resides in Massachusetts with his girlfriend and two cats.",
    },
    "FrontEndArchitect": {
        "name": "Josh Timmons",
        "image": "./img/Josh-Timmons.png",
        "about": "I am an aspiring software developer seeking a career in the software field. I am currently a full time student at Lambda School’s Full Stack Web Development course.",
    },
    "BackEndArchitect": {
        "name": "Tyler Foreman",
        "image": "./img/Tyler-Foreman.png",
        "about": "My name is Tyler I'm from Charlotte, NC. Some of my hobbies include Hiking, Cooking, Gardening , as well as working on cars and helping renovate houses.",
    },
    "UXDesigner": {
        "name": "Justin Stevens",
        "image": "./img/Justin-Stevens.png",
        "about": "Justin is a UX Designer based out of San Francisco. He has a background in film and enjoys telling stories through design.",
    },
    "IOSDeveloper": {
        "name": "Sameera Leola",
        "image": "./img/Sameera-Leola.png",
        "about": "In iOS6, live in Chicago and enjoying our beautiful fall weather in May, Love reading: Sci-Fi and Fantasy new and old.  Like audiobooks more than movies.  I've read/listened to the Harry Potter series more times than I can count.",
    },
    "UIDev1": {
        "name": "Blair Reynolds",
        "image": "./img/Blair-Reynolds.png",
        "about": "I'm an adrenaline junkie that manages a small online community system alongside Lambda. Is a huge fan of Japanese tech.",
    },
    "UIDev2": {
        "name": "Kevin Sims",
        "image": "./img/Kevin-Sims.png",
        "about": "I'm Kevin, currently in Lambda Schools full time program. I enjoy playing video games, working out and playing basketball.",
    },
    "UIDev3": {
        "name": "Megan Miller",
        "image": "./img/Me.png",
        "about": "I’m Megan, a Web20 Full time student. I love to read, and play video games. I’m also super interested in design, and have been studying UX in my spare time."
    }
}

// Justin L
const leadName = document.createElement('h1');
leadName.classList.add('tab-item-title');
leadName.textContent = `${aboutUs["TeamLead"]["name"]}`;
const leadImage = document.createElement('img');
leadImage.setAttribute('src', `${aboutUs["TeamLead"]["image"]}`);
const leadAbout = document.querySelector(".tab-item[data-tab='1'] > .tab-item-content");
const leadPara = document.createElement('p');
leadPara.textContent = `${aboutUs["TeamLead"]["about"]}`;

leadAbout.prepend(leadName);
leadAbout.prepend(leadImage);
leadAbout.appendChild(leadPara);

// Josh
const feName = document.createElement('h1');
feName.classList.add('tab-item-title');
feName.textContent = `${aboutUs["FrontEndArchitect"]["name"]}`;
const feImage = document.createElement('img');
feImage.setAttribute('src', `${aboutUs["FrontEndArchitect"]["image"]}`);
const feAbout = document.querySelector(".tab-item[data-tab='2'] > .tab-item-content");
const fePara = document.createElement('p');
fePara.textContent = `${aboutUs["FrontEndArchitect"]["about"]}`;

feAbout.prepend(feName);
feAbout.prepend(feImage);
feAbout.appendChild(fePara);

// Tyler
const beName = document.createElement('h1');
beName.classList.add('tab-item-title');
beName.textContent = `${aboutUs["BackEndArchitect"]["name"]}`;
const beImage = document.createElement('img');
beImage.setAttribute('src', `${aboutUs["BackEndArchitect"]["image"]}`);
const beAbout = document.querySelector(".tab-item[data-tab='3'] > .tab-item-content");
const bePara = document.createElement('p');
bePara.textContent = `${aboutUs["BackEndArchitect"]["about"]}`;

beAbout.prepend(beName);
beAbout.prepend(beImage);
beAbout.appendChild(bePara);

// Justin S
const uxName = document.createElement('h1');
uxName.classList.add('tab-item-title');
uxName.textContent = `${aboutUs["UXDesigner"]["name"]}`;
const uxImage = document.createElement('img');
uxImage.setAttribute('src', `${aboutUs["UXDesigner"]["image"]}`);
const uxAbout = document.querySelector(".tab-item[data-tab='4'] > .tab-item-content");
const uxPara = document.createElement('p');
uxPara.textContent = `${aboutUs["UXDesigner"]["about"]}`;

uxAbout.prepend(uxName);
uxAbout.prepend(uxImage);
uxAbout.appendChild(uxPara);

// Sameera
const iosName = document.createElement('h1');
iosName.classList.add('tab-item-title');
iosName.textContent = `${aboutUs["IOSDeveloper"]["name"]}`;
const iosImage = document.createElement('img');
iosImage.setAttribute('src', `${aboutUs["IOSDeveloper"]["image"]}`)
const iosAbout = document.querySelector(".tab-item[data-tab='5'] > .tab-item-content");
const iosPara = document.createElement('p');
iosPara.textContent = `${aboutUs["IOSDeveloper"]["about"]}`;

iosAbout.prepend(iosName);
iosAbout.prepend(iosImage);
iosAbout.appendChild(iosPara);

// Blair 
const uiName1 = document.createElement('h1');
uiName1.classList.add('tab-item-title');
uiName1.textContent = `${aboutUs["UIDev1"]["name"]}`;
const uiImage1 = document.createElement('img');
uiImage1.setAttribute('src', `${aboutUs["UIDev1"]["image"]}`);
const uiAbout1 = document.querySelector(".tab-item[data-tab='6'] > .tab-item-content");
const uiPara1 = document.createElement('p');
uiPara1.textContent = `${aboutUs["UIDev1"]["about"]}`;

uiAbout1.prepend(uiName1);
uiAbout1.prepend(uiImage1);
uiAbout1.appendChild(uiPara1);

// Kevin
const uiName2 = document.createElement('h1');
uiName2.classList.add('tab-item-title');
uiName2.textContent = `${aboutUs["UIDev2"]["name"]}`;
const uiImage2 = document.createElement('img');
uiImage2.setAttribute('src', `${aboutUs["UIDev2"]["image"]}`);
const uiAbout2 = document.querySelector(".tab-item[data-tab='7'] > .tab-item-content");
const uiPara2 = document.createElement('p');
uiPara2.textContent = `${aboutUs["UIDev2"]["about"]}`;

uiAbout2.prepend(uiName2);
uiAbout2.prepend(uiImage2);
uiAbout2.appendChild(uiPara2);

// Megan
const uiName3 = document.createElement('h1');
uiName3.classList.add('tab-item-title');
uiName3.textContent = `${aboutUs["UIDev3"]["name"]}`;
const uiImage3 = document.createElement('img');
uiImage3.setAttribute('src', `${aboutUs["UIDev3"]["image"]}`);
const uiAbout3 = document.querySelector(".tab-item[data-tab='8'] > .tab-item-content");
const uiPara3 = document.createElement('p');
uiPara3.textContent = `${aboutUs["UIDev3"]["about"]}`;

uiAbout3.prepend(uiName3);
uiAbout3.prepend(uiImage3);
uiAbout3.appendChild(uiPara3);