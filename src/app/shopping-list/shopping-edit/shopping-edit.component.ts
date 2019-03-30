import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.less']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  constructor(private slService: ShoppingListService) {
  }
  @ViewChild('f') slForm: NgForm;
  subs: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  ngOnInit() {
    this.subs = this.slService.startedEditing.subscribe((i: number) => {
      this.editedItemIndex = i;
      this.editMode = true;
      this.editedItem = this.slService.getIngredient(i);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
    });
  }

  submitItem(form: NgForm) {
    this.editMode
      ?
      this.slService.updateIngredient(this.editedItemIndex, new Ingredient(form.value.name, form.value.amount))
      :
      this.slService.addIngredient(new Ingredient(form.value.name, form.value.amount));
    this.editMode = false;
    form.reset();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
}
