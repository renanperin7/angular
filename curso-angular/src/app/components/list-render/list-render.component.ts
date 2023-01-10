import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {

  constructor(private listService: ListService) {

  }

  animals: Animal[] = [
    {name: "Turca", type: "dog", age: 12},
    {name: "Mel", type: "cat", age: 3},
    {name: "Jose", type: "horse", age: 63},
    {name: "Tea", type: "bird", age: 43}
  ]

  animalDetails = ''

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos.`
  }

  removeAnimal(animal: Animal) {
    console.log("removendo animal")
    this.animals = this.listService.remove(this.animals, animal)
  }
}
