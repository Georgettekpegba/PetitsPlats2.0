// import { getData } from "../api/data";

// getData().then(data => {
//     console.log(data);
// });
// getData();
import { getData } from '../api/data.js';
import { recipeTemplate } from '../templates/recipeTemplate.js';

async function displayRecipes(recipes) {
    const recipesContainer = document.querySelector(".recipes-cards");
    recipesContainer.innerHTML = "";  // Clear old recipes

    if (recipes.length === 0) {
        recipesContainer.innerHTML = "<p>Aucune recette trouvée.</p>";
        return;
    }

    recipes.forEach(recipe => {
        const recipeModel = recipeTemplate(recipe);
        const recipeCardDOM = recipeModel.getRecipeCardDOM();
        recipesContainer.appendChild(recipeCardDOM);
    });
}

async function init() {
    try {
        const { recipes } = await getData();  // Fetch recipes from API
        displayRecipes(recipes);
    } catch (error) {
        console.error("Erreur lors du chargement des recettes:", error);
    }
}

init();


