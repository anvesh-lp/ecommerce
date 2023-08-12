import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  addIngredientsToShopping() {
    this.recipeService.addIngredientToShoppingList(
      this.recipe.getIngredients()
    );
    console.log('getting recipes in add');
  }

  ngOnInit(): void {
    //   this.id = +this.activeRoute.params['id'];
    //
    //   this.recipe=this.recipeService.getRecipeById(this.id);
    this.activeRoute.params.subscribe((params) => {
      this.id = +params['id'];
      console.log(this.id);
      this.recipe = this.recipeService.getRecipeById(this.id);
    });
    console.log(this.recipe);
  }

  onRecipeClick() {
    // this.router.navigate(['edit'], { relativeTo: this.activeRoute });
    this.router.navigate(['../', this.id, 'edit'], {
      relativeTo: this.activeRoute,
    });
  }
}
