import { Component, OnInit } from '@angular/core';
// import {FirebaseConnectionService} from '../services/firebase-connection.service'


@Component({
  selector: 'app-choose-fisher',
  templateUrl: './choose-fisher.component.html',
  styleUrls: ['./choose-fisher.component.css']
})
export class ChooseFisherComponent implements OnInit {

  currentFisher: string;

  fishers: string[] = ['Joel', 'Justin', 'Fez', 'Dan'];

  // private firebaseConnection:FirebaseConnectionService

  constructor() { }

  ngOnInit(): void {
  }

}
