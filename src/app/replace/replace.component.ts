import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'

@Component({
  selector: 'app-replace',
  templateUrl: './replace.component.html',
  styleUrls: ['./replace.component.css']
})
export class ReplaceComponent implements OnInit {

  title: string ='Add Fish to Well!';
  test: boolean = false;

  //works but need to reload page
  constructor(public angularAuth: AngularFireAuth) {
    
 }

  logOut(){
    this.angularAuth.signOut()
    alert('logged out')
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
