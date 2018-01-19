import { Component, ViewChild, ElementRef, EventEmitter, Output } from "@angular/core";
import { Ingredient } from "../../shared/ingredient.model";



@Component({
    selector: 'app-SLE',
    templateUrl: './ShoppingListEdit.component.html',
    styleUrls: ['./ShoppingListEdit.component.css']
})
export class SLEComponent{
    @ViewChild('NameInput') NameInputRef: ElementRef;
    @ViewChild('AmountInput') AmountInputRef: ElementRef;
    @Output() ingredientAdded = new EventEmitter<Ingredient>();


    onAddIngredient(){
        const ingName = this.NameInputRef.nativeElement.value;        
        const ingAmount = this.AmountInputRef.nativeElement.value;   
        const newIngredient = new Ingredient(ingName, ingAmount);
        this.ingredientAdded.emit(newIngredient);
    }

}