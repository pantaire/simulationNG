import { Injectable } from '@angular/core';
import { simulation } from './mock-sim';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  constructor(private messageService: MessageService) { }

  getSimulation(): Observable<Simulation> {
    //message is currently displayed before data is fetched
    this.messageService.add('SimulationService: fetched simulation');
    return of(simulation);

  }
}
