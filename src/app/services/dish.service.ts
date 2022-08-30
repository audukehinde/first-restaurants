import { Injectable } from '@angular/core';
import { Dish } from '../shared/shared-menu';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  
  getDishes(): Dish[] {
    return DISHES;
  }
  
  constructor() { }
}
