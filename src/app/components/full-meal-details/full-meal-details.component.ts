import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealService } from 'src/app/services/meal-service.service';

@Component({
  selector: 'app-full-meal-details',
  templateUrl: './full-meal-details.component.html',
  styleUrls: ['./full-meal-details.component.css']
})
export class FullMealDetailsComponent {

  fullMeal:any[] =[]

constructor(private routes: ActivatedRoute , private mealService: MealService){}
  ngOnInit():void{
    const id = this.routes.snapshot.params['id']
    this.mealService.getMealDetails(id).subscribe((meal: any) =>{ this.fullMeal.push(meal.meals)});
  }
}
