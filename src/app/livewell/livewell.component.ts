import { Component, OnInit } from '@angular/core';
import { FirebaseConnectionService } from '../services/firebase-connection.service'

import { CatchModel } from '../shared/catch.model';

@Component({
  selector: 'app-livewell',
  templateUrl: './livewell.component.html',
  styleUrls: ['./livewell.component.css']
})

export class LivewellComponent implements OnInit {

  catches: CatchModel[];
  selected: string = 'leaderBoard'


  constructor(private firebaseConnection: FirebaseConnectionService) {
   }

  ngOnInit(): void {
    this.catches = [];
    if (this.selected !== 'leaderBoard') {
      this.firebaseConnection.getCatches(this.selected).subscribe(
        catches => {
         catches.map( item => 
          this.catches.push(item))
        })
    } else if (this.selected === 'leaderBoard') {
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