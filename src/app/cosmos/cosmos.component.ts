import { Component } from '@angular/core';
import { CosmosService } from '../shared/services/cosmos.service';
import { Cosmos } from '../shared/models/Cosmos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cosmos',
  templateUrl: './cosmos.component.html',
  styleUrl: './cosmos.component.css',
})
export class CosmosComponent {
  planets: Cosmos[] = [];
  selectedPlanet: Cosmos;
  constructor(private cosmosService: CosmosService, private router: Router) {
    this.cosmosService.getPlanets().subscribe((data) => (this.planets = data));
    console.log(this.planets);
  }

  onClickPlanet(planet: Cosmos) {
    console.log(planet.planet, 'was clicked', planet);
    this.selectedPlanet = planet;
  }

  onGoBack() {
    this.router.navigate(['/home']);
  }

  handleGoToCosmos() {
    this.selectedPlanet = null;
    console.log('going back to cosmos');
  }
}
