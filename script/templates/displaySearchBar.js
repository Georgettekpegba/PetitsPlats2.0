import { recipeTemplate } from "./recipeTemplate.js";

export function recipesFilterTemplate(recipes) {
    let filteredRecipes = [...recipes]; // Store filtered recipes

    function filterRecipes(searchQuery, selectedFilters) {
        filteredRecipes = recipes.filter(recipe => {
            // Convert searchQuery to lowercase
            const query = searchQuery.toLowerCase().trim();

            // Check if recipe name matches the search query
            const nameMatch = recipe.name.toLowerCase().includes(query);

            // Check if any ingredient matches the search query
            const ingredientMatch = recipe.ingredients.some(ingredient =>
                ingredient.ingredient.toLowerCase().includes(query)
            );

            // Check if appliance matches
            const applianceMatch = recipe.appliance.toLowerCase().includes(query);

            // Check if any utensil matches
            const utensilMatch = recipe.ustensils.some(utensil =>
                utensil.toLowerCase().includes(query)
            );

            // Check if recipe matches selected filters
            const filterMatch = selectedFilters.every(filter =>
                recipe.ingredients.some(ing => ing.ingredient.toLowerCase() === filter) ||
                recipe.appliance.toLowerCase() === filter ||
                recipe.ustensils.includes(filter)
            );

            // Return true if any condition matches
            return (nameMatch || ingredientMatch || applianceMatch || utensilMatch) && filterMatch;
        });

        displayFilteredRecipes();
    }

    function displayFilteredRecipes() {
        const recipesContainer = document.querySelector(".recipes-cards");
        recipesContainer.innerHTML = ""; // Clear previous results

        if (filteredRecipes.length === 0) {
            recipesContainer.innerHTML = "<p>Aucune recette trouvée.</p>";
            return;
        }

        filteredRecipes.forEach(recipe => {
            const recipeModel = recipeTemplate(recipe);
            const recipeCardDOM = recipeModel.getRecipeCardDOM();
            recipesContainer.appendChild(recipeCardDOM);
        });

        // Update filter count
        document.querySelector(".filter-number").textContent = `${filteredRecipes.length} recettes trouvées`;
    }

    return { filterRecipes, displayFilteredRecipes };
}
