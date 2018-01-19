import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RDComponent } from './recipe/RecipeDetails/RecipeDetails.component';
import { RIComponent } from './recipe/RecipeList/RecipeItem/RecipeItem.component';
import { RLComponent } from './recipe/RecipeList/RecipeList.component';
import { SLComponent } from './ShoppingList/ShoppingList.component';
import { SLEComponent } from './ShoppingList/ShoppingListEdit/ShoppingListEdit.component';
import { RecipeComponent } from './recipe/recipe.component';
import { DwaComponent } from './dwa/dwa.component';
import { JedenComponent } from './jeden/jeden.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RDComponent,
    RIComponent,
    RLComponent,
    SLComponent,
    SLEComponent,
    RecipeComponent, 
    DwaComponent, 
    JedenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
