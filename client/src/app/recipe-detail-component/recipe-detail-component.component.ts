import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeDetails } from '../models';
import { RecipeServiceService } from '../recipe-service.service';


@Component({
  selector: 'app-recipe-detail-component',
  templateUrl: './recipe-detail-component.component.html',
  styleUrls: ['./recipe-detail-component.component.css']
})
export class RecipeDetailComponentComponent implements OnInit {
  Recdet:RecipeDetails[]=[];
  IdOfRecipe:any;
  ReceipeDetMap=new Map();

  constructor(private aroute:ActivatedRoute, private service:RecipeServiceService) { }

  ngOnInit(): void {
    this.IdOfRecipe = this.aroute.snapshot.params['recipeId']
    this.service.getRecipe(this.IdOfRecipe)
    .then (r => this.Recdet = r)
    .catch(error => {alert('error');
    })

/*     this.IdOfRecipe = this.aroute.snapshot.params['recipeId']
    this.service.getRecipe(this.IdOfRecipe)
    .then (r => this.ReceipeDetMap.set(this.IdOfRecipe,r))
    .catch(error => {alert('error');
    })
    console.log(this.ReceipeDetMap)
} */

  }}
