const categoriesList = document.querySelector("#categories");
console.log("Number of categories:", categoriesList.children.length);
console.log('')

const categoryItem = categoriesList.querySelectorAll(".item");
const categoryItemArray = [...categoryItem];

categoryItemArray.forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.children.length);
  console.log('')
});
