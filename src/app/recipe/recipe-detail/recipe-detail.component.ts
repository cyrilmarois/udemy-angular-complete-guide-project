import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";

import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.sass"],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private _recipeService: RecipeService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log([params]);
      this.id = +params["id"];
      this.recipe = this._recipeService.getRecipe(this.id);
    });
    console.log(this.recipe);
  }

  addToShoppingList() {
    this._recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this._router.navigate(["edit"], { relativeTo: this._route });
    // this._router.navigate(["../", this.id, "edit"], {
    //   relativeTo: this._route,
    // });
  }
}
