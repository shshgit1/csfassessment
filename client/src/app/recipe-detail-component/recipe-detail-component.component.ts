import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeDetails } from '../models';
import { RecipeServiceService } from '../recipe-service.service';


@Component({
  selector: 'app-recipe-detail-component',
  templateUrl: './recipe-detail-component.component.html',
  styleUrls: ['./recipe-detail-component.component.css']
})
export class RecipeDetailComponentComponent implements OnInit {
  Recdet!:RecipeDetails;
  IdOfRecipe:any;


  constructor(private aroute:ActivatedRoute, private service:RecipeServiceService, private router:Router) { }

  ngOnInit(): void {
    this.IdOfRecipe = this.aroute.snapshot.params['recipeId']
    this.service.getRecipe(this.IdOfRecipe)
    .then (r => this.Recdet = r)
    .catch(error => {alert("no recipe found");
    this.router.navigate([''])
  })


  }

}
