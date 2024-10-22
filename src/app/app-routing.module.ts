import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllmealsComponent } from './components/allmeals/allmeals.component';
import { MealDetailsComponent } from './components/meal-details/meal-details.component';
import { FullMealDetailsComponent } from './components/full-meal-details/full-meal-details.component';

const routes: Routes = [
  { path: '', component: AllmealsComponent },
  // { path: 'meals/:id', component: MealDetailsComponent },
  { path: 'mealDetails/:id', component: FullMealDetailsComponent },
  { path: 'meals', component: MealDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
