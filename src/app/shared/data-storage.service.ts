import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

import { AuthService } from '../auth/auth.service';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  firebaseUrl = 'https://ng-course-recipe-book-dc6e3-default-rtdb.europe-west1.firebasedatabase.app/recipes.json';

  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(this.firebaseUrl, recipes).subscribe(response => {
      console.log(response);
    });
  }

  fetchRecipes() {

    return this.http
      .get<Recipe[]>(
        this.firebaseUrl
      )
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
          });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}