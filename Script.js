const ingredients = [];

function addIngredient() {
  const input = document.getElementById('ingredientInput');
  if (input.value) {
    ingredients.push(input.value);
    input.value = '';
    displayIngredients();
  }
}

function displayIngredients() {
  const list = document.getElementById('ingredientList');
  list.innerHTML = '';
  ingredients.forEach(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    list.appendChild(li);
  });
}

function findRecipes() {
  alert(`Finding recipes for: ${ingredients.join(', ')}`);
}