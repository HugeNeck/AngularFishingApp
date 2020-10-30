import { Component, OnInit } from '@angular/core';
import {FirebaseConnectionService} from '../services/firebase-connection.service'

import { CatchModel } from '../shared/catch.model';

@Component({
  selector: 'app-livewell',
  templateUrl: './livewell.component.html',
  styleUrls: ['./livewell.component.css']
})

export class LivewellComponent implements OnInit {

  catches:CatchModel[];


  constructor(private firebaseConnection:FirebaseConnectionService) { 
    this.catches = this.firebaseConnection.getCatches();
  }

  ngOnInit(): void {
 
  }

}
