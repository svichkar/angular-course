import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.less']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('First recipe', 'Some Description', 'https://upload.wikimedia.org/wikipedia/commons/2/2c/GNOME_Recipes_logo.png'),
    new Recipe('Second recipe', 'Another Description', 'https://upload.wikimedia.org/wikipedia/commons/2/2c/GNOME_Recipes_logo.png')
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
