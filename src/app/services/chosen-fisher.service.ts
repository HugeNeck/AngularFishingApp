import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChosenFisherService {

  currentFisher: string;

  currentFisherChange: Subject<string> = new Subject<string>();

  currentFisherUID: string;
  fishers: string[] = ['Joel', 'Justin', 'Fez', 'Dan'];
  fishersUID: string[] = ['u7FOtTJGasMlqIclUFNHuT0uCF72',
  'euaOW4QZR1V5LsvRqXgF2A51Cam1',
  'nH32Rcx6CugwwtcI5V5ggrszQOH3',
  'Hv3Ql8pSaBfV27hZzCfRnlbRfKx2'];
  loggedInUID: string;
  loggedInUser: string;

  constructor() {
    this.currentFisherChange.subscribe((fisher) => {
      this.currentFisher = fisher
    })
  }

  getFishers():string[]{
    return this.fishers;
  }

  getFisher():string{
    return this.currentFisher;
  }

  setFisher(fisher:string){
    this.currentFisherChange.next(fisher)
    this.setCurrentUID(fisher);
  }

  setFisherByUID(UID:string){
    if(UID === this.fishersUID[0]) {this.setFisher(this.fishers[0])}
    if(UID === this.fishersUID[1]) {this.setFisher(this.fishers[1])}
    if(UID === this.fishersUID[2]) {this.setFisher(this.fishers[2])}
    if(UID === this.fishersUID[3]) {this.setFisher(this.fishers[3])}
  }

  setCurrentUID(fisher:string):void{
    if(fisher === this.fishers[0]) this.currentFisherUID=this.fishersUID[0];
    if(fisher === this.fishers[1]) this.currentFisherUID=this.fishersUID[1];
    if(fisher === this.fishers[2]) this.currentFisherUID=this.fishersUID[2];
    if(fisher === this.fishers[3]) this.currentFisherUID=this.fishersUID[3];
  }

  getcurrentUID():string{
    return this.currentFisherUID;
  }

  setLoggedInUser(UID:string){
    this.setLoggedInUID(UID);
    this.loggedInUser = this.getFisher();
  }

  getLoggedInUser():string{
    return this.loggedInUser;
  }

  setLoggedInUID(UID:string):void{
    this.loggedInUID = UID;
  }

  getLoggedInUID():string{
    return this.loggedInUID;
  }

  getAllUID():string[]{
    return this.fishersUID;
  }
}
