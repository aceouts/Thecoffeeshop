// toggle search bar
function toggleSearch() {
  const search = document.querySelector(".search");
  search.classList.toggle("active");
}

// toggle Flip effect

function toggleFlip() {
  const imgBox = document.querySelector(".imgBox");
  const btn = document.querySelector(".btn");
  imgBox.classList.toggle("active");
  btn.classList.toggle("active");
}

// SWAP THE MAIN IMAGE

function changeImg(img) {
  const foodImg = document.querySelector(".food-img");
  foodImg.src = `./${img}`;
}
