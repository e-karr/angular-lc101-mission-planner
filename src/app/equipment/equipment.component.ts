import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: string[] = ['Habitat dome', 'Drones', 'Food containers', 'Oxygen tanks'];

  constructor() { }

  ngOnInit() {
  }

  add(item: string) {
    let addMessage: string = "";

    if (this.equipment.includes(item)) {
      addMessage = "This item is already on your rocket.";
    } else if (item === "") {
      addMessage = "Please enter an item.";
    } else {
      this.equipment.push(item);
    }

    return addMessage;
  }

}
