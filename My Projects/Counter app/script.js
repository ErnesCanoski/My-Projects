const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');
const countDisplay = document.getElementById('count');

let count = 0;

function updateCount() {
  countDisplay.textContent = count;
}

decrementButton.addEventListener('click', () => {
  count--;
  updateCount();
});

incrementButton.addEventListener('click', () => {
  count++;
  updateCount();
});

updateCount();
