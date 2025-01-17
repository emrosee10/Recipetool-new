const recipeForm = document.getElementById('recipe-form');
const recipeOutput = document.getElementById('recipe-output');
const outputSection = document.getElementById('output-section');

// MealDB API Endpoint for categories (can be changed to another endpoint)
const apiUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

async function fetchRecipe(ingredients) {
  const ingredientList = ingredients.split(",").map(ingredient => ingredient.trim()).join(",");
  const response = await fetch(`${apiUrl}${ingredientList}`);
  
  if (!response.ok) {
    throw new Error("Failed to fetch recipe. Please try again.");
  }

  const data = await response.json();
  return data.meals || [];  // Return the list of meals or empty if none
}

// Handle form submission
recipeForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const ingredients = document.getElementById('ingredients').value;
  
  if (!ingredients.trim()) {
    alert("Please enter ingredients!");
    return;
  }

  recipeOutput.textContent = "Fetching your recipe...";
  outputSection.classList.remove('hidden');

  try {
    const recipes = await fetchRecipe(ingredients);
    if (recipes.length > 0) {
      let recipeList = "<ul>";
      recipes.forEach(recipe => {
        recipeList += `<li><strong>${recipe.strMeal}</strong><br><a href="${recipe.strSource}" target="_blank">See Recipe</a></li>`;
      });
      recipeList += "</ul>";
      recipeOutput.innerHTML = recipeList;
    } else {
      recipeOutput.textContent = "No recipes found. Try again!";
    }
  } catch (error) {
    recipeOutput.textContent = error.message;
  }
});
