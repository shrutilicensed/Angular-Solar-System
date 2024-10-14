import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cosmos } from '../shared/models/Cosmos';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrl: './description.component.css',
})
export class DescriptionComponent {
  @Input() planet: Cosmos;
  @Output() goBack = new EventEmitter<any>();

  constructor() {
    console.log(this.planet);
  }

  onGoToCosmos() {
    this.goBack.emit();
  }
}
