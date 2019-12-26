import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.sass']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private _recipeService: RecipeService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.recipe = this._recipeService.getRecipe(this.id);
      });
    console.log(this.recipe);
  }

  addToShoppingList() {
    this._recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }

}
