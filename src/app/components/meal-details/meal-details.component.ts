import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealService } from 'src/app/services/meal-service.service';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.css'],
})
export class MealDetailsComponent {
  foodItems: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private mealService: MealService
  ) {}

  ngOnInit(): void {
    const categories = this.route.snapshot.params['id'];
    this.mealService.getMealsByCategory(categories).subscribe((data) => {
      this.foodItems.push(data.meals);
    });
  }
}
