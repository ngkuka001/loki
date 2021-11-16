$(document).ready(function () {
  const characterData = [
    {
      name: "Character 1",
      image: "./resources/images/character/1.png",
      health: 80,
      attack: 20,
      defence: 30,
      dynamic: 50,
    },
    {
      name: "Character 2",
      image: "./resources/images/character/2.png",
      health: 80,
      attack: 20,
      defence: 30,
      dynamic: 50,
    },
    {
      name: "Character 3",
      image: "./resources/images/character/3.png",
      health: 80,
      attack: 20,
      defence: 30,
      dynamic: 50,
    },
    {
      name: "Character 4",
      image: "./resources/images/character/4.png",
      health: 80,
      attack: 20,
      defence: 30,
      dynamic: 50,
    },
    {
      name: "Character 5",
      image: "./resources/images/character/5.png",
      health: 80,
      attack: 20,
      defence: 30,
      dynamic: 50,
    },
    {
      name: "Character 6",
      image: "./resources/images/character/6.png",
      health: 80,
      attack: 20,
      defence: 30,
      dynamic: 50,
    },
    {
      name: "Character 7",
      image: "./resources/images/character/7.png",
      health: 80,
      attack: 20,
      defence: 30,
      dynamic: 50,
    },
  ];
  const elements = characterData.map(
    (character) => `<div class="swiper-slide">
    <div class="character-wrapper">
        <div class="character-header">
          <div class="character-name uppercase">${character.name}</div>
          <div class="uppercase character-attr">
            <div class="character-attr-name"><div class="attr-name">health</div> <div class="progress"><div class="progress-inner"></div></div></div>
          </div>
          <div class="uppercase character-attr"><div class="character-attr-name"><div class="attr-name">attack</div> <div class="progress"><div class="progress-inner"></div></div></div></div>
          <div class="uppercase character-attr"><div class="character-attr-name"><div class="attr-name">defence</div> <div class="progress"><div class="progress-inner"></div></div></div></div>
          <div class="uppercase character-attr"><div class="character-attr-name"><div class="attr-name">dynamic</div> <div class="progress"><div class="progress-inner"></div></div></div></div>
        </div>
        <img src=${character.image} />
    </div>
  </div>`
  );
  $(".swiper-wrapper").append(elements);

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    loop: true,
    // spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
