const symbols = ['A','A','B','B','C','C','D','D'];
symbols.sort(() => 0.5 - Math.random());

let first = null;
let lock = false;

const game = document.getElementById("game");

symbols.forEach(sym => {
  const card = document.createElement("div");
  card.className = "card";
  card.textContent = "?";

  card.onclick = () => {
    if (lock || card.textContent !== "?") return;
    card.textContent = sym;

    if (!first) {
      first = card;
    } else {
      lock = true;
      setTimeout(() => {
        if (first.textContent !== card.textContent) {
          first.textContent = "?";
          card.textContent = "?";
        }
        first = null;
        lock = false;
      }, 800);
    }
  };

  game.appendChild(card);
});