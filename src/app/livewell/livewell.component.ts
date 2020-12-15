import { Component,  OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { FirebaseConnectionService } from '../services/firebase-connection.service'

import { CatchModel } from '../shared/catch.model';

@Component({
  selector: 'app-livewell',
  templateUrl: './livewell.component.html',
  styleUrls: ['./livewell.component.css']
})

export class LivewellComponent implements OnInit {

  catches: CatchModel[];
  selected: string;

  constructor(private firebaseConnection: FirebaseConnectionService) {
   }

    ngOnInit():void {
      this.catches = [];
    }


  onChange(event: MatSelectChange) {
    if (event.value !== 'leaderBoard') {
      this.catches = [];
      this.firebaseConnection.getCatches(event.value).subscribe(
        catches => {
         catches.map( item => 
          this.catches.push(item))
        })
    } else if (event.value === 'leaderBoard') {
      this.catches= [];
      this.firebaseConnection.getAllCatches().subscribe(
        fisher => {
        fisher.map( item => {
          for (const key in item) {
            if (item.hasOwnProperty(key)) {
              this.catches.push(item[key]);
            }
          }
        })
      })
    } else return null;
  }

}
