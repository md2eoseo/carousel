"use strict";
const IMAGE_NUM = 5;

const img = document.querySelector(".carousel img");

function getSlideNumber() {
  const num = img.dataset.slide;
  return Number(num);
}

function onClickToLeft() {
  const current_num = getSlideNumber();
  const next_num = (current_num - 1 + IMAGE_NUM) % IMAGE_NUM;
  img.dataset.slide = next_num;
  img.src = `./assets/images/${next_num}.jpg`;
  console.log(next_num);
}

function onClickToRight() {
  const current_num = getSlideNumber();
  const next_num = (current_num + 1 + IMAGE_NUM) % IMAGE_NUM;
  img.dataset.slide = next_num;
  img.src = `./assets/images/${next_num}.jpg`;
  console.log(next_num);
}

function init() {
  document.querySelector(".toLeft").addEventListener("click", onClickToLeft);
  document.querySelector(".toRight").addEventListener("click", onClickToRight);
}

init();
