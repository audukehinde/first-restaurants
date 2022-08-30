import { Component, Input, OnInit } from '@angular/core';
import { Dish } from '../shared/shared-menu';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  @Input()
  dish: Dish;

  constructor() { }

  ngOnInit(): void {
    console.log(this.dish.comments)
  }

}
