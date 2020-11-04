import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { Observable } from 'rxjs';
import { CatchModel } from '../shared/catch.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseConnectionService {


  constructor(public angularData: AngularFireDatabase) { }

  getCatches():Observable<CatchModel[]> {
       
    return( this.angularData.list<CatchModel>('/users/u7FOtTJGasMlqIclUFNHuT0uCF72/').valueChanges()
    )
    
  }
}
