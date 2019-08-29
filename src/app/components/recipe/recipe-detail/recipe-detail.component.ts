import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.sass']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private _recipeService: RecipeService) { }

  ngOnInit() {
    console.log(this.recipe);
  }

  addToShoppingList() {
    this._recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }

}
