import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { CatchModel } from '../shared/catch.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseConnectionService { 

  filePath: string;
  dataKey: string;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;

  constructor(private angularData: AngularFireDatabase, private angularStorage: AngularFireStorage) { }

  getCatches():Observable<CatchModel[]> {
    return( this.angularData.list<CatchModel>('/users/u7FOtTJGasMlqIclUFNHuT0uCF72/').valueChanges()
    )
  }
  
  //Add catch to database
  setCatch(fishType: string, fishLength: string, fishWeight: string, currentFisher: string, 
    currentWeather: string, loggedBy: string, image:File) {
    this.angularData.list('/users/u7FOtTJGasMlqIclUFNHuT0uCF72/').push({
      fishType: fishType,
      fishWeight: fishWeight,
      fishLength: fishLength,
      fisher: currentFisher,
      loggedBy: loggedBy,
      weatherData: currentWeather
    }).then(ref => {

      //DATAKEY is entire path instead of only last chunk
      this.dataKey = ref.key;
      alert("submission successful");
           this.uploadImage(image, this.dataKey);
           this.angularData.list('/users/u7FOtTJGasMlqIclUFNHuT0uCF72/').update(
            this.dataKey,
            {photoURI: this.dataKey}
      );
    })
  }

   uploadImage(image: File, dataKey: string){
    this.filePath = "images/" + dataKey;
    this.ref = this.angularStorage.ref( this.filePath);
    this.task = this.angularStorage.upload( this.filePath, image)
    alert("image upload succesful")
  }
}