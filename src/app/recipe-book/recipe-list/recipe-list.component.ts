import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.less']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A first recipe', 'Description', 'https://upload.wikimedia.org/wikipedia/commons/2/2c/GNOME_Recipes_logo.png')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
