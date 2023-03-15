function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const boxesDiv = document.querySelector("#boxes");

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

function createBoxes(amount) {
  let currentDivSize = 30;
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    boxes.push(document.createElement("div"));

    if (i === 0) {
      boxes[i].style.width = `${currentDivSize}px`;
      boxes[i].style.height = `${currentDivSize}px`;
      boxes[i].style.backgroundColor = `${getRandomHexColor()}`;
    } else {
      boxes[i].style.width = `${(currentDivSize += 10)}px`;
      boxes[i].style.height = `${currentDivSize}px`;
      boxes[i].style.backgroundColor = `${getRandomHexColor()}`;
    }
  }

  boxesDiv.append(...boxes);
}

const destroyBoxes = () => {
  boxesDiv.innerHTML = "";
};

createBtn.addEventListener("click", () => {
  console.log(Number(input.value));
  if (Number(input.value <= 100)) {
    createBoxes(Number(input.value))
  } else {
    alert("Too much, motherfucker!");
  }
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
  input.value = null;
});
