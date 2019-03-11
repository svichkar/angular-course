import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('First recipe',
      'Some Description',
      'https://upload.wikimedia.org/wikipedia/commons/2/2c/GNOME_Recipes_logo.png',
      [
        new Ingredient('meat', 1),
        new Ingredient('French Fries', 20),
      ]),
    new Recipe('Second recipe',
      'Another Description',
      'https://upload.wikimedia.org/wikipedia/commons/2/2c/GNOME_Recipes_logo.png',
    [
      new Ingredient('Buns', 5),
      new Ingredient('Meat', 1),
    ])
  ];
  constructor(private slService: ShoppingListService) { }
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
