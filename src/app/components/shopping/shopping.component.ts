import { Component, OnInit } from '@angular/core';

import { Ingredient } from './ingredient.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.sass']
})
export class ShoppingComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('chia', '1/4 cup'),
    new Ingredient('coco milk', '1 cup'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
