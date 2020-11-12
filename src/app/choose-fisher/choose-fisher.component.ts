import { Component, OnInit } from '@angular/core';
import { ChosenFisherService } from '../services/chosen-fisher.service';


@Component({
  selector: 'app-choose-fisher',
  templateUrl: './choose-fisher.component.html',
  styleUrls: ['./choose-fisher.component.css']
})
export class ChooseFisherComponent implements OnInit {

  currentFisher:string;
  
  fishers: string[];

  constructor(private chosenFisherService : ChosenFisherService) {

  }

  
  getFishers() : void {
    this.fishers = this.chosenFisherService.getFishers();
  }

  // getFisher(): void{
  //   this.currentFisher = this.chosenFisherService.currentFisher.toString();
  // }

  setFisher(){
    this.chosenFisherService.setFisher(this.currentFisher);
  }

  ngOnInit(): void {
    this.getFishers();
    this.chosenFisherService.currentFisher.subscribe(( newFisher: string) => {
      this.currentFisher = newFisher;
      this.setFisher();
   });
  }

}
