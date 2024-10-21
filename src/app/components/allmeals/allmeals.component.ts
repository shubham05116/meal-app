import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/app/interfaces/meal';
import { MealService } from 'src/app/services/meal-service.service';

@Component({
  selector: 'app-allmeals',
  templateUrl: './allmeals.component.html',
  styleUrls: ['./allmeals.component.css'],
})
export class AllmealsComponent implements OnInit {
  meals: any = [];

  constructor(private mealServices: MealService) {}

  ngOnInit() {
    this.mealServices.getPosts().subscribe({
      next: (response: any) => {
          this.meals.push(response.categories);
      },
    });
  }
}
