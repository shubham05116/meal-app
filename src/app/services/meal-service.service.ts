import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  private allMealsUrl =
    'https://www.themealdb.com/api/json/v1/1/categories.php';
  private categoriesMeals =
    'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

  private fullMealDetailUrl =
    'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

  allMeals: any[] = [];

  private searchUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  constructor(private mealService: HttpClient) {}

  getPosts() {
    return this.mealService.get<any>(this.allMealsUrl);
  }

  getMealsByCategory(category: string) {
    return this.mealService.get<any>(this.categoriesMeals + category);
  }

  getMealDetails(mealId: string) {
    return this.mealService.get<any>(this.fullMealDetailUrl + mealId);
  }

  searchMeals(searchTerm: string) {
    return this.mealService.get<any>(this.searchUrl + searchTerm);
  }
}
