export function recipeTemplate(data) {
    const { id, name, image, servings, ingredients, time, description } = data;

    function getRecipeCardDOM() {
        const article = document.createElement('article');
        article.classList.add('recipe-card');

        // Recipe image
        const img = document.createElement('img');
        img.src = `assets/recipes/${image}`;  // Ensure correct path
        img.alt = `Image de ${name}`;
        img.classList.add('recipe-image');

        // Recipe details
        const title = document.createElement('h2');
        title.textContent = name;
        title.classList.add('recipe-title');

        const timeInfo = document.createElement('p');
        timeInfo.textContent = time ? `${time} min` : "Temps inconnu";
        timeInfo.classList.add('recipe-time');

        const servingsInfo = document.createElement('p');
        servingsInfo.textContent = `Portions: ${servings}`;
        servingsInfo.classList.add('recipe-servings');

        const descriptionText = document.createElement('p');
        descriptionText.textContent = description || "Pas de description disponible.";
        descriptionText.classList.add('recipe-description');

        // Ingredients list
        const ingredientsList = document.createElement('ul');
        ingredientsList.classList.add('recipe-ingredients');
        ingredients.forEach(ing => {
            const li = document.createElement('li');
            li.textContent = `${ing.ingredient} - ${ing.quantity || ''} ${ing.unit || ''}`;
            ingredientsList.appendChild(li);
        });

        // Append elements
        article.appendChild(img);
        article.appendChild(title);
        article.appendChild(timeInfo);
        article.appendChild(servingsInfo);
        article.appendChild(descriptionText);
        article.appendChild(ingredientsList);

        return article;
    }

    return { id, name, image, servings, ingredients, time, description, getRecipeCardDOM };
}
