import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable({providedIn: 'root'})
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'Test recipe', 'Testing test tester of tests', 
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mastercook.com%2Fapp%2FImage%2F23709517%2F7749559.jpg&f=1&nofb=1', 
            [ 
                new Ingredient('Meat', 5), 
                new Ingredient('Potatoes', 50)
            ]),
        new Recipe(
            'Test recipe 2', 'Testing test tester of tests', 
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mastercook.com%2Fapp%2FImage%2F23709517%2F7749559.jpg&f=1&nofb=1', 
            [ 
                new Ingredient('Apple', 55), 
                new Ingredient('Salad', 8)
            ])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}