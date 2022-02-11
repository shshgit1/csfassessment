import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeModel } from '../models';

@Component({
  selector: 'app-recipe-add-component',
  templateUrl: './recipe-add-component.component.html',
  styleUrls: ['./recipe-add-component.component.css']
})
export class RecipeAddComponentComponent implements OnInit {
  groupedform!:FormGroup;


  title=new FormControl('',[Validators.minLength(3),Validators.required])
  image=new FormControl('',[Validators.required])
  instruction=new FormControl('',[Validators.minLength(3),Validators.required])
  ingredients=new FormArray([],[Validators.required,Validators.min(1)])

  constructor(private fb:FormBuilder, private rout:Router, private http:HttpClient) {
    this.groupedform=this.fb.group({

      Title:this.title,
      Image:this.image,
      Instruction:this.instruction,
      Ingredients:this.ingredients

    })
  }

  ngOnInit(): void {
  }
  addFormControl(){
    this.ingredients.push(this.fb.control('',[Validators.required,Validators.minLength(3)]))
  }
  removeFormControl(i:number){
    this.ingredients.removeAt(i)
  }
  onsubmit(){
    let newRecipe=new RecipeModel(
      this.groupedform.value.title,
      this.groupedform.value.image,
      this.groupedform.value.ingredients,
      this.groupedform.value.instruction)


      //this.http.post('http://localhost:8080/api/recipe',newRecipe)
      this.http.post('/api/recipe',newRecipe)
    this.rout.navigate([''])
  }

}
