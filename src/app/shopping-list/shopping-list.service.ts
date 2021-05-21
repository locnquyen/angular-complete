import { EventEmitter } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

  ingredientChanged = new EventEmitter<Ingredient[]>();
  //và thêm service để lấy thông tin item từ id đã có
  startedEditing = new EventEmitter<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomato', 10)
  ];
  getIngredients() {
    return this.ingredients;
  }
  //Bổ sung chức năng lấy một ingredients từ array thông qua index của nó.
  getIngredient(index: number) {
    return this.ingredients[index];
  }

  onIngredientAdd(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients); //Do push nhan mutliple object

    this.ingredientChanged.emit(this.ingredients.slice());
  }
  //them ham để đổi nút add or updates
  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientChanged.emit(this.ingredients.slice());
  }
  //delete mot phan tu
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientChanged.emit(this.ingredients.slice());
    }
   
}
