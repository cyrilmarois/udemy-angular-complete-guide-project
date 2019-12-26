import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.sass'],
})
export class ShoppingComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private _shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this._shoppingListService.getIngredients();
    this._shoppingListService
      .ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        });
    console.log(this.ingredients);
  }
}
