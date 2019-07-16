import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from 'src/app/components/shared/service/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.sass']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private _recipeService: RecipeService) { }

  ngOnInit() {
    console.log(this.recipe);
  }

  loadDetails() {
    console.log('recipe ' + this.recipe);
    this._recipeService.recipeSelected.emit(this.recipe);
  }
}
