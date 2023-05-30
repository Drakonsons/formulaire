import { Component } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
})
export class MyFormComponent {
  model: Order = new Order('', 0, new Date(), '');

  constructor() {}

  onSubmit(): void {
    console.log(this.model);
  }
}
export class Order {
  title: string;
  quantity: number;
  date: Date;
  contact: string;

  constructor(title: string, quantity: number, date: Date, contact: string) {
    this.title = title;
    this.quantity = quantity;
    this.date = date;
    this.contact = contact;
  }
}
