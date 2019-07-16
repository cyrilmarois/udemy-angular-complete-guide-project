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

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('quantityReference') quantityRef: ElementRef;

  constructor() {}

  ngOnInit() {}

  addIngredient(name) {
    console.log('name : ' + name.value, 'quantityProperty : ' +  this.quantityRef.nativeElement.value);
    this.ingredientAdded.emit(new Ingredient(name.value, this.quantityRef.nativeElement.value));
  }
}
