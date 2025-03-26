// export function recipeTemplate(recipe) {
//     const { id, image, name, servings, ingredients, time, description } = recipe;
//     const imgSrc = `../assets/recipes/${image}`; // Adjust path if needed

//     function getRecipeCardDOM() {
//         // Create card container
//         const article = document.createElement("article");
//         article.classList.add("recipe-card");

//         // Recipe Image
//         const img = document.createElement("img");
//         img.src = imgSrc;
//         img.alt = `Image de ${name}`;
//         img.classList.add("recipe-img");

//         // Recipe Content
//         const contentDiv = document.createElement("div");
//         contentDiv.classList.add("recipe-content");

//         // Recipe Title
//         const title = document.createElement("h2");
//         title.textContent = name;
//         title.classList.add("recipe-title");

//         // Cooking Time
//         const timeInfo = document.createElement("p");
//         timeInfo.textContent = `⏳ ${time} min`;
//         timeInfo.classList.add("recipe-time");

//         // Ingredients List
//         const ingredientsList = document.createElement("ul");
//         ingredientsList.classList.add("recipe-ingredients");
//         ingredients.forEach(item => {
//             const li = document.createElement("li");
//             li.textContent = `${item.ingredient}: ${item.quantity || ""} ${item.unit || ""}`;
//             ingredientsList.appendChild(li);
//         });

//         // Recipe Description
//         const desc = document.createElement("p");
//         desc.textContent = description.length > 150 ? description.substring(0, 150) + "..." : description;
//         desc.classList.add("recipe-desc");

//         // Assemble the card
//         contentDiv.appendChild(title);
//         contentDiv.appendChild(timeInfo);
//         contentDiv.appendChild(ingredientsList);
//         contentDiv.appendChild(desc);

//         article.appendChild(img);
//         article.appendChild(contentDiv);

//         return article;
//     }

//     return { id, image, name, servings, ingredients, time, description, getRecipeCardDOM };
// }
// Display recipes cards
function displayRecipesCards(recipes) {
    const recipesContainer = document.querySelector(".recipes-cards-wrapper");
    recipesContainer.innerHTML = "";

    const recipesNumberDOM = document.querySelector(".recipes-number");
    recipesNumberDOM.textContent = `${recipes.length} recettes`;

    recipes.forEach(recipe => {
        const article = document.createElement("article");
        article.classList.add("recipe-card");

        const divImage = document.createElement("div");
        divImage.classList.add("recipe-header");

        const image = document.createElement("img");
        image.setAttribute("src", `/Les-petits-plats/assets/images/${recipe.image}`);
        image.setAttribute("alt", `${recipe.image}  `);
        image.classList.add("recipe-image");

        const duration = document.createElement("p");
        duration.classList.add("recipe-duration");
        duration.textContent = `${recipe.time}min`;

        const divRecipeContent = document.createElement("div");
        divRecipeContent.classList.add("recipe-content");

        const h2 = document.createElement("h2");
        h2.classList.add("recipe-title");
        h2.textContent = `${recipe.name}`;

        const pRecipeCat = document.createElement("p");
        pRecipeCat.classList.add("card-category");
        pRecipeCat.textContent = "Recette";

        const pDescription = document.createElement("p");
        pDescription.classList.add("card-description");
        pDescription.textContent = `${recipe.description}`;

        const pIngredientCat = document.createElement("p");
        pIngredientCat.classList.add("card-category");
        pIngredientCat.textContent = "Ingrédients";

        const divIngredients = document.createElement("div");
        divIngredients.classList.add("card-ingredients");

        recipe.ingredients.forEach(ingredient => {
            const pIngredient = document.createElement("div");
            pIngredient.classList.add("card-ingredient");
            const pIngredientName = document.createElement("p");
            pIngredientName.classList.add("card-ingredient-name");
            const pIngredientQuantity = document.createElement("p");

            pIngredientName.textContent = ingredient.ingredient;

            if (ingredient.unit && ingredient.unit === "cl" || ingredient.unit === "kg") {
                pIngredientQuantity.textContent = `${ingredient.quantity}${ingredient.unit}`;
            } else if (ingredient.unit) {
                pIngredientQuantity.textContent = `${ingredient.quantity} ${ingredient.unit}`;
            } else {
                pIngredientQuantity.textContent = ingredient.quantity;
            }

            pIngredient.append(pIngredientName, pIngredientQuantity);
            divIngredients.appendChild(pIngredient);
        });

        divImage.append(duration, image);
        divRecipeContent.append(h2, pRecipeCat, pDescription, pIngredientCat, divIngredients);
        article.append(divImage, divRecipeContent);

        recipesContainer.appendChild(article);
    });
}

export { displayRecipesCards };