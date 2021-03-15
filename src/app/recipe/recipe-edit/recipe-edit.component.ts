import { Recipe } from "./../recipe.model";
import { RecipeService } from "./../recipe.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-recipe-edit",
  templateUrl: "./recipe-edit.component.html",
  styleUrls: ["./recipe-edit.component.sass"],
})
export class RecipeEditComponent implements OnInit {
  id: number;
  isNew = false;
  recipe: Recipe;

  constructor(
    private _route: ActivatedRoute,
    private _recipeService: RecipeService
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.isNew = null === params["id"];
      console.log([this.isNew, params["id"]]);
      if (!this.isNew) {
        this.recipe = this._recipeService.getRecipe(this.id);
      }
      console.log(this.recipe);
    });
  }
}
