import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private _ingredients: Ingredient[] = [
    new Ingredient('chia', '1/4 cup'),
    new Ingredient('coco milk', '1 cup'),
  ];
  
  constructor() { }

  getIngredients() {
    return this._ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    console.log('ingredient : ' + ingredient);
    this._ingredients.push(ingredient);
    this.ingredientsChanged.emit(this._ingredients.slice());
  }
}
