import { Component, OnInit } from '@angular/core';

import { RecipeSum } from '../models';
import { RecipeServiceService } from '../recipe-service.service';

@Component({
  selector: 'app-recipe-list-component',
  templateUrl: './recipe-list-component.component.html',
  styleUrls: ['./recipe-list-component.component.css']
})
export class RecipeListComponentComponent implements OnInit {

  listOfRecipes=new Map();
  recipes : RecipeSum[] = []

  constructor(private service:RecipeServiceService) { }


ngOnInit():void {
  this.service.getAllRecipes()
  .then (r => this.recipes = r)
  .catch(error => {
    alert('error');

  })

  }

}
