import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { CatchModel } from '../shared/catch.model';
import { ChosenFisherService } from './chosen-fisher.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseConnectionService {
 
  filePath: string;
  dataKey: string;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  userId: string;

  constructor(private angularData: AngularFireDatabase, private angularStorage: AngularFireStorage, 
    public angularAuth: AngularFireAuth, private cfs: ChosenFisherService) { }

  //get catch from database
  getCatches(selected:string):Observable<CatchModel[]> {
    if(selected === 'loggedIn'){
      this.userId = 'u7FOtTJGasMlqIclUFNHuT0uCF72'
    }
    if(selected === 'chosen'){
      this.userId = this.cfs.currentFisherUID;
    }
    return( this.angularData.list<CatchModel>('/users/' + this.userId).valueChanges()
    )
  }

  getAllCatches(): Observable<any> {
    //  const fishersArray = this.cfs.getAllUID();
      // const joelData = this.angularData.list<CatchModel>('/users/' + fishersArray[0]).valueChanges();
      // const justinData = this.angularData.list<CatchModel>('/users/' + fishersArray[1]).valueChanges();
      // const fezData = this.angularData.list<CatchModel>('/users/' + fishersArray[2]).valueChanges();
      // const danData = this.angularData.list<CatchModel>('/users/' + fishersArray[3]).valueChanges();
     return( this.angularData.list<any>('/users/').valueChanges())
  }

  getPhoto(uri:string): Observable<any> {
    const path = '/images/' + uri;
    const ref = this.angularStorage.ref(path)
    return ref.getDownloadURL();
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

      this.dataKey = ref.key;
      alert("submission successful");
           this.uploadImage(image, this.dataKey);
           this.angularData.list('/users/u7FOtTJGasMlqIclUFNHuT0uCF72/').update(
            this.dataKey,
            {photoURI: this.dataKey}
      );
    })
  }

   async uploadImage(image: File, dataKey: string){
    this.filePath = "images/" + dataKey;
    this.ref = this.angularStorage.ref( this.filePath);
    this.task = this.angularStorage.upload( this.filePath, image);
    alert("image upload succesful");
  }
}