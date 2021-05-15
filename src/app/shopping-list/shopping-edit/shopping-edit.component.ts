import { ShoppingListService } from './../shopping-list.service';
import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output, } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingredient :Ingredient


updateNameMount(event: Event){
}
constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }
  //nhan du lieu tu input
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  //truyen du lieu tu shopping edit sang shopping list
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  //xoa du lieu cua shopping list
  @Output() onClear = new EventEmitter<void>();

  onAddItem() {
    const ingredientName = this.nameInput.nativeElement.value;
    const ingredientAmount = this.amountInput.nativeElement.value;
    this.ingredient = new Ingredient(ingredientName, ingredientAmount);
    this.shoppingListService.onIngredientAdd(this.ingredient);
  };

}


