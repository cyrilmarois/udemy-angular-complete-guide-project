import {
  Component,
  OnInit
} from '@angular/core';
import {
  Recipe
} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('pudding chia', 'chia pudding yummi', 'https://c.pxhere.com/photos/00/41/porridge_muesli_breakfast_vegan_oatmeal_chia_cocoa_nibs_orange-1277714.jpg!d')
  ];

  constructor() {}

  ngOnInit() {}

}
