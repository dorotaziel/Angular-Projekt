import { Component } from "@angular/core";
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-RL',
    templateUrl: './RecipeList.component.html',
    styleUrls: ['./RecipeList.component.css']
})
export class RLComponent{
recipes: Recipe[] = [
    new Recipe('Przykładowy przepis', 'Opis przykladowego przepisu', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Hgc0b5rUHjI3sKYRAt-SXo4VOy3fSTAIUe7XzzSd5n4qR3_7'),
    new Recipe('Przykładowy przepis', 'Opis przykladowego przepisu', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Hgc0b5rUHjI3sKYRAt-SXo4VOy3fSTAIUe7XzzSd5n4qR3_7')
];
}