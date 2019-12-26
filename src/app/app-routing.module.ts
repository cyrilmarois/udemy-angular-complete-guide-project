import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NotFoundComponent } from './not-found/not-found.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/recipe',
    pathMatch: 'full'
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
    children: [
      {
        path: ':id/edit',
        component: ShoppingEditComponent
      }
    ]
  },
  {
    path: 'recipe',
    component: RecipeComponent
  },
  {
    path: 'recipe/:id/list',
    component: RecipeListComponent
  },
  {
    path: 'recipe/:id/detail',
    component: RecipeDetailComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
