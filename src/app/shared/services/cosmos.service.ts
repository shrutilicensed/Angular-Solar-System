import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Cosmos } from '../models/Cosmos';
import { COSMOS } from '../models/cosmos-mock-data';

@Injectable({
  providedIn: 'root',
})
export class CosmosService {
  private url: string = '../models/cosmos-mock-data.ts';
  constructor() {}
  //Fill your code here
  getPlanets(): Observable<Cosmos[]> {
    return of(COSMOS);
  }
}
