import {Component, OnInit} from '@angular/core';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.less'],
  providers: [RecipeService]
})
export class RecipeBookComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
