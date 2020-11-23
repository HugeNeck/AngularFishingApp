import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
// import { AngularFireStorage } from '@angular/fire/storage';
import { FirebaseConnectionService } from 'src/app/services/firebase-connection.service';
import { CatchModel } from 'src/app/shared/catch.model';


@Component({
  selector: 'app-catch-item',
  templateUrl: './catch-item.component.html',
  styleUrls: ['./catch-item.component.css']
})
export class CatchItemComponent implements OnInit {
  @Input() catch: CatchModel; 
  imageURL: string;

  constructor(private firebaseConnection:FirebaseConnectionService) {
  }


  ngOnInit(){
      this.firebaseConnection.getPhoto(this.catch.photoUri).subscribe(url =>
      this.imageURL = url)
  }
    
}
