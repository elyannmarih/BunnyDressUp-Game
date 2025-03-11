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
    music.innerHTML = "Play Music";
  }
}

function saveCharacter() {
  let characterContainer = document.querySelector(".character-container");

  html2canvas(characterContainer, {
    backgroundColor: null,
    scale: 2,
  }).then((canvas) => {
    let link = document.createElement("a");
    link.download = "character.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}
