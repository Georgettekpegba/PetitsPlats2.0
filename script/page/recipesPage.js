// init();
import { getData } from "../api/data.js";
import { recipeTemplate } from "../templates/recipeTemplate.js";

async function displayRecipes(recipeData) {
    const recipesContainer = document.querySelector(".recipes-cards-wrapper");
    recipesContainer.innerHTML = ""; // Clear previous content

    const recipesNumberDOM = document.querySelector(".recipes-number");
    recipesNumberDOM.textContent = `${recipeData.length} recettes`; // Update recipe count

    if (!recipeData || recipeData.length === 0) {
        recipesContainer.innerHTML = "<p>Aucune recette trouvée.</p>";
        return;
    }

    recipeData.forEach(recipe => {
        const article = document.createElement("article");
        article.classList.add("recipe-card");

        const divImage = document.createElement("div");
        divImage.classList.add("recipe-header");

        const image = document.createElement("img");
        image.setAttribute("src", `/Les-petits-plats/assets/images/${recipe.image}`);
        image.setAttribute("alt", `${recipe.name}`);
        image.classList.add("recipe-image");

        const duration = document.createElement("p");
        duration.classList.add("recipe-duration");
        duration.textContent = `${recipe.time} min`;

        const divRecipeContent = document.createElement("div");
        divRecipeContent.classList.add("recipe-content");

        const h2 = document.createElement("h2");
        h2.classList.add("recipe-title");
        h2.textContent = recipe.name;

        const pRecipeCat = document.createElement("p");
        pRecipeCat.classList.add("card-category");
        pRecipeCat.textContent = "Recette";

        const pDescription = document.createElement("p");
        pDescription.classList.add("card-description");
        pDescription.textContent = recipe.description;

        const pIngredientCat = document.createElement("p");
        pIngredientCat.classList.add("card-category");
        pIngredientCat.textContent = "Ingrédients";

        const divIngredients = document.createElement("div");
        divIngredients.classList.add("card-ingredients");

        recipe.ingredients.forEach(ingredient => {
            const divIngredient = document.createElement("div");
            divIngredient.classList.add("card-ingredient");

            const pIngredientName = document.createElement("p");
            pIngredientName.classList.add("card-ingredient-name");
            pIngredientName.textContent = ingredient.ingredient;

            const pIngredientQuantity = document.createElement("p");
            pIngredientQuantity.textContent = ingredient.quantity
                ? ingredient.unit
                    ? `${ingredient.quantity} ${ingredient.unit}`
                    : ingredient.quantity
                : "";

            divIngredient.append(pIngredientName, pIngredientQuantity);
            divIngredients.appendChild(divIngredient);
        });

        divImage.append(duration, image);
        divRecipeContent.append(h2, pRecipeCat, pDescription, pIngredientCat, divIngredients);
        article.append(divImage, divRecipeContent);

        recipesContainer.appendChild(article);
    });
}

async function init() {
    try {
        const data = await getData();
        console.log("Données reçues:", data);

        const recipes = data.recipes || data;
        displayRecipes(recipes);
    } catch (error) {
        console.error("Erreur lors du chargement des recettes:", error);
    }
}

init();
