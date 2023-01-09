import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals = [
    {name: "Turca", type: "dog"},
    {name: "Mel", type: "cat"},
    {name: "Jose", type: "horse"},
    {name: "Tea", type: "bird"}
  ]
}
