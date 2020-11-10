import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { CatchModel } from '../shared/catch.model';


@Component({
  selector: 'app-replace',
  templateUrl: './replace.component.html',
  styleUrls: ['./replace.component.css']
})
export class ReplaceComponent implements OnInit {

  title: string ='Add Fish to Well!';

   fishType:CatchModel;
   fishLength:string;
   fishWeight: string;
   currentFisher: string;
   currentWeather:string

  //works but need to reload page
  constructor() {
 }

 
 onSubmit(f : NgForm) {
    alert(f.value.fishType + f.value.fishLength + f.value.fishWeight)
}

  ngOnInit(): void {
    // where you would do someting like fetch from an API
  }

  ngAfterViewInit():void{
    // child components are loaded
  }

  ngOnDestroy(): void{
    // last function that is called
  }

}
