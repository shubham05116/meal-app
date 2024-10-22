import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealService } from 'src/app/services/meal-service.service';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.css'],
})
export class MealDetailsComponent implements OnInit {
  foodItems: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private mealService: MealService
  ) {}

  ngOnInit(): void {
    this.route.queryParams
      .pipe(
        switchMap((params) => {
          if (params['search']) {
            return this.mealService.getMealsByCity(params['search']);
          } else if (params['meals']) {
            return this.mealService.getMealsByCategory(params['meals']);
          } else if (params['city']) {
            return this.mealService.getMealsByCity(params['city']);
          }
          return of({ meals: [] });
        })
      )
      .subscribe((res: any) => {
        this.foodItems = res.meals || [];
      });
  }
}
