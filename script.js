const recipeForm = document.getElementById('recipe-form');
const recipeOutput = document.getElementById('recipe-output');
const outputSection = document.getElementById('output-section');

const apiKey = "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"; // Your Hugging Face API Key
const apiUrl = "https://api-inference.huggingface.co/models/openai-community/gpt2";

// Function to call the API
async function fetchRecipe(ingredients, style) {
  const prompt = `Create a ${style} recipe with these ingredients: ${ingredients}. Provide step-by-step instructions.`;

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ inputs: prompt })
  });

  if (!response.ok) {
    throw new Error("Failed to fetch recipe. Please try again.");
  }

  const data = await response.json();
  return data[0].generated_text;
}

// Handle form submission
recipeForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const ingredients = document.getElementById('ingredients').value;
  const style = document.getElementById('style').value;

  if (!ingredients.trim()) {
    alert("Please enter ingredients!");
    return;
  }

  recipeOutput.textContent = "Generating your recipe...";
  outputSection.classList.remove('hidden');

  try {
    const recipe = await fetchRecipe(ingredients, style);
    recipeOutput.textContent = recipe;
  } catch (error) {
    recipeOutput.textContent = error.message;
  }
});
