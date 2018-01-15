import { Component } from "@angular/core";
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-RL',
    templateUrl: './RecipeList.component.html',
    styleUrls: ['./RecipeList.component.css']
})
export class RLComponent{
recipes: Recipe[] = [
    new Recipe('Przykładowy przepis', 'Opis przykladowego przepisu', 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png')
];
}