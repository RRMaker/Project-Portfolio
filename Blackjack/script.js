// Build and shuffle deck
const suits = [
  { name: 'hearts',   symbol: '♥', color: 'red'   },
  { name: 'diamonds', symbol: '♦', color: 'red'   },
  { name: 'clubs',    symbol: '♣', color: 'black' },
  { name: 'spades',   symbol: '♠', color: 'black' }
];
const values = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

let deck = [];
for (let s of suits) {
  for (let v of values) {
    deck.push({ suit: s.symbol, value: v, color: s.color });
  }
}

let total = 0;

function getNumericValue(card) {
  if (card.value === 'A')   return 1;
  if (['J','Q','K'].includes(card.value)) return 10;
  return parseInt(card.value, 10);
}

shuffle(deck);

// DOM refs
const deckEl = document.getElementById('deck');
const countEl = document.getElementById('count');
const container = document.getElementById('card-container');

deckEl.addEventListener('click', drawCard);

function drawCard() {
  if (!deck.length) return;
  const card = deck.pop();
  countEl.textContent = deck.length;

  const num = getNumericValue(card);
  total += num;

  // **2) check for bust**
  if (total > 21) {
    // clear all cards and show BUST
    container.innerHTML = `<div class="bust">BUST!</div>`;
    // disable further drawing
    deckEl.style.pointerEvents = 'none';
    return;
  }

  const cardEl = document.createElement('div');
  cardEl.className = `card ${card.color}`;
  cardEl.innerHTML = `
    <div class="top">${card.value}${card.suit}</div>
    <div class="middle"></div>
    <div class="bottom">${card.value}${card.suit}</div>
  `;
  container.appendChild(cardEl);

  if (!deck.length) {
    deckEl.style.opacity = 0.5;
    deckEl.style.pointerEvents = 'none';
  }
}

// Fisher–Yates shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
