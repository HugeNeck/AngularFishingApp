import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { ChosenFisherService } from '../services/chosen-fisher.service';


@Component({
  selector: 'app-choose-fisher',
  templateUrl: './choose-fisher.component.html',
  styleUrls: ['./choose-fisher.component.css']
})
export class ChooseFisherComponent implements OnInit {

  currentFisher: string;
  
  fishers: string[];

  constructor(public cfs : ChosenFisherService) {
  }

  
  getFishers() : void {
    this.fishers = this.cfs.getFishers();
  }

  getFisher() : void {
    this.currentFisher = this.cfs.getFisher();
  }


  fisherChanged( event: MatRadioChange){
   this.cfs.setFisher(event.value)
  }

  ngOnInit(): void {
    this.getFishers();
    this.getFisher();
  }

}
