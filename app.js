const keys = document.querySelectorAll("[data-key]");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomKey() {
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  randomKey.classList.add("jiggle");
}

document.addEventListener("keydown", (event) => {
  const keyPressed = event.key;
  const highlightedKey = document.querySelector(".jiggle");

  if (keyPressed.toUpperCase() === highlightedKey.dataset.key) {
    highlightedKey.classList.remove("jiggle");
    getRandomKey();
  }
});

keys.forEach((key) =>
  key.addEventListener("click", () => {
    const highlightedKey = document.querySelector(".jiggle");

    if (key.dataset.key === highlightedKey.dataset.key) {
      highlightedKey.classList.remove("jiggle");
      getRandomKey();
    }
  })
);

getRandomKey();
