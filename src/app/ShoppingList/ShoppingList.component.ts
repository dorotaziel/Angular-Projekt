import { Component } from "@angular/core";
import { Ingredient} from "../shared/ingredient.model";

@Component({
    selector: 'app-SL',
    templateUrl: './ShoppingList.component.html',
    styleUrls: ['./ShoppingList.component.css']
})
export class SLComponent{
    ingredients: Ingredient[] = [
        new Ingredient('Tomato', 2),
        new Ingredient('Cucumber', 3),
    ];

    onIngredientAdded(ingredient: Ingredient){
        this.ingredients.push(ingredient);
    }

    }
