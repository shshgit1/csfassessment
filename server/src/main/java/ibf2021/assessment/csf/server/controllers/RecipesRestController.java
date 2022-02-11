package ibf2021.assessment.csf.server.controllers;

import java.util.List;
import java.util.Optional;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ibf2021.assessment.csf.server.models.Recipe;
import ibf2021.assessment.csf.server.services.RecipeService;

/* Write your request hander in this file */

@RestController
@RequestMapping(path="/api", produces=MediaType.APPLICATION_JSON_VALUE)

public class RecipesRestController{
  
  
    @Autowired RecipeService RecipeSvc;

    @GetMapping(path="recipes")
    public ResponseEntity<List<Recipe>> getAllRecipes(){
      List<Recipe> allRecipes = RecipeSvc.getAllRecipes();
      return ResponseEntity.ok(allRecipes);
    }
  

}