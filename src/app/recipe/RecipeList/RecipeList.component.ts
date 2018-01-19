import { Component, Input, EventEmitter, Output } from "@angular/core";
import { Recipe } from '../recipe.model';
import {  } from "selenium-webdriver";

@Component({
    selector: 'app-RL',
    templateUrl: './RecipeList.component.html',
    styleUrls: ['./RecipeList.component.css']
})
export class RLComponent{
    @ Output() recipeWasSelected = new EventEmitter<Recipe>();
 recipes: Recipe[] = [
    new Recipe('Przykładowy przepis', 'Opis przykladowego przepisu', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Hgc0b5rUHjI3sKYRAt-SXo4VOy3fSTAIUe7XzzSd5n4qR3_7'),
    new Recipe('Drugi przykladowy przepis', 'Drugi opis', 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/29/0/0149359_Making-Taco_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371603491866.jpeg')
];


onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);

}
}