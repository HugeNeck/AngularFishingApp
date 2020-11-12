import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChosenFisherService {

  currentFisher: Observable<string>;

  currentFisherChange: Subject<string>;

  fishers: string[] = ['Joel', 'Justin', 'Fez', 'Dan'];

  constructor() {
     this.currentFisherChange = new Subject<string>();
     this.currentFisher = this.currentFisherChange.asObservable();
   }

  getFishers():string[]{
    return this.fishers;
  }

  // getFisher():Observable<string>{
  //   return this.currentFisher;
  // }
  
  setFisher(fisher :string){
    this.currentFisherChange.next(fisher)
  }

}
