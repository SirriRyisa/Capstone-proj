const openMenu = document.querySelector('.toggle');
const menu = document.querySelector('.second-nav');
const closeMenu = document.querySelector('.close');
openMenu.addEventListener('click', () => {
  menu.classList.remove('hide-menu');
});

closeMenu.addEventListener('click', () => {
  menu.classList.add('hide-menu');
});

const speakerMembers = [
  {
    image: 'images/Benimg.jpeg',
    name: 'Ben Ghana',
    title: 'Founder of the SSAMB ',
    brief: 'Tech is a leading industry in the world. It comes with magical powers and well cherished when women to invade the tech this space',
  },
  {
    image: 'images/Benimg.jpeg',
    name: 'Steph Bahamas',
    title: 'Co-Founder of the SSAMB ',
    brief: 'Ben Ghana founder of the SSAMB community. Putting all efforts to see girls are well oriented about tech. Tech is a master piece for ladies a well valued craft',
  },
  {
    image: 'images/Benimg.jpeg',
    name: 'Jane Cameroon',
    title: 'Guest',
    brief: 'The vision, the goal, the technologies, the growth every girl child should be a part of it. let us make tech a comfort place for every child',
  },
  {
    image: 'images/Benimg.jpeg',
    name: 'Steph Bahamas',
    title: 'Co-Founder of the SSAMB ',
    brief: 'Ben Ghana founder of the SSAMB community. Putting all efforts to see girls are well oriented about tech. Tech is a master piece for ladies a well valued craft',
  },
  {
    image: 'images/Benimg.jpeg',
    name: 'Jane Cameroon',
    title: 'Guest',
    brief: 'The vision, the goal, the technologies, the growth every girl child should be a part of it. let us make tech a comfort place for every child',
  },
  {
    image: 'images/Benimg.jpeg',
    name: 'Precillia Cameroon',
    title: 'Guest',
    brief: 'The vision, the goal, the technologies, the growth every girl child should be a part of it. let us make tech a comfort place for every child',
  },
];

let speakersHTML = '';

speakerMembers.forEach((speaker) => {
  speakersHTML
    += `
    <div class="speakers">
      <img class="images" src="${speaker.image}" alt="speakers imge">
      <div class="column">
        <h5>${speaker.name}</h5>
        <h4>${speaker.title}</h4>
        <hr>
        <p>${speaker.brief}</p>
      </div>
    </div>
    `;
});

const speakerContainer = document.querySelector('.speaker-container');

speakerContainer.innerHTML = speakersHTML;
