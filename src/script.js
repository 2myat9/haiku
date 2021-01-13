const panels = document.querySelectorAll(".panel");
const poem0 = document.querySelector(`.poem[data-poem = "0"]`);
const poem0Title = document.querySelector(".poem-title[data-poem = '0']");
const poem0Author = document.querySelector(".poem-author[data-poem = '0']");

const poem1 = document.querySelector(`.poem[data-poem = "1"]`);
const poem1Title = document.querySelector(".poem-title[data-poem = '1']");
const poem1Author = document.querySelector(".poem-author[data-poem = '1']");

const poem2 = document.querySelector(`.poem[data-poem = "2"]`);
const poem2Title = document.querySelector(".poem-title[data-poem = '2']");
const poem2Author = document.querySelector(".poem-author[data-poem = '2']");

const poem3 = document.querySelector(`.poem[data-poem = "3"]`);
const poem3Title = document.querySelector(".poem-title[data-poem = '3']");
const poem3Author = document.querySelector(".poem-author[data-poem = '3']");

const poems = [
  {
    title: "A World of Dew",
    poem: `A world of dew, \n

    And within every dewdrop \n

    A world of struggle. \n`,
    author: "Kobayashi Issa",
  },
  {
    title: "Lighting One Candle",
    poem: `The light of a candle \n

    Is transferred to another candle—\n

    Spring twilight \n`,
    author: "Yosa Buson",
  },
  {
    title: "The Taste of Rain",
    poem: `The taste \n

    Of rain \n

    —Why kneel? \n`,
    author: "Jack Kerouac",
  },
  {
    title: "Haiku [for you]",
    poem: `love between us is \n

    speech and breath. loving you is \n

    a long river running. \n`,
    author: "Sonia Sanchez",
  },
];

const assignPlaceholder = (poemNum) => {
  return poems[poemNum].title;
};

// placeholders
const placeholders = document.querySelectorAll(".poem");

placeholders.forEach(
  (placeholder) =>
    (placeholder.innerText = assignPlaceholder(placeholder.dataset.poem))
);

const toggleOpen = (event) => {
  event.target.classList.toggle("open");
};

const toggleActive = (event) => {
  if (event.propertyName.includes("flex")) {
    event.target.classList.toggle("open-active");

    console.log(event.target);
    const poemNum = event.target.querySelector(".poem").dataset.poem;
    togglePoem(poemNum);
  }
};

const togglePoem = (poemNum) => {
  if (poemNum === "0") {
    if (poem0.innerText === `${poems[0].title}`) {
      poem0.innerText = poems[0].poem;
      poem0Title.innerText = poems[0].title;
      poem0Author.innerText = poems[0].author;
    } else {
      poem0.innerText = `${poems[0].title}`;
    }
  } else if (poemNum === "1") {
    if (poem1.innerText === `${poems[1].title}`) {
      poem1.innerText = poems[1].poem;
      poem1Title.innerText = poems[1].title;
      poem1Author.innerText = poems[1].author;
    } else {
      poem1.innerText = `${poems[1].title}`;
    }
  } else if (poemNum === "2") {
    if (poem2.innerText === `${poems[2].title}`) {
      poem2.innerText = poems[2].poem;
      poem2Title.innerText = poems[2].title;
      poem2Author.innerText = poems[2].author;
    } else {
      poem2.innerText = `${poems[2].title}`;
    }
  } else if (poemNum === "3") {
    if (poem3.innerText === `${poems[3].title}`) {
      poem3.innerText = poems[3].poem;
      poem3Title.innerText = poems[3].title;
      poem3Author.innerText = poems[3].author;
    } else {
      poem3.innerText = `${poems[3].title}`;
    }
  }
};

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));

panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
