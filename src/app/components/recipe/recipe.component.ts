import { Component, OnInit } from '@angular/core';

import { RecipeService } from 'src/app/components/shared/service/recipe.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.sass'],
  providers: [RecipeService]
})
export class RecipeComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private _recipeService: RecipeService) { }

  ngOnInit() {
    this._recipeService.recipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.selectedRecipe = recipe;
        }
      );
    console.log(this.selectedRecipe);
  }

}
