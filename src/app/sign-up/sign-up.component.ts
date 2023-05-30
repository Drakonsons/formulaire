import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  model: signUp = new signUp('', '', '', '');
  

  constructor() {}

  onSubmit(): void {
    console.log(this.model);
  }

}

export class signUp {

    constructor(

        public firstname: string,

        public lastname: string,

        public password: string,

        public email: string

    ) {}
}