import { Injectable } from '@angular/core';
// import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChosenFisherService {

  currentFisher: string;
  fishers: string[] = ['Joel', 'Justin', 'Fez', 'Dan'];

  constructor() {}

  getFishers():string[]{
    return this.fishers;
  }

  getFisher():string{
    return this.currentFisher;
  }

  setFisher(fisher:string){
    this.currentFisher = fisher;
  }

}
