import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MealService } from 'src/app/services/meal-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private router: Router, private mealService: MealService) {}
  searchMealApp(data: string) {
    this.router.navigate(['/meals'], { queryParams: { search: data } });
  }
  searchMealAppBycity(data: string) {
    this.router.navigate(['/meals'], { queryParams: { city: data } });
  }
  randomMeal() {
    this.router.navigate(['/meals']);
  }
}
