// const cardsData = [
//     {
//         title: "Card 1",
//         description: "Description for card 1",
//         imageUrl: "https://via.placeholder.com/300",
//         buttonText: "Learn More",
//     },
//     {
//         title: "Card 2",
//         description: "Description for card 2",
//         imageUrl: "https://via.placeholder.com/300",
//         buttonText: "Explore",
//     },
// ];

// cardsData.forEach((data) => {
//     const card = document.createElement("div");
//     card.className = "card";

//     const title = document.createElement("h2");
//     title.textContent = data.title;

//     const description = document.createElement("p");
//     description.textContent = data.description;

//     const image = document.createElement("img");
//     image.src = data.imageUrl;
//     image.alt = data.title;

//     const button = document.createElement("button");
//     button.textContent = data.buttonText;

//     card.appendChild(title);
//     card.appendChild(description);
//     card.appendChild(image);
//     card.appendChild(button);

//     document.body.appendChild(card);
// });

// // export default class RecipeCard {
// //     constructor(recipe) {
// //         this.recipe = recipe;
// //     }
// //     createCard() {
// //         const cardSection = document.querySelector('.card_section');
// //         const cardContent = `
// //             <article class="card" data-id=${this.recipe.id}>
// //                 ${
// //                     this.recipe.time > 0
// //                         ? ` <p class="card_time">
// //                             ${
// //                                 this.recipe.time > 60
// //                                     ? `${Math.floor(this.recipe.time / 60)} h ${this.recipe.time % 60}`
// //                                     : `${this.recipe.time} min`
// //                             }
// //                             </p>`
// //                         : ''
// //                 }
// //                 <img src="./images/recipes/${this.recipe.image}" alt="${this.recipe.name}">
// //                 <div class="card_infos">
// //                     <h2>${this.recipe.name}</h2>
// //                     <div class="card_infos_instructions">
// //                         <h3>Recette</h3>
// //                         <p>${this.recipe.description}</p>
// //                     </div>
// //                     <div class="card_infos_ingredients">
// //                         <h3>Ingrédients</h3>
// //                         <ul>
// //                             ${this.recipe.ingredients.map(ingredient => {
// //                                 if (ingredient.quantity && ingredient.unit) {
// //                                     return `
// //                                         <li>
// //                                             <span>${ingredient.ingredient}</span>
// //                                             <span>${ingredient.quantity} ${ingredient.unit}</span>
// //                                         </li>
// //                                             `;
// //                                 } else {
// //                                     return `
// //                                         <li>
// //                                             <span>${ingredient.ingredient}</span>
// //                                         </li>
// //                                             `;
// //                                 }
// //                             }).join('')}
// //                         </ul>
// //                     </div>
// //                 </div>
// //             </article>
// //         </section>
// //         `;

// //         cardSection.innerHTML += cardContent;
// //     }
// // }

document.addEventListener('DOMContentLoaded', () => {
    // Dropdown Functionality
    const dropdownButtons = document.querySelectorAll('.dropdown-btn');
    dropdownButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const dropdownContent = button.nextElementSibling;
            dropdownContent.style.display =
                dropdownContent.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Search Functionality
    const searchInput = document.querySelector('.search-input');
    const recipeList = document.querySelector('.recipes-grid');

    const recipes = [
        { name: 'Limonade de Coco', ingredients: ['Coco', 'Citron', 'Sucre'], time: '10 min' },
        { name: 'Poisson Cru à la Tahitienne', ingredients: ['Poisson', 'Citron', 'Coco'], time: '20 min' },
        // Add more recipes here
    ];

    function displayRecipes(recipesToShow) {
        recipeList.innerHTML = '';
        recipesToShow.forEach((recipe) => {
            const recipeCard = `
          <div class="recipe-card">
            <img src="recipe-placeholder.jpg" alt="${recipe.name}">
            <div class="card-content">
              <h3>${recipe.name}</h3>
              <p>Ingrédients: ${recipe.ingredients.join(', ')}</p>
              <p>Temps: ${recipe.time}</p>
            </div>
          </div>
        `;
            recipeList.innerHTML += recipeCard;
        });
    }

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredRecipes = recipes.filter(
            (recipe) =>
                recipe.name.toLowerCase().includes(searchTerm) ||
                recipe.ingredients.some((ingredient) => ingredient.toLowerCase().includes(searchTerm))
        );
        displayRecipes(filteredRecipes);
    });

    // Initial Recipe Display
    displayRecipes(recipes);
});

