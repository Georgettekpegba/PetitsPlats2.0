import { displayRecipes } from "../utils/displayRecipes.js";

export const openCloseFilterMenu = () => {
    const filterButtons = document.querySelectorAll(".dropdown-btn");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const dropdownContent = button.nextElementSibling;
            const isExpanded = button.getAttribute("aria-expanded") === "true" || false;

            button.setAttribute("aria-expanded", !isExpanded);
            dropdownContent.classList.toggle("curtain_effect");

            // Update accessibility attributes
            dropdownContent.setAttribute("aria-hidden", dropdownContent.classList.contains("curtain_effect") ? "false" : "true");
        });
    });
};

export const filterRecipes = (recipes) => {
    const allFilters = document.querySelectorAll(".dropdown-content button");

    allFilters.forEach(filter => {
        filter.addEventListener("click", () => {
            const selectedCategory = filter.closest(".dropdown").querySelector(".dropdown-btn").textContent;
            const filterValue = filter.textContent.toLowerCase();

            let filteredRecipes = [...recipes];

            if (selectedCategory === "Ingrédients") {
                filteredRecipes = recipes.filter(recipe =>
                    recipe.ingredients.some(ing => ing.ingredient.toLowerCase().includes(filterValue))
                );
            } else if (selectedCategory
