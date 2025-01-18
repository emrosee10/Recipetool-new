const breakfastMeals = [
    { name: "Oatmeal with Berries", calories: 300, highlights: ["High in fiber", "Good source of antioxidants"] },
    { name: "Avocado Toast", calories: 350, highlights: ["Healthy fats", "Rich in vitamins"] },
    { name: "Greek Yogurt with Nuts", calories: 250, highlights: ["Protein-rich", "Good for gut health"] },
    { name: "Egg and Veggie Scramble", calories: 400, highlights: ["High in protein", "Packed with nutrients"] },
    { name: "Smoothie Bowl", calories: 350, highlights: ["Rich in vitamins", "Refreshing"] },
    { name: "Chia Pudding", calories: 200, highlights: ["High in omega-3", "Good for digestion"] },
    { name: "Whole Wheat Pancakes", calories: 300, highlights: ["High in fiber", "Good for energy"] },
    { name: "Cottage Cheese with Pineapple", calories: 250, highlights: ["High in protein", "Boosts metabolism"] },
    { name: "Almond Butter on Whole Wheat Toast", calories: 280, highlights: ["Rich in healthy fats", "Boosts energy"] },
    { name: "Muesli with Milk", calories: 320, highlights: ["High in fiber", "Good for digestion"] }
];

const lunchMeals = [
    { name: "Grilled Chicken Salad", calories: 400, highlights: ["High in protein", "Rich in vegetables"] },
    { name: "Quinoa and Roasted Veggies", calories: 350, highlights: ["High in fiber", "Gluten-free"] },
    { name: "Turkey Wrap", calories: 350, highlights: ["High in protein", "Low in fat"] },
    { name: "Vegetable Stir-fry with Brown Rice", calories: 300, highlights: ["Low-calorie", "High in fiber"] },
    { name: "Grilled Salmon with Asparagus", calories: 450, highlights: ["Omega-3 rich", "High in protein"] },
    { name: "Lentil Soup", calories: 250, highlights: ["High in fiber", "Great for digestion"] },
    { name: "Tofu Stir Fry", calories: 300, highlights: ["Vegetarian", "High in protein"] },
    { name: "Chicken Caesar Salad", calories: 500, highlights: ["High in protein", "Rich in greens"] },
    { name: "Sweet Potato and Black Bean Salad", calories: 400, highlights: ["Rich in fiber", "Good for digestion"] },
    { name: "Tuna Salad", calories: 350, highlights: ["Rich in omega-3", "High in protein"] }
];

const dinnerMeals = [
    { name: "Grilled Chicken with Quinoa", calories: 450, highlights: ["High in protein", "Nutrient-packed"] },
    { name: "Baked Salmon with Sweet Potato", calories: 500, highlights: ["Rich in omega-3", "High in protein"] },
    { name: "Vegetable Curry", calories: 350, highlights: ["Vegan", "Rich in antioxidants"] },
    { name: "Steak with Broccoli", calories: 500, highlights: ["High in protein", "Great for muscle-building"] },
    { name: "Spaghetti with Tomato Sauce", calories: 400, highlights: ["Vegetarian", "Low-fat"] },
    { name: "Chicken Tacos", calories: 400, highlights: ["High in protein", "Customizable"] },
    { name: "Stuffed Bell Peppers", calories: 350, highlights: ["High in fiber", "Nutrient-rich"] },
    { name: "Beef Stir Fry", calories: 500, highlights: ["High in protein", "Packed with vegetables"] },
    { name: "Lentil and Veggie Stew", calories: 300, highlights: ["High in fiber", "Rich in protein"] },
    { name: "Grilled Shrimp with Vegetables", calories: 400, highlights: ["High in protein", "Low-calorie"] }
];

function displayMeals() {
    const breakfastContainer = document.getElementById("breakfast-meals");
    const lunchContainer = document.getElementById("lunch-meals");
    const dinnerContainer = document.getElementById("dinner-meals");

    function createMealElement(meal) {
        const mealElement = document.createElement("div");
        mealElement.classList.add("meal");
        mealElement.innerHTML = `
            <h3>${meal.name} - ${meal.calories} calories</h3>
            <ul>
                ${meal.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
            </ul>
            <button>Select Meal</button>
        `;
        return mealElement;
    }

    breakfastMeals.forEach(meal => breakfastContainer.appendChild(createMealElement(meal)));
    lunchMeals.forEach(meal => lunchContainer.appendChild(createMealElement(meal)));
    dinnerMeals.forEach(meal => dinnerContainer.appendChild(createMealElement(meal)));
}

window.onload = displayMeals;
