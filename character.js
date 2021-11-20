$(document).ready(function () {
  const characterData = [
    {
      name: "Gus Blois",
      image: "./resources/images/character/1.png",
      health: 80,
      attack: 20,
      defence: 30,
      dynamic: 50,
    },
    {
      name: "Jean-Luc Saxe",
      image: "./resources/images/character/2.png",
      health: 20,
      attack: 50,
      defence: 80,
      dynamic: 75,
    },
    {
      name: "Eder Canmore",
      image: "./resources/images/character/3.png",
      health: 25,
      attack: 80,
      defence: 90,
      dynamic: 65,
    },
    {
      name: "Odessa Stuart",
      image: "./resources/images/character/4.png",
      health: 50,
      attack: 20,
      defence: 80,
      dynamic: 20,
    },
    {
      name: "Elijah Plantagenet",
      image: "./resources/images/character/5.png",
      health: 70,
      attack: 20,
      defence: 50,
      dynamic: 80,
    },
    {
      name: "Elgin Stewart",
      image: "./resources/images/character/6.png",
      health: 10,
      attack: 60,
      defence: 20,
      dynamic: 90,
    },
    {
      name: "Barrin Denmark",
      image: "./resources/images/character/7.png",
      health: 25,
      attack: 60,
      defence: 80,
      dynamic: 85,
    },
    {
      name: "Pelle Lancaster",
      image: "./resources/images/character/8.png",
      health: 50,
      attack: 20,
      defence: 80,
      dynamic: 80,
    },
    {
      name: "Shawn Angevin",
      image: "./resources/images/character/9.png",
      health: 10,
      attack: 60,
      defence: 50,
      dynamic: 80,
    },
    {
      name: "Amory Wessex",
      image: "./resources/images/character/10.png",
      health: 10,
      attack: 20,
      defence: 60,
      dynamic: 90,
    },
    {
      name: "Amory Maureen",
      image: "./resources/images/character/11.png",
      health: 60,
      attack: 20,
      defence: 30,
      dynamic: 90,
    },
    {
      name: "Helen Beth",
      image: "./resources/images/character/12.png",
      health: 80,
      attack: 10,
      defence: 30,
      dynamic: 80,
    },
    {
      name: "Jenna Virginia",
      image: "./resources/images/character/13.png",
      health: 10,
      attack: 80,
      defence: 60,
      dynamic: 90,
    },
  ];
  const elements = characterData.map(
    (character) => `<div class="swiper-slide">
    <div class="character-wrapper">
      <div class="character-header">
        <div class="character-name uppercase">${character.name}</div>
        <div class="uppercase character-attr">
          <div class="character-attr-name">
            <div class="attr-name">health</div>
            <div class="progress-attr">
              <div class="progress-attr-inner" style="width: ${character.health}%"></div>
            </div>
          </div>
        </div>
        <div class="uppercase character-attr">
          <div class="character-attr-name">
            <div class="attr-name">attack</div>
            <div class="progress-attr">
              <div class="progress-attr-inner" style="width: ${character.attack}%"></div>
            </div>
          </div>
        </div>
        <div class="uppercase character-attr">
          <div class="character-attr-name">
            <div class="attr-name">defence</div>
            <div class="progress-attr">
              <div class="progress-attr-inner" style="width: ${character.defence}%"></div>
            </div>
          </div>
        </div>
        <div class="uppercase character-attr">
          <div class="character-attr-name">
            <div class="attr-name">dynamic</div>
            <div class="progress-attr">
              <div class="progress-attr-inner" style="width: ${character.dynamic}%"></div>
            </div>
          </div>
        </div>
      </div>
      <img src="${character.image}" />
    </div>
  </div>`
  );
  $(".swiper-wrapper").append(elements);

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // autoplay: {
    //   delay: 1500,
    //   disableOnInteraction: false,
    // },
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
    },
  });
});
