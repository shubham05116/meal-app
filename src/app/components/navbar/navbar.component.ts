import { Component } from '@angular/core';
import { MealService } from 'src/app/services/meal-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private mealService: MealService) {}

  searchMealApp(data: string) {
    this.mealService.searchMeals(data).subscribe((res: any) => {
    });
  }
}
