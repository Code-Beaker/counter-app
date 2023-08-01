let count = 0;

const countEl = document.querySelector("#count-el");
const addButton = document.querySelector("#addBtn");
const subButton = document.querySelector("#subBtn");
const resetButton = document.querySelector("#resetBtn");

addButton.addEventListener("click", () => {
  count++;
  countEl.textContent = count;

  if (count > 0) {
    countEl.style.color = "green";
  }

  if (count === 0) {
    countEl.style.color = "black";
  }
});

subButton.addEventListener("click", () => {
  count--;
  countEl.textContent = count;

  if (count < 0) {
    countEl.style.color = "red";
  }

  if (count === 0) {
    countEl.style.color = "black";
  }
});

resetButton.addEventListener("click", () => {
  count = 0;
  countEl.textContent = count;

  if (count === 0) {
    countEl.style.color = "black";
  }
});
