import { Component, Input } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
    selector: 'app-RD',
    templateUrl: './RecipeDetails.component.html',
    styleUrls: ['./RecipeDetails.component.css']
})
export class RDComponent{
    @Input() recipe: Recipe;

}