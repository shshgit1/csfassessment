import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListComponentComponent } from './recipe-list-component/recipe-list-component.component';
import { RecipeDetailComponentComponent } from './recipe-detail-component/recipe-detail-component.component';
import { RecipeAddComponentComponent } from './recipe-add-component/recipe-add-component.component';
import { RecipeServiceService } from './recipe-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const AppRoutes:Routes=[
  { path: '', component:RecipeListComponentComponent},
  { path: 'recipe/:recipeId', component:RecipeDetailComponentComponent},
  {path: 'add', component:RecipeAddComponentComponent},
  { path: "**", redirectTo: '/', pathMatch: 'full' }
]


@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponentComponent,
    RecipeDetailComponentComponent,
    RecipeAddComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [RecipeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
