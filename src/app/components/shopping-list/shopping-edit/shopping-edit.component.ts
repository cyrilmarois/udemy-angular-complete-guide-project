import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.sass']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('quantityReference') quantityRef: ElementRef;

  constructor(private _shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  addIngredient(name) {
    this._shoppingListService
      .addIngredient(
        new Ingredient(name.value, this.quantityRef.nativeElement.value)
      );
  }
}
