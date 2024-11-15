import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {
  loadedRecipe?: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private recipeService: RecipesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if( !paramMap.has('recipeId')) {
        //redirect
        return;
      }else{
        const recipeId = paramMap.get('recipeId');
        if(recipeId != null){
          this.loadedRecipe = this.recipeService.getRecipe(recipeId);
        }else{
          return;
        }
      }
    })
  }

  onDeleteRecipe() {
    if (this.loadedRecipe?.id) {
      this.recipeService.deleteRecipe(this.loadedRecipe.id);
      this.router.navigate(['/recipes']);
    } else {
      // Handle the case where loadedRecipe is not defined
      console.log('Recipe not loaded or ID is missing.');
    }
  }


}
