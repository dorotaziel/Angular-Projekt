import { Component,  Input, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../../recipe.model";

@Component({
    selector: 'app-RI',
    templateUrl: './RecipeItem.component.html',
    styleUrls: ['./RecipeItem.component.css']
})
export class RIComponent{
    @Input() recipe: Recipe;
    @Output() recipeSelected = new EventEmitter<void>();



    onSelected(){
        this.recipeSelected.emit();

    }
}