import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable({
  providedIn: 'root'
})

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private _recipes: Recipe[] = [
    new Recipe(
      'pudding coco chia', 
      'chia pudding coco', 
      'https://c.pxhere.com/photos/00/41/porridge_muesli_breakfast_vegan_oatmeal_chia_cocoa_nibs_orange-1277714.jpg!d', 
      [
        new Ingredient('coco milk', '1 cup'),
        new Ingredient('chia', '1/4 cup'),
        new Ingredient('vanilla', '1 tbsp'),
        new Ingredient('maple syrup', '1 tsp'),
        new Ingredient('coco powder', '1/4 cup')
      ]),
    new Recipe('pudding Matcha chia', 
    'chia pudding cMatchaoco', 
    'https://c.pxhere.com/photos/00/41/porridge_muesli_breakfast_vegan_oatmeal_chia_cocoa_nibs_orange-1277714.jpg!d', 
    [
      new Ingredient('coco milk', '1 cup'),
      new Ingredient('chia', '1/4 cup'),
      new Ingredient('vanilla', '1 tbsp'),
      new Ingredient('maple syrup', '1 tsp'),
      new Ingredient('Matcha', '1/4 cup')
    ])
  ];

  constructor(private _shoppingListService: ShoppingListService) {    

  }

  getRecipes() {
    return this._recipes.slice();  // use slice with empty argument to return a copy of recipes
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this._shoppingListService.addIngredients(ingredients);
  }
}
