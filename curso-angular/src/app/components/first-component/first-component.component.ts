import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  name:string = "Renan";
  age:Number = 23;
  job:string = "Programador";
  hobbies = ["Correr", "Jogar", "Estudar"];
  car = {
    name: "Polo",
    year: 2016
  }

}
