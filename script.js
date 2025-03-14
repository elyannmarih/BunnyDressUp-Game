function toggleClothes(clothesId) {
  let clothes = document.getElementById(clothesId);
  if (clothes.style.display === "none") {
    clothes.style.display = "block";
  } else {
    clothes.style.display = "none";
  }
}

function reset() {
  let clothes = document.querySelectorAll("#clothes-overlay img");
  clothes.forEach((item) => (item.style.display = "none"));
}

function playAudio() {
  let audio = document.getElementById("myAudio");
  let music = document.getElementById("music");

  if (audio.paused) {
    audio.play();
    music.innerHTML = "Pause";
  } else {
    audio.pause();
    music.innerHTML = "Music";
  }
}

function popAudio() {
  let audio = document.getElementById("myAudio");
  let pop = document.getElementById("pop");

  if (!audio.paused) {
    pop.play();
  }
}

function saveCharacter() {
  let characterContainer = document.querySelector(".character-container");

  if (window.innerWidth < 500) {
    characterContainer.style.width = "100vw";
    characterContainer.style.height = "100vh";
  }

  setTimeout(() => {
    html2canvas(characterContainer, {
      backgroundColor: null,
      scale: window.devicePixelRatio,
    }).then((canvas) => {
      let link = document.createElement("a");
      link.download = "character.png";
      link.href = canvas.toDataURL("image/png");
      link.click();

      if (window.innerWidth < 500) {
        characterContainer.style.width = "";
        characterContainer.style.height = "";
      }
    });
  }, 100);
}
