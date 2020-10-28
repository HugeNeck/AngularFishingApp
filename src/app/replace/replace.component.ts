import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-replace',
  templateUrl: './replace.component.html',
  styleUrls: ['./replace.component.css']
})
export class ReplaceComponent implements OnInit {

  title: string ='Add Fish to Well!';
  test: boolean = false;

  constructor() { }

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
