const categoryEl = document.querySelector("#categories");

const linkEl = categoryEl.querySelectorAll(".item");
console.log(`Number of categories: ${linkEl.length}`);

linkEl.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
