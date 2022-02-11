import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { RecipeDetails, RecipeSum } from './models';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  constructor(private http:HttpClient) { }

  getAllRecipes():Promise<RecipeSum[]>{
    return lastValueFrom(
      //this.http.get<RecipeSum[]>('http://localhost:8080/api/recipes')
      this.http.get<RecipeSum[]>('/api/recipes')
    ).then (r =>
      r.map(rz => ({id : rz.id, title: rz.title} as RecipeSum)))

    }

    getRecipe(recipeId:string):Promise<RecipeDetails>{

    //  let url='http://localhost:8080/api/recipe'+'/'+recipeId;
    let url='/api/recipe'+'/'+recipeId;
      return lastValueFrom(
        this.http.get<RecipeDetails>(url)
      ).then (rd => ({id: rd.id, title: rd.title,
        ingredients: rd.ingredients, instruction: rd.instruction, image:rd.image } as RecipeDetails))

} //end getrecipe
}
