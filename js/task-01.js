const categoriesList = document.getElementById('categories');

if (!categoriesList) {
  throw new Error("categoriesList not found");
}

const categoryItems = categoriesList.querySelectorAll('li.item');
console.log('Number of categories: ' + categoryItems.length);

if (!categoryItems.length) {
  throw new Error("List length = 0!");
}

categoryItems.forEach(categoryItem => {
  const h2 = categoryItem.querySelector('h2');

  if (!h2) {
    console.error('h2 in foreach not found');
    return;
  }

  const categoryName = h2.textContent;
  const categoryElements = categoryItem.querySelectorAll('li').length;

  console.log('Category: ' + categoryName);
  console.log('Elements: ' + categoryElements);
});
