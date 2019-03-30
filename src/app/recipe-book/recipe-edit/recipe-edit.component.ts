import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.less']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private rc: RecipeService,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.editMode = params.id != null;
      this.init();
    });
  }

  private init() {
    const ingredients = new FormArray([]);
    [...this.rc.getRecipe(this.id).ingredients, ... []].forEach(i =>
        ingredients.push(new FormGroup({
          name: new FormControl(i.name, Validators.required),
          amount: new FormControl(i.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]/)]),
        })));
    this.recipeForm = new FormGroup({
      name: new FormControl(this.editMode ? this.rc.getRecipe(this.id).name : '' , Validators.required),
      imagePath: new FormControl(this.editMode ? this.rc.getRecipe(this.id).imagePath : '', Validators.required),
      description: new FormControl(this.editMode ? this.rc.getRecipe(this.id).description : '', Validators.required),
      ingredients
    });
  }

  onSubmit() {
    this.editMode
      ? this.rc.updateRecipe(this.id, this.recipeForm.value)
      : this.rc.addRecipe(this.recipeForm.value);
    this.onCancel();
  }

  onAddIngredient() {
    (this.recipeForm.get('ingredients') as FormArray).controls.push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]/)]),
      })
    );
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDeleteIngredient(i: number) {
    (this.recipeForm.get('ingredients') as FormArray).removeAt(i);
  }
}
