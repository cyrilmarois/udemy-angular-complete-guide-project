import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private _recipes: Recipe[] = [
    new Recipe('pudding coco chia', 'chia pudding coco', 
      'https://c.pxhere.com/photos/00/41/porridge_muesli_breakfast_vegan_oatmeal_chia_cocoa_nibs_orange-1277714.jpg!d', 
      ['coco milk', 'chia', 'vanilla, maple syrup', 'coco powder']),
    new Recipe('pudding matcha chia', 'chia pudding matcha', 
    'https://c.pxhere.com/photos/00/41/porridge_muesli_breakfast_vegan_oatmeal_chia_cocoa_nibs_orange-1277714.jpg!d', 
    ['coco milk', 'chia', 'vanilla, maple syrup', 'matcha'])
  ];

  getRecipes() {
    return this._recipes.slice();  // use slice with empty argument to return a copy of recipes
  }
}
