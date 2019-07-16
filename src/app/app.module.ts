import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { ShoppingComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './components/shopping-list/shopping-edit/shopping-edit.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipeDetailComponent } from './components/recipe/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './components/recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipe/recipe-list/recipe-item/recipe-item.component';

import { DropdownDirective } from './components/shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingComponent,
    RecipeComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
