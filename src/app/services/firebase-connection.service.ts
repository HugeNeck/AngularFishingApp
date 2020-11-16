import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { CatchModel } from '../shared/catch.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseConnectionService { 

  dataKey:string;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;

  constructor(private angularData: AngularFireDatabase, private angularStorage: AngularFireStorage) { }

  getCatches():Observable<CatchModel[]> {
    return( this.angularData.list<CatchModel>('/users/u7FOtTJGasMlqIclUFNHuT0uCF72/').valueChanges()
    )
  }
  
  //Add catch to database
  setCatch(fishType: string, fishLength: string, fishWeight: string, currentFisher: string, 
    currentWeather: string, loggedBy: string, image: Blob) {
    this.angularData.list('/users/u7FOtTJGasMlqIclUFNHuT0uCF72/').push({
      fishType: fishType,
      fishWeight: fishWeight,
      fishLength: fishLength,
      fisher: currentFisher,
      loggedBy: loggedBy,
      weatherData: currentWeather
    }).then(key => {
      this.dataKey = key.toString();
      alert("submission successful")
       
      if (image != null) {  
           this.uploadImage(image, this.dataKey);
           this.angularData.list('users/u7FOtTJGasMlqIclUFNHuT0uCF72/' + this.dataKey).update(
            "u7FOtTJGasMlqIclUFNHuT0uCF72", this.dataKey
           )
       }

    });
  }

  uploadImage(image: Blob, name: string){
    // const response = await fetch(uri);
    // const blob = await response.blob();
    this.ref = this.angularStorage.ref("images/" + name);
    this.task = this.ref.put(image);
    console.log("image upload succesful")
  }
}