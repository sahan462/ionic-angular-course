import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://dirndlkitchen.com/wp-content/uploads/2023/10/german-pork-schnitzel-dirndl-kitchen5.jpg',
      ingredients: ['French Fries', 'Pork Meat', '']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://www.recipetineats.com/tachyon/2021/08/Spaghetti-Puttanesca_64-SQ.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    },
  ]

  constructor() { }

  getAllRecipes(): Recipe[] {
    return [...this.recipes];
  }

  getRecipe(recipeId: String) {
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })}; 
  }

  deleteRecipe(recipeId: String) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }

}
